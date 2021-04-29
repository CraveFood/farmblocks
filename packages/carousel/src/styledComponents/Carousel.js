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
`;

export const Arrow = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid #ddd;
  ${(props) => (props.direction === "left" ? "let: 24px" : "right: 24px")};

  @media (hover: none) and (pointer: coarse) {
    & {
      display: none;
    }
  }
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.span`
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${(props) => (props.active ? "black" : "white")};
`;
