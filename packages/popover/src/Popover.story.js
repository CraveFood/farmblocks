import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Popover from ".";

storiesOf("popover", module).add("Default", withInfo()(() => <Popover />));
