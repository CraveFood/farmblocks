import styled from "styled-components";

import selectorSizes from "../constants/selectorSizes";

const componentHeight = ({ size }) =>
  size === selectorSizes.SMALL ? "32px" : "48px";

export default styled.div`
  display: flex;
  height: ${componentHeight};

  .inputContainer {
    width: 70px;
    margin: 0 8px;

    input {
      text-align: center;
      &:invalid {
        /* remove Firefox default styling (red box-shadow) */
        box-shadow: none;
      }
    }
  }
`;
