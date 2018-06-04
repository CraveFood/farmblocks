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
      flex: none !important;
      width: 100%;
      text-align: center;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
