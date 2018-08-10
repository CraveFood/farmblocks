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
  if (props.disabled && !props.protected) {
    return colors.GREY_32;
  }
  return colors.CARBON;
};

const ifSmall = (smallValue, defaultValue) => props =>
  props.fontSize === fontSizes.SMALL ? smallValue : defaultValue;

const customCursor = props => (props.disabled ? "default" : "pointer");

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .input {
    order: 2;
    box-sizing: border-box;
    border: solid 1px;
    border-radius: 4px;
    border-color: ${inputBorderColor};
    background-color: ${props => (props.disabled ? colors.GREY_16 : "#ffffff")};
    ${inputBoxShadow};
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: text;

    .wrapped {
      flex: 1;
    }

    input {
      height: ${ifSmall("30", "46")}px;
      padding: 0 ${ifSmall("8", "16")}px;
      border-radius: 4px;

      border: 0;
      flex: 1;
      outline: none;
      font-family: Lato, sans-serif;
      font-size: ${ifSmall(fontSizes.SMALL, fontSizes.MEDIUM)}px;
      color: ${props => (props.disabled ? colors.GREY_32 : colors.CARBON)};
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
        padding-left: 8px;
      }
      &[role="combobox"] {
        cursor: ${customCursor};
      }
    }

    .icon {
      color: ${inputBorderColor};
      height: 16px;
    }

    .icon.left {
      margin-left: ${ifSmall("8", "16")}px;
    }

    .icon.dropdown {
      margin-left: 8px;
      margin-right: 16px;
    }

    .clear {
      color: ${colors.GREY_32};
      height: 16px;
      &:hover {
        text-decoration: none;
        color: ${colors.INDIGO_MILK_CAP};
      }
      a {
        text-decoration: none;
        cursor: pointer;
      }
      margin-right: ${ifSmall("8", "16")}px;
    }
  }

  .input.dropdown {
    cursor: ${customCursor};
  }

  .label {
    order: 1;
    line-height: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 8px;
    color: ${labelColor};
    float: left;
  }

  .moreInfo {
    position: relative;
    top: -1px;
  }

  input[type="number"] {
    -moz-appearance: textfield;
    min-width: 0; /* firefox */
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export default Wrapper;
