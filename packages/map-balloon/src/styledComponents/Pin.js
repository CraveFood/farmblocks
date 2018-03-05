import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const Pin = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: -9px;
  left: -9px;
  border: 2px solid rgba(0, 0, 0, 0.16);
  background-color: ${colors.CORN};
  border-radius: 50%;
  box-sizing: border-box;
`;

export default Pin;
