import React from "react";
import styled from "styled-components";

import NavButton from "./NavButton";
import NavButtonStyled from "./NavButton.styled";
import { PUSH } from "../../constants/variants";

export const ToggleButton = styled(NavButtonStyled)`
  position: fixed;
  top: 8px;
  left: 8px;
  z-index: ${({ variant, zIndex }) =>
    variant === PUSH ? zIndex + 10 : zIndex - 10};
`;

export default props => (
  <NavButton component={ToggleButton} icon="wg-list" {...props} />
);
