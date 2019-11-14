import React from "react";
import styled from "styled-components";
import { MdRemove } from "@crave/farmblocks-icon";

import NavButton from "./NavButton";
import NavButtonStyled from "./NavButton.styled";
import { PUSH } from "../../constants/variants";

export const CloseButton = styled(NavButtonStyled)`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  transition: 0.25s;
  ${({ variant }) => variant === PUSH && "display: none;"}
`;

export default props => (
  <NavButton component={CloseButton} {...props}>
    <MdRemove />
  </NavButton>
);
