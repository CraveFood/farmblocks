import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const labelColor = props => {
  return props.invalid
    ? colors.STRAWBERRY
    : props.disabled ? colors.GREY_32 : colors.CARBON;
};
const inputBorderColor = props => {
  return props.invalid ? colors.STRAWBERRY : colors.GREY_16;
};
const inputBoxShadow = focused => props => {
  if (!focused && (props.disabled || props.filled)) {
    return css`
      box-shadow: none;
    `;
  }
  const shadowSize = props.invalid ? "0 2px 2px 0" : "0 4px 4px 0";
  return css`
    box-shadow: ${shadowSize} ${colors.GREY_16};
  `;
};
const Container = styled.label`
  font-family: Lato, sans-serif;
  display: flex;
  flex-direction: column;

  .label {
    order: 1;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 8px;
    color: ${labelColor};
  }
  input:focus + .label {
    color: ${colors.INDIGO_MILK_CAP};
  }

  input {
    order: 2;
    outline: none;
    border: solid 1px;
    border-radius: 4px;
    background-color: white;
    font-size: 16px;
    padding: 16px;
    color: ${colors.CARBON};
    border-color: ${inputBorderColor};
    ${inputBoxShadow(false)};
    &::placeholder {
      color: ${colors.GREY_32};
    }
    &:focus {
      ${inputBoxShadow(true)};
      border: 1px solid ${colors.INDIGO_MILK_CAP};
      &::placeholder {
        color: ${colors.GREY_16};
      }
    }
  }

  .message {
    order: 3;
  }
`;

export default Container;
