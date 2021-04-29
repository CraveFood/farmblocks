import styled from "styled-components";

export const DotsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.span`
  padding: 8px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? "rgba(0, 0, 0, 0.48)" : "rgba(0, 0, 0, 0.08)"};
`;
