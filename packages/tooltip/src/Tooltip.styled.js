import styled from "styled-components";

export default styled.div`
  position: relative;
  display: ${props => (props.displayBlock ? "block" : "inline-block")};

  .hit-area {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .appear-enter {
    opacity: 0;
  }

  .appear-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }

  .appear-exit {
    opacity: 1;
  }

  .appear-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-out;
  }

  @media only screen and (pointer: coarse) {
    .hit-area {
      min-height: 40px;
      min-width: 40px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
