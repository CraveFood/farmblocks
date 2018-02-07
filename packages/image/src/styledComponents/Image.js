import styled from "styled-components";
import badgeSizes from "../constants/badgeSizes";
import thumbnailSizes from "../constants/thumbnailSizes";
import { colors as colorConstants } from "@crave/farmblocks-theme";

const size = props => props.size;

const borderRadius = props => (props.badge ? "100%" : "4px");

const borderWidth = props => {
  const sizeLimit = props.badge ? badgeSizes.MEDIUM : thumbnailSizes.LARGE;
  return props.size < sizeLimit ? "1px" : "2px";
};

const borderColor = colorConstants.GREY_16;

const backgroundImage = props => window.encodeURI(props.src);
const backgroundSize = props => props.fit;

const StyledImage = styled.div`
  background-origin: border-box;
  background-repeat: no-repeat;
  box-sizing: border-box;
  min-width: ${size}px;
  min-height: ${size}px;
  width: ${size}px;
  height: ${size}px;
  overflow: hidden;
  border: solid ${borderWidth} ${borderColor};
  border-radius: ${borderRadius};
  background-image: url(${backgroundImage});
  background-size: ${backgroundSize};
  background-position: center;
`;

export default StyledImage;
