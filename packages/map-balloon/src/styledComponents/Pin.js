import PropTypes from "prop-types";
import styled from "styled-components";

const pinSize = props => props.pinSize;
const offset = props => pinSize(props) / 2;

const Pin = styled.div`
  font-size: ${pinSize}px;

  position: absolute;
  bottom: 0;
  left: -${offset}px;

  color: ${props => props.pinColor};

  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
`;
Pin.propTypes = {
  highlighted: PropTypes.bool
};

export default Pin;
