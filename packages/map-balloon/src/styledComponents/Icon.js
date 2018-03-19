import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.theme.iconBox}px;
  width: ${props => props.theme.iconBox}px;
  min-width: ${props => props.theme.iconBox}px;
  margin: 8px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  background-color: #f6f8f9;
`;
