import styled from "styled-components";
import { animated } from "react-spring";
import { colors } from "@crave/farmblocks-theme";
import Card from "@crave/farmblocks-card";

export const Wrapper = styled(animated.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${colors.GREY_32};
`;

export const ConstrainedCard = styled(Card)`
  max-height: 100%;
  max-width: 100%;
  min-width: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;

  .close {
    font-size: 32px;
    color: ${colors.GREY_16};
    &:hover {
      color: ${colors.GREY_32};
    }
  }
`;
