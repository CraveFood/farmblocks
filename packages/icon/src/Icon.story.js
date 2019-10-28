import React from "react";

import * as icons from ".";
import IconsBrowser from "./IconsBrowser";

export default {
  title: "Assets|Icons",
  component: icons.SmPlaceholder,
  parameters: {
    componentSubtitle: "A list of SVG icons in JSX",
  },
};

export const allIcons = () => <IconsBrowser />;
