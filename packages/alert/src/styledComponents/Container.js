import styled from "styled-components";

import bgColors from "../constants/colors";
import { ATTENTION } from "../constants/alertTypes";

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
    font-family: Lato, sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    text-align: center;
    color: ${props => (props.type === ATTENTION ? "#2f313a" : "#ffffff")};
  }
`;

export default Container;
