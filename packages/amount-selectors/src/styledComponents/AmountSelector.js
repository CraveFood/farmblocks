import styled from "styled-components";

export default styled.div`
  display: flex;
  width: 100%;

  .inputComponent {
    margin: 0 8px;
    min-width: 50px;
    flex-grow: 1;

    input {
      text-align: center;
      &:invalid {
        /* remove Firefox default styling (red box-shadow) */
        box-shadow: none;
      }
    }
  }

  .button {
    border-radius: 50%;
    min-width: 34px;
    min-height: 34px;
  }
`;
