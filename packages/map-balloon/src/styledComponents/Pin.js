import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const Pin = styled.div`
  height: ${props => props.theme.pinSize}px;
  width: ${props => props.theme.pinSize}px;

  position: absolute;
  top: -${props => props.theme.pinSize / 2}px;
  left: -${props => props.theme.pinSize / 2}px;

  color: ${props => (props.highlighted && colors.CORN) || "white"};
`;
Pin.propTypes = {
  highlighted: PropTypes.bool
};

export default Pin;
