import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Table from ".";

storiesOf("Table", "module").add("Default", withInfo()(() => <Table />));
