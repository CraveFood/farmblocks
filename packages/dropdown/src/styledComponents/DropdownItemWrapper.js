import styled from "styled-components";

import { colors as colorConstants } from "@crave/farmblocks-theme";

const borderRadius = "3px";

const DropdownItemWrapper = styled.li`
  cursor: pointer;

  transition: all ease 0.2s;

  :hover {
    background: ${colorConstants.INDIGO_MILK_CAP};
    color: white;
  }

  border-bottom: solid 1px ${colorConstants.GREY_16};

  &:first-child {
    border-top-right-radius: ${borderRadius};
    border-top-left-radius: ${borderRadius};
  }

  &:last-child {
    border-bottom-right-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
  }

  > div {
    padding: 14px;
  }
`;

DropdownItemWrapper.displayName = "DropdownItemWrapper";
export default DropdownItemWrapper;
