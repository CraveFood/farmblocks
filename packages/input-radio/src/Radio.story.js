import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Radio from ".";

storiesOf("Radio", "module").add("Default", withInfo()(() => <Radio />));
