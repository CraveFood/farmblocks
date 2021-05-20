import styled from "styled-components";

export const DotsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.span`
  height: 8px;
  width: 8px;
  margin-right: 6px;
  cursor: pointer;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.08);

  &.active {
    background: rgba(0, 0, 0, 0.48);
  }
`;
