import styled, { css } from "styled-components";
import { colors, fontSizes } from "@crave/farmblocks-theme";

const inputBoxShadow = props => {
  if (!props.focused && (props.disabled || props.filled)) {
    return css`
      box-shadow: none;
    `;
  }
  const shadowSize = props.focused ? "0 4px 4px 0" : "0 2px 2px 0";
  return css`
    box-shadow: ${shadowSize} ${colors.GREY_16};
  `;
};
const inputBorderColor = props => {
  if (props.focused) {
    return colors.INDIGO_MILK_CAP;
  }
  return props.invalid ? colors.STRAWBERRY : colors.GREY_16;
};
const placeholderColor = props => {
  return props.focused ? colors.GREY_16 : colors.GREY_32;
};
const labelColor = props => {
  if (props.focused) {
    return colors.INDIGO_MILK_CAP;
  }
  if (props.invalid) {
    return colors.STRAWBERRY;
  }
  return props.disabled ? colors.GREY_32 : colors.CARBON;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .input {
    order: 2;
    box-sizing: border-box;
    border: solid 1px;
    border-radius: 4px;
    padding: 16px;
    border-color: ${inputBorderColor};
    background-color: ${props => (props.disabled ? colors.GREY_16 : "#ffffff")};
    ${inputBoxShadow};

    input {
      border: 0;
      width: 100%;
      outline: none;
      font-family: Lato, sans-serif;
      font-size: ${fontSizes.MEDIUM}px;
      color: ${colors.CARBON};
      background: none;
      &::placeholder {
        color: ${placeholderColor};
      }
    }
  }

  .label {
    order: 1;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 8px;
    color: ${labelColor};
  }

  .messages {
    order: 4;
    & .message {
      display: flex;
      margin-top: 16px;
      & .icon {
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
      }
    }
  }
`;
export default Wrapper;
