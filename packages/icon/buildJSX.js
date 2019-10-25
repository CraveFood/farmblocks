/* eslint-disable import/no-extraneous-dependencies */
const fs = require("fs");
const path = require("path");
const junk = require("junk");
const svgr = require("@svgr/core").default;

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

groups.reduce((allGroupsAcc, group) => {
  const groupPath = `${svgSourcePath}/${group}`;
  const svgFiles = fs.readdirSync(groupPath).filter(isSvg);

  const groupFiles = svgFiles.reduce((groupFilesAcc, file) => {
    const componentName = path.basename(file, path.extname(file));

    const jsxPath = `${jsxSourcePath}/${componentName}.js`;
    const svgCode = fs.readFileSync(`${groupPath}/${file}`, {
      encoding: "utf8",
    });

    const jsxCode = svgr.sync(svgCode, {
      replaceAttrValues: { "#2F313A": "{props.color}" },
      svgProps: {
        width: "{props.size}",
        height: "{props.size}",
        ref: "{ref}",
        ariaHidden: "{!props.ariaLabel}",
      },
      template: ({ template }, _opts, { imports, jsx }) => template.ast`
        ${imports}
        import PropTypes from 'prop-types';
        
        const ${componentName} = React.forwardRef(({size, ...props}, ref) => (
          ${jsx}
        ));

        ${componentName}.propTypes = {
          color: PropTypes.string,
          size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          ariaLabel: PropTypes.string
        };

        ${componentName}.defaultProps = {
          color: "currentColor",
          size: "1em"
        };

        export default ${componentName};
      `,
      plugins: [
        "@svgr/plugin-svgo",
        "@svgr/plugin-jsx",
        "@svgr/plugin-prettier",
      ],
    });

    fs.writeFileSync(jsxPath, jsxCode);

    return [...groupFilesAcc, jsxPath];
  }, []);

  return [...allGroupsAcc, ...groupFiles];
}, []);
