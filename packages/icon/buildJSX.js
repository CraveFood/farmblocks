/* eslint-disable no-console, import/no-extraneous-dependencies */
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const junk = require("junk");
const svgr = require("@svgr/core").default;
const ora = require("ora");

const jsxStatus = ora("Loading SVG files").start();

const svgSourcePath = "./src/svg";
const jsxSourcePath = "./src/jsx";

const { originalSizes, croppedSizes } = require("./sizes");

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

const jsxTemplate = (
  { template },
  { state: { componentName, group } },
  { jsx },
) => {
  return template.ast`
  import React from "react";
  import PropTypes from 'prop-types';

  import {withWrapper} from '../Icon';
  
  const Vector = React.forwardRef(({size, color, ...props}, ref) => (
    ${jsx}
  ));

  Vector.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    'aria-label': PropTypes.string
  };

  Vector.defaultProps = {
    color: "currentColor",
    size: "1em"
  };

  const ${componentName} = withWrapper(Vector);

  ${componentName}.groupName = "${group}";

  export default ${componentName};
`;
};

function convertFilesOfGroups(group, groupPath) {
  return async (groupFilesAccPromise, file) => {
    const groupFilesAcc = await groupFilesAccPromise;
    const componentName = path.basename(file, path.extname(file));

    jsxStatus.text = `Group: ${group} | File: ${componentName}`;

    const jsxPath = `${jsxSourcePath}/${componentName}.js`;
    const svgCode = await fs.promises.readFile(`${groupPath}/${file}`, {
      encoding: "utf8",
    });

    const iconSizeName = componentName.substr(0, 2);
    const originalSize = originalSizes[iconSizeName];
    const croppedSize = croppedSizes[iconSizeName];
    const margin = Math.floor((originalSize - croppedSize) / 2);

    const jsxCode = await svgr(
      svgCode,
      {
        icon: true,
        replaceAttrValues: { "#2F313A": "{color}" },
        svgProps: {
          width: "{size}",
          height: "{size}",
          ref: "{ref}",
          "aria-hidden": "{!props['aria-label']}",
          viewBox: `${margin} ${margin} ${croppedSize} ${croppedSize}`,
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
    return Promise.resolve([...groupFilesAcc, componentName]);
  };
}

async function buildJSX() {
  try {
    const files = await groups.reduce(async (allGroupsAccPromise, group) => {
      const allGroupsAcc = await allGroupsAccPromise;

      const groupPath = `${svgSourcePath}/${group}`;
      const svgFiles = (await fs.promises.readdir(groupPath)).filter(isSvg);

      const groupFiles = await svgFiles.reduce(
        convertFilesOfGroups(group, groupPath),
        Promise.resolve([]),
      );

      return Promise.resolve([...allGroupsAcc, ...groupFiles]);
    }, Promise.resolve([]));

    jsxStatus.succeed("JSX files created");

    return Promise.resolve(files);
  } catch (error) {
    jsxStatus.fail("Build failed");

    console.error(error);
    return Promise.reject();
  }
}

async function buildIndex(components) {
  const indexStatus = ora("Building index file").start();

  try {
    await fs.promises.writeFile(
      "./src/jsx/index.js",
      components
        .map(
          component =>
            `export { default as ${component} } from "./${component}";`,
        )
        .sort()
        .join("\n"),
    );

    indexStatus.succeed("Index file created");
    return Promise.resolve();
  } catch (error) {
    indexStatus.fail("Index file failed");

    console.error(error);
    return Promise.reject();
  }
}

buildJSX()
  .then(buildIndex)
  .then(lintFiles);
