import styled, { css } from "styled-components";

import { colors as colorConstants } from "@crave/farmblocks-theme";

const borderRadius = "3px";

const hoverColors = props => {
  if (props.footer) {
    return "";
  }
  return css`
    background: ${colorConstants.INDIGO_MILK_CAP};
    color: white;
  `;
};

const fontColor = props => {
  if (props.selected && !props.highlighted) {
    return colorConstants.INDIGO_MILK_CAP;
  }

  return colorConstants.OYSTER;
};

const cursor = props => (props.footer ? "auto" : "pointer");

const DropdownItemWrapper = styled.li`
  cursor: ${cursor};

  overflow: hidden;

  transition: all ease 0.2s;

  color: ${fontColor};

  :hover {
    ${hoverColors};
  }
  ${props => props.highlighted && hoverColors};

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

    :focus {
      outline: auto;
      outline-color: ${colorConstants.INDIGO_MILK_CAP};
    }

    :hover {
      outline: none;
    }
  }
`;

DropdownItemWrapper.displayName = "DropdownItemWrapper";
export default DropdownItemWrapper;
