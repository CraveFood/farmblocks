import styled from "styled-components";
import Button from "@crave/farmblocks-button";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transition: ${(props) =>
    props.transitionEnabled ? "all 250ms linear" : "none"};
  -ms-overflow-style: none;
  scrollbar-width: none;
  transform: translateX(
    -${(props) => props.currentIndex * (100 / props.displayNumber)}%
  );

  & > * {
    width: ${(props) => 100 / props.displayNumber}%;
    flex-shrink: 0;
    flex-grow: 1;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.direction === "left" ? "flex-end" : "flex-start"};
  align-items: center;
  ${(props) =>
    props.direction === "left" ? "margin-right: 16px" : "margin-left: 16px"};
`;

export const ArrowButton = styled(Button)`
  border-radius: 32px;

  @media (hover: none) and (pointer: coarse) {
    & {
      display: none;
    }
  }
`;
