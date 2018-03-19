import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Carousel from ".";

storiesOf("Carousel", "module").add("Default", withInfo()(() => <Carousel />));
