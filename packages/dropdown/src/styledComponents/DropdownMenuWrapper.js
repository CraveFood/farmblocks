import styled from "styled-components";

import { colors as colorConstants } from "@crave/farmblocks-theme";

const DropdownMenuWrapper = styled.div`
  margin-top: 16px;
  min-width: 100%;
  width: ${props => props.width};
  whitespace: no-wrap;
  max-height: ${props => props.maxHeight};
  overflow-y: auto;
  scroll-behavior: smooth;

  border: solid 1px ${colorConstants.GREY_16};
  border-radius: 4px;
  box-shadow: 0 4px 4px 0 ${colorConstants.GREY_16};

  background: white;

  position: absolute;
  right: ${props => props.align === "right" && 0};

  z-index: ${props => props.zIndex};

  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

DropdownMenuWrapper.displayName = "DropdownMenuWrapper";
export default DropdownMenuWrapper;
