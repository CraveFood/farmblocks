import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: ${props => props.x}px;
  left: ${props => props.y}px;
`;
Wrapper.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Wrapper;
