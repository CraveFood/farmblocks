import styled from "styled-components";

const getBorderRadius = ({ borderRadius, badge }) =>
  badge ? "100%" : borderRadius;

const StyledImage = styled.img.attrs(props => ({
  width: props.width || props.size,
  height: props.height || props.size,
}))`
  box-sizing: border-box;
  border-radius: ${getBorderRadius};
  object-fit: ${({ fit }) => fit};
  ${props => props.css};
`;
export default StyledImage;
