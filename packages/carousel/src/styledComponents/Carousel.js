import styled from "styled-components";
import Button from "@crave/farmblocks-button";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
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
    -${(props) => props.currentIndex * (100.5 / props.displayNumber)}%
  );

  & > * {
    width: ${(props) => 100 / props.displayNumber}%;
    flex-shrink: 0;
    flex-grow: 1;
    border: 1px solid green;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ArrowButton = styled(Button)`
  z-index: 1;
  border-radius: 32px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  @media (hover: none) and (pointer: coarse) {
    & {
      display: none;
    }
  }
`;

export const Slide = styled.div`
  margin: 16px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  * {
    border-radius: 20px;
    width: 100%;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
  }
`;
