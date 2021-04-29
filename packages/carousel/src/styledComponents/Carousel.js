import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  transition: ${(props) =>
    props.transitionEnabled ? "all 250ms linear" : "none"};
  transform: translateX(
    -${(props) => props.currentIndex * (100 / props.displayNumber)}%
  );
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    width: ${(props) => 100 / props.displayNumber}%;
    flex-shrink: 0;
    flex-grow: 1;
  }

  div img {
    width: 100%;
  }
`;
