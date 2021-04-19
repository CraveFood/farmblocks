import styled from "styled-components";

const getBorderRadius = ({ borderRadius, badge }) =>
  badge ? "100%" : borderRadius;

const StyledImage = styled.img.attrs((props) => ({
  width: props.width || props.size,
  height: props.height || props.size,
}))`
  box-sizing: border-box;
  border-radius: ${getBorderRadius};
  object-fit: ${({ fit }) => fit};
  box-shadow: ${({ withBoxShadow }) =>
    withBoxShadow && "0px 4px 4px 0px rgba(0, 0, 0, 0.16);"};
  ${(props) => props.css};
`;
export default StyledImage;
