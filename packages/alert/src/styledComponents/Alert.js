import styled from "styled-components";

import bgColors from "../constants/colors";
import { ATTENTION } from "../constants/alertTypes";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => bgColors[props.type]};
  box-shadow: 0 2px 2px 0 rgba(46, 204, 113, 0.16);
  border: solid 1px rgba(0, 0, 0, 0.16);
  min-height: ${2 * 20 + 32}px;

  z-index: ${props => props.zIndex};

  > p {
    font-family: Lato, sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    text-align: center;
    color: ${props => (props.type === ATTENTION ? "#2f313a" : "#ffffff")};
    margin: 0;
  }

  > .dismiss-button {
    position: absolute;
    top: 50%;
    margin-top: -16px;
    right: 24px;
  }
`;

export default Container;
