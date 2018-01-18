const { format } = require("prettier");

const componentTemplate = componentName =>
  format(`
import * as React from "react"; 
 
const ${componentName} = props => { 
  return <div />; 
}; 
 
export default ${componentName}; 
`);

module.exports = componentTemplate;
