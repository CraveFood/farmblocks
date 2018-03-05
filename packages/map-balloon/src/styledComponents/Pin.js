import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const Pin = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  position: absolute;
  top: -${props => props.size / 2}px;
  left: -${props => props.size / 2}px;
  border: 2px solid rgba(0, 0, 0, 0.16);
  background-color: ${colors.CORN};
  border-radius: 50%;
  box-sizing: border-box;
`;
Pin.propTypes = {
  size: PropTypes.number
};
Pin.defaultProps = {
  size: 18
};

export default Pin;
