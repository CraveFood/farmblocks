import styled, { css } from "styled-components";
import { transparentize } from "polished";
import { colors, fontSizes } from "@crave/farmblocks-theme";

const outlineColor = transparentize(0.92, colors.INDIGO_MILK_CAP);

const inputBorderColor = props => {
  if (props.focused || props.active) {
    return colors.INDIGO_MILK_CAP;
  }
  return props.invalid ? colors.STRAWBERRY : "rgba(0,0,0,0.08)";
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

const focusedStyle = ({ focused, active, borderRadius }) =>
  (focused || active) &&
  css`
    box-shadow: 0 0 0px ${borderRadius} ${outlineColor};
    border-width: 2px;
    margin: -1px; // balances the border-width increase
  `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > .input {
    order: 2;
    box-sizing: border-box;
    border: solid 1px;
    border-radius: ${({ borderRadius }) => borderRadius};
    border-color: ${inputBorderColor};
    background-color: ${props => (props.disabled ? colors.GREY_16 : "#ffffff")};

    ${focusedStyle};

    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: text;
    overflow: auto; /* clip children background to border radius */

    .wrapped {
      flex: 1;
    }

    > input,
    .select__search & input {
      padding: 0 ${ifSmall("8", "16")}px;
      height: ${ifSmall("30", "46")}px;
    }

    > textarea {
      padding: 16px;
    }

    > input,
    > textarea,
    .select__search & input {
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

    > .icon {
      color: ${inputBorderColor};
      font-size: 20px;
      height: 24px;
    }

    > .icon.left {
      margin-left: ${ifSmall("8", "12")}px;
    }

    > .icon.dropdown {
      margin: 0 8px;
    }

    > .clear {
      color: ${colors.GREY_16};
      font-size: 20px;
      height: 24px;
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

  .label {
    margin-bottom: 8px;
  }
`;
export default Wrapper;
