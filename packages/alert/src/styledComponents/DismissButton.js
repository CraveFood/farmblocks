import styled from "styled-components";

import bgColors from "../constants/colors";

const DismissButton = styled.button`
  position: absolute;
  top: 50%;
  margin-top: -16px;
  right: 24px;
  width: 32px;
  height: 32px;
  border-radius: 2.7px;
  color: rgba(255, 255, 255, 0.56);
  background-color: rgba(0, 0, 0, 0.16);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.16);
  border: solid 0.7px rgba(0, 0, 0, 0.16);
  cursor: pointer;

  :hover, :active {
    color: #ffffff;
    background-color: ${props => bgColors[props.type]}
    border: solid 1px rgba(0, 0, 0, 0.16);
  }

  :hover{
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16);
  }    

  :active {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.16);
  }

  :focus {
    outline: none;
  }
}
`;

export default DismissButton;
