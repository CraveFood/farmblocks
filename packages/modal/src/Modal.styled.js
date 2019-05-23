import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import Card from "@crave/farmblocks-card";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${colors.GREY_32};
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ConstrainedCard = styled(Card)`
  max-height: 100%;
  width: auto;
  max-width: 100%;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;
