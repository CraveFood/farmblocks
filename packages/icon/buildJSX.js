/* eslint-disable no-console, import/no-extraneous-dependencies */
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const junk = require("junk");
const svgr = require("@svgr/core").default;
const ora = require("ora");

const status = ora("Loading SVG files").start();

const svgSourcePath = "./src/svg";
const jsxSourcePath = "./src/jsx";

if (!fs.existsSync(jsxSourcePath)) {
  fs.mkdirSync(jsxSourcePath);
}

const isDir = name => fs.lstatSync(`${svgSourcePath}/${name}`).isDirectory();
const isSvg = file => path.extname(file).toLowerCase() === ".svg";

const groups = fs
  .readdirSync(svgSourcePath)
  .filter(junk.not) // exclude system files/folders
  .filter(isDir);

async function lintFiles() {
  const lintStatus = ora("Linting files").start();
  try {
    await exec("eslint --fix --ext js ./src/jsx/");
    lintStatus.succeed("Lint succeeded");
  } catch (error) {
    lintStatus.fail("Lint failed");
    console.error(error);
  }
}

const jsxTemplate = ({ template }, { state }, { imports, jsx }) => template.ast`
  ${imports}
  import PropTypes from 'prop-types';
  
  const ${state.componentName} = React.forwardRef(({size, ...props}, ref) => (
    ${jsx}
  ));

  ${state.componentName}.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ariaLabel: PropTypes.string
  };

  ${state.componentName}.defaultProps = {
    color: "currentColor",
    size: "1em"
  };

  export default ${state.componentName};
`;

function convertFilesOfGroups(group, groupPath) {
  return async (groupFilesAccPromise, file) => {
    const groupFilesAcc = await groupFilesAccPromise;
    const componentName = path.basename(file, path.extname(file));

    status.text = `Group: ${group} | File: ${componentName}`;

    const jsxPath = `${jsxSourcePath}/${componentName}.js`;
    const svgCode = await fs.promises.readFile(`${groupPath}/${file}`, {
      encoding: "utf8",
    });

    const jsxCode = await svgr(
      svgCode,
      {
        replaceAttrValues: { "#2F313A": "{props.color}" },
        svgProps: {
          width: "{props.size}",
          height: "{props.size}",
          ref: "{ref}",
          ariaHidden: "{!props.ariaLabel}",
        },
        template: jsxTemplate,
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
      },
      { componentName, group },
    );
    await fs.promises.writeFile(jsxPath, jsxCode);
    return Promise.resolve([...groupFilesAcc, jsxPath]);
  };
}

async function buildJSX() {
  try {
    await groups.reduce(async (allGroupsAccPromise, group) => {
      const allGroupsAcc = await allGroupsAccPromise;

      const groupPath = `${svgSourcePath}/${group}`;
      const svgFiles = (await fs.promises.readdir(groupPath)).filter(isSvg);

      const groupFiles = await svgFiles.reduce(
        convertFilesOfGroups(group, groupPath),
        Promise.resolve([]),
      );

      return Promise.resolve([...allGroupsAcc, ...groupFiles]);
    }, Promise.resolve([]));

    status.succeed("JSX files created");

    return Promise.resolve();
  } catch (error) {
    status.fail("Build failed");

    console.error(error);
    return Promise.reject();
  }
}

buildJSX().then(lintFiles);
