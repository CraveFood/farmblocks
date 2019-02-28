import styled, { css } from "styled-components";
import { colors as colorConstants } from "@crave/farmblocks-theme";

import tagTypes from "../../constants/tagTypes";

const rightPadding = props => (props.onRemove ? "0px" : "8px");

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

const StyledTag = styled.div`
  display: inline-flex;
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
    padding: 5px 0px 7px 7px;
  }

  .icon {
    padding-right: 8px;
  }

  .close-icon {
    display: inline-flex;
    box-sizing: border-box;
    padding: 5px 8px 8px 8px;
    font-size: 8px;
    color: ${colorConstants.GREY_32};

    pointer-events: auto;
  }

  &:hover .close-icon,
  &:focus .close-icon {
    padding-right: 7px;
    cursor: pointer;
  }

  ${props => typeStyles[props.type]};
`;

export default StyledTag;
