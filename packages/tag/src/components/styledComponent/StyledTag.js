import styled, { css } from "styled-components";
import { colors as colorConstants } from "@crave/farmblocks-theme";

import tagTypes from "../../constants/tagTypes";

const rightPadding = props => (props.removable ? "1px" : "8px");

const typeStyles = {
  [tagTypes.SECONDARY]: css`
    background-color: ${colorConstants.INDIGO_MILK_CAP};
    color: white;

    &:hover {
      border-color: ${colorConstants.GREY_32};
      background-color: ${colorConstants.BLUE_CORN};
    }

    &:hover .close-icon,
    &:focus .close-icon {
      color: white;
    }
  `,
  [tagTypes.NEUTRAL]: css`
    background-color: ${colorConstants.SUGAR};
    color: ${colorConstants.OYSTER};

    &:hover {
      background-color: ${colorConstants.GREY_16};
    }
  `,
};

const disabledStyles = {
  [tagTypes.SECONDARY]: css`
    background-color: ${colorConstants.GREY_32};
    pointer-events: none;
    padding: 6px 14px 8px 15px;
  `,
};

const StyledTag = styled.div`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${colorConstants.GREY_16};
  border-radius: 4px;
  padding: 6px ${rightPadding} 8px 8px;
  height: 32px;
  margin: 0 8px 8px 0;

  font-size: 14px;
  font-family: Lato;
  font-weight: 600;

  cursor: default;
  pointer-events: none;
  &:hover {
    border-width: 2px;
    padding: 5px 0 7px 7px;
  }

  .icon {
    font-size: 20px;
    display: inline-flex;
    align-items: center;
  }

  .close-icon {
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    font-size: 20px;
    color: ${colorConstants.GREY_32};

    pointer-events: auto;
  }

  &:hover .close-icon,
  &:focus .close-icon {
    cursor: pointer;
  }

  ${props => typeStyles[props.type]};
  ${props => (props.disabled && disabledStyles[props.type]) || ""};
`;

export default StyledTag;
