import React from "react";

import { ToggleButton } from "./NavButton.styled";
import NavButton from "./NavButton";

export default React.memo(props => (
  <NavButton component={ToggleButton} icon="wg-list" {...props} />
));
