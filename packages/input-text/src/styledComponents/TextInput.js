import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const inputBorder = props => {
  const borderColor = props.invalid ? colors.STRAWBERRY : colors.GREY_16;
  return `solid 1px ${borderColor}`;
};
const Container = styled.label`
  input {
    outline: none;
    border: ${inputBorder};
    &:focus {
      border: 1px solid ${colors.INDIGO_MILK_CAP};
    }
  }
`;

export default Container;
