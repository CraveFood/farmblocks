import styled from "styled-components";

export default styled.div`
  display: flex;
  height: 48px;

  .inputContainer {
    width: 70px;
    margin: 0 8px;

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
