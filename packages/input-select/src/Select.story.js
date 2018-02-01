import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Select from ".";

storiesOf("Select", "module").add("Default", withInfo()(() => <Select />));
