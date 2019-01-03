const { format } = require("prettier");

const storyTemplate = ({ componentName, fullName }) =>
  format(
    `
import React from "react";
import { storiesOf } from "@storybook/react";

import ${componentName} from ".";

storiesOf("${fullName}", module).add(
  "Default",
  () => <${componentName} />)
);
`,
    { parser: "babylon" }
  );

module.exports = storyTemplate;
