import React from "react";

import { CloseButton } from "./NavButton.styled";
import NavButton from "./NavButton";

export default React.memo(props => (
  <NavButton component={CloseButton} icon="wg-close" {...props} />
));
