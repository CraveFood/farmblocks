import styled from "styled-components";

import bgColors from "../constants/colors";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${props => bgColors[props.type]};
  box-shadow: 0 2px 2px 0 rgba(46, 204, 113, 0.16);
  border: solid 1px rgba(0, 0, 0, 0.16);
  min-height: ${2 * 20 + 32}px;

  > p {
    color: white;
  }
`;

export default Container;
