import styled from "styled-components";

export const Container = styled.div`
  padding: 8px;
  * {
    width: 100%;
    border-radius: ${({ borderRadius }) => borderRadius}px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
