import PropTypes from "prop-types";
import styled from "styled-components";

const Pin = styled.div`
  height: ${props => props.theme.pinSize}px;
  width: ${props => props.theme.pinSize}px;

  position: absolute;
  top: -${props => props.theme.pinSize / 2}px;
  left: -${props => props.theme.pinSize / 2}px;

  color: ${props => props.pinColor};
`;
Pin.propTypes = {
  highlighted: PropTypes.bool
};

export default Pin;
