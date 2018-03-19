import styled from "styled-components";

export default styled.div`
  flex: 1;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
