import styled from "styled-components";

import { BodyCell } from "./Cell";

const injectClassName = className => props => ({
  className: `${className} ${props.className || ""}`,
});

export const ChildRow = styled.tr.attrs(injectClassName("row grouped"))``;

export const ChildCell = styled(BodyCell).attrs(props => ({
  grouped: true,
  ...injectClassName("cell")(props),
}))``;

export const IndentedChildCell = styled(ChildCell).attrs(
  injectClassName("corner-icon"),
)``;
