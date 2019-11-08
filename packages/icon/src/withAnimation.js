import styled, { keyframes } from "styled-components";

const SPIN = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export default (
  Comp,
  {
    animation = SPIN,
    duration = "2s",
    easing = "linear",
    delay = "0s",
    iterations = "infinite",
    direction = "normal",
  } = {},
) => styled(Comp)`
  animation: ${duration} ${easing} ${delay} ${iterations} ${direction}
    ${animation};
`;
