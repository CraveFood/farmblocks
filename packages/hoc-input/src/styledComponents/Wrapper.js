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
  if (props.focused || props.active) {
    return colors.INDIGO_MILK_CAP;
  }
  return props.invalid ? colors.STRAWBERRY : colors.GREY_16;
};
const placeholderColor = props => {
  return props.focused ? colors.GREY_16 : colors.GREY_32;
};

const ifSmall = (smallValue, defaultValue) => props =>
  props.fontSize === fontSizes.SMALL ? smallValue : defaultValue;

const customCursor = props => (props.disabled ? "default" : "pointer");

const fontStyles = css`
  font-family: Lato, sans-serif;
  font-size: ${ifSmall(fontSizes.SMALL, fontSizes.MEDIUM)}px;
`;

const addonColor = props => {
  if (props.focused || props.active) {
    return css`
      background-color: ${colors.INDIGO_MILK_CAP};
      color: white;
    `;
  }
  if (props.invalid) {
    return css`
      background-color: ${colors.STRAWBERRY};
      color: white;
    `;
  }
  if (props.disabled && !props.protected) {
    return css`
      background-color: ${colors.GREY_16};
      color: ${colors.GREY_32};
    `;
  }
  return css`
    background-color: ${colors.SUGAR};
    color: ${colors.CARBON};
  `;
};

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
    overflow: auto; /* clip children background to border radius */

    .wrapped {
      flex: 1;
    }

    input {
      padding: 0 ${ifSmall("8", "16")}px;
      height: ${ifSmall("30", "46")}px;
    }

    textarea {
      padding: 16px;
    }

    input,
    textarea {
      min-width: 0;
      border: 0;
      flex: 1;
      outline: none;
      ${fontStyles};
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

  input[type="number"] {
    -moz-appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .prefix,
  .suffix {
    ${fontStyles};
    ${addonColor};
    padding: 0 16px;
    align-self: stretch;
    display: flex;
    align-items: center;
  }
`;
export default Wrapper;
