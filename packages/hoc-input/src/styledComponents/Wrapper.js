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
    padding: ${props => (props.compact ? "8" : "16")}px;
    border-color: ${inputBorderColor};
    background-color: ${props => (props.disabled ? colors.GREY_16 : "#ffffff")};
    ${inputBoxShadow};
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: text;

    input {
      border: 0;
      flex: 1;
      outline: none;
      font-family: Lato, sans-serif;
      font-size: ${fontSizes.MEDIUM}px;
      color: ${colors.CARBON};
      background: none;
      &::placeholder {
        color: ${placeholderColor};
      }
      &[type="search"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        &::-webkit-search-cancel-button {
          display: none;
        }
        &::-ms-clear {
          width: 0;
          height: 0;
        }
      }
    }

    .icon {
      color: ${inputBorderColor};
      margin-right: 8px;
      height: 16px;
    }

    .clear {
      color: ${colors.GREY_16};
      margin-left: 8px;
      height: 16px;
      cursor: normal;
      &:hover {
        text-decoration: none;
        color: ${colors.INDIGO_MILK_CAP};
      }
      a {
        text-decoration: none;
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
