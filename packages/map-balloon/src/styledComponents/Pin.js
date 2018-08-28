import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const pinSize = props => props.pinSize;
const offset = props => pinSize(props) / 2;

const Pin = styled.div`
  font-size: ${pinSize}px;
  text-align: center;
  width: ${pinSize}px;

  position: absolute;
  bottom: 0;
  left: -${offset}px;

  color: ${props => props.pinColor};

  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);

  ${props => (props.interactive ? interactiveStyle : "")};
`;

Pin.propTypes = {
  interactive: PropTypes.bool,
  animated: PropTypes.bool
};

const interactiveStyle = css`
  ${props =>
    props.animated
      ? "transition: transform 0.3s, color 0.3s, background-color 0.3s"
      : ""};
  font-size: ${props => props.pinSize - 16}px;
  padding: 8px;
  height: ${pinSize}px;
  box-sizing: border-box;
  cursor: pointer;

  bottom: -${offset}px;
  text-shadow: none;

  color: ${props => props.pinColor};
  background-color: white;

  border-radius: 50%;
  border: 1px solid ${colors.GREY_16};
  box-shadow: 0 2px 2px 0 ${colors.GREY_16};

  &:active {
    /* while pressed down */
    transform: translateY(2px);
  }

  &.open {
    color: white;
    background-color: ${props => props.pinHighlightColor || props.pinColor};
  }
`;

export default Pin;
