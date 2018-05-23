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

const ifSmall = (smallValue, defaultValue) => props =>
  props.type.toLowerCase() === "search" || props.fontSize === fontSizes.SMALL
    ? smallValue
    : defaultValue;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .input {
    order: 2;
    box-sizing: border-box;
    height: ${ifSmall("32", "48")}px;
    border: solid 1px;
    border-radius: 4px;
    padding: 0 ${ifSmall("8", "16")}px;
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
      }
      &[role="combobox"] {
        cursor: pointer;
      }
    }

    .icon {
      color: ${inputBorderColor};
      height: 16px;
    }

    .icon.search {
      margin-right: 8px;
    }

    .icon.dropdown {
      margin-left: 8px;
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
      }
    }
  }

  .input.dropdown {
    cursor: pointer;
  }

  .label {
    order: 1;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 8px;
    color: ${labelColor};
  }
`;
export default Wrapper;
