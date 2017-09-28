import styled from "styled-components";

const DismissButton = styled.button`
  position: absolute;
  top: 50%;
  margin-top: -16px;
  right: 24px;
  width: 32px;
  height: 32px;
  border-radius: 2.7px;
  background-color: rgba(0, 0, 0, 0.16);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.16);
  border: solid 0.7px rgba(0, 0, 0, 0.16);
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.32);
  }
`;

export default DismissButton;
