const indexTemplate = componentName =>
  `export { default } from "./${componentName}";`;

module.exports = indexTemplate;
