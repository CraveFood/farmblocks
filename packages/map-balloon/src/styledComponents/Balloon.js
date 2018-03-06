import styled, { css } from "styled-components";
import Card from "@crave/farmblocks-card";

import alignments from "../constants/alignments";

const alignStyles = {
  [alignments.LEFT]: css`left: -33px;`,
  [alignments.RIGHT]: css`right: -33px;`
};

const Balloon = styled(Card)`
  position: absolute;
  bottom: 17px;
  ${props => alignStyles[props.align]} height: 320px;
  width: 320px;
  padding: 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export default Balloon;
