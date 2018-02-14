import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const checkboxSize = "16px";
const toggleSize = "24px";
const margin = "8px";

const checkboxColors = props => {
  if (props.disabled) {
    return css`
      color: ${colors.GREY_16};
      background-color: ${colors.GREY_16};
      border-color: ${colors.GREY_16};
    `;
  }
  return css`
    color: ${props.checked ? "#FFFFFF" : colors.INDIGO_MILK_CAP};
    background-color: ${props.checked ? colors.INDIGO_MILK_CAP : "#FFFFFF"};
    border-color: ${props.checked ? colors.INDIGO_MILK_CAP : colors.GREY_16};
  `;
};

const checkboxStyles = props =>
  !props.switch &&
  css`
    width: ${checkboxSize};
    height: ${checkboxSize};
    font-size: 8px;
    border-radius: 4px;

    .checkmark {
      visibility: ${props => (props.checked ? "visible" : "hidden")};
      display: flex;
      justify-content: center;
      width: 100%;
    }
    ${checkboxColors};
  `;

const switchBackground = props => {
  if (props.disabled) {
    return colors.GREY_32;
  }
  if (props.checked) {
    return colors.LETTUCE;
  }
  return colors.SUGAR;
};

const switchStyles = props =>
  props.switch &&
  css`
    width: 56px;
    height: 32px;
    border-radius: 100px;
    border-color: ${colors.GREY_16};

    .toggle {
      position: relative;
      transition: ease all 0.2s;
      width: ${toggleSize};
      height: ${toggleSize};
      border: 1px solid transparent;
      border-radius: ${toggleSize};
      box-sizing: border-box;
      background: ${props.disabled ? colors.WHITE_32 : "white"};
      box-shadow: 0 0 2px 0 ${colors.GREY_16};
      left: ${props => (props.checked ? "28px" : "4px")};
    }
    background: ${switchBackground};
  `;

const hoverStyles = props => {
  if (props.disabled) {
    return;
  }

  if (props.switch) {
    if (props.checked) {
      return css`
        background: ${colors.AVOCADO};
        border-color: ${colors.GREY_16};
        .toggle {
          border-color: ${colors.LETTUCE};
          left: 22px;
        }
      `;
    }
    return css`
      background: ${colors.SUGAR};
      border-color: ${colors.INDIGO_MILK_CAP};
      .toggle {
        border-color: ${colors.INDIGO_MILK_CAP};
        left: 10px;
      }
    `;
  }

  if (!props.checked) {
    return css`
      border-color: ${colors.INDIGO_MILK_CAP};
    `;
  }

  return css`
    color: ${colors.INDIGO_MILK_CAP};
    background-color: #ffffff;
    border-color: ${colors.INDIGO_MILK_CAP};
  `;
};

const Label = styled.label`
  display: inline-flex;

  .tooltipTarget {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: ${margin};
  }

  .hiddenCheckbox {
    opacity: 0;
    width: 0;
    margin: 0;
  }

  .visibleCheckbox {
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid;
    margin-right: ${props => (props.hasText ? margin : "0")};

    ${switchStyles};
    ${checkboxStyles};
  }

  :hover .visibleCheckbox {
    ${hoverStyles};
    border-width: ${props => (props.disabled || props.switch ? "1px" : "2px")};
  }

  .hiddenCheckbox:focus + div .visibleCheckbox {
    ${props =>
      props.switch
        ? css`
            outline: auto 2px Highlight;
            outline: auto 5px -webkit-focus-ring-color;
          `
        : css`
            border-color: ${colors.INDIGO_MILK_CAP};
          `};
  }
`;

export default Label;
