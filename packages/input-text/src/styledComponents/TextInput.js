import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const labelColor = props => {
  return props.invalid
    ? colors.STRAWBERRY
    : props.disabled ? colors.GREY_32 : colors.CARBON;
};
const inputBorder = props => {
  const borderColor = props.invalid ? colors.STRAWBERRY : colors.GREY_16;
  return `solid 1px ${borderColor}`;
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
    border: ${inputBorder};
    &:focus {
      border: 1px solid ${colors.INDIGO_MILK_CAP};
    }
  }

  .message {
    order: 3;
  }
`;

export default Container;
