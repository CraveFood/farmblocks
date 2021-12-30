import styled from "styled-components";
import { animated } from "@react-spring/web";
import { space, flexbox } from "styled-system";
import { colors } from "@crave/farmblocks-theme";
import Card from "@crave/farmblocks-card";

export const Wrapper = styled(animated.div)`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  ${space}
  ${flexbox}
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${colors.GREY_32};
`;

export const CardWrapper = styled(animated.div)`
  max-width: 100%;
  max-height: 100%;
`;

export const ConstrainedCard = styled(Card)`
  max-height: 100%;
  max-width: 100%;
  min-width: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  border: none;
  overflow: hidden;
  ${space}
`;

export const ContentWrapper = styled.div`
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 16px;
`;

export const HeaderWrapper = styled.header`
  overflow: auto;
  padding-right: 16px;
`;

export const Section = styled.div`
  display: flex;
  padding: 12px 16px;
  ${({ children, header }) =>
    children &&
    `border-${header ? "bottom" : "top"}: solid 1px ${colors.GREY_08}`};

  align-items: ${({ header }) => header && "center"};

  .closeButton {
    margin-left: auto;
  }
`;
