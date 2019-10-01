import styled from "styled-components";

const getWidth = props => props.width || `${props.size}px`;
const getHeight = props => props.height || `${props.size}px`;

const getBorderRadius = ({ borderRadius, badge }) =>
  badge ? "100%" : borderRadius;

const StyledImage = styled.img`
  box-sizing: border-box;
  width: ${getWidth};
  height: ${getHeight};
  border-radius: ${getBorderRadius};
  object-fit: ${({ fit }) => fit};
  ${props => props.css};
`;

export default StyledImage;
