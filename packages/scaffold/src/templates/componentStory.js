const { format } = require("prettier");

const storyTemplate = ({ componentName, fullName }) =>
  format(
    `
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import ${componentName} from ".";

storiesOf("${fullName}", "module").add(
  "Default",
  withInfo()(() => <${componentName} />)
);
`,
    { parser: "babylon" }
  );

module.exports = storyTemplate;
