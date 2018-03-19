import styled from "styled-components";
import badgeSizes from "../constants/badgeSizes";
import thumbnailSizes from "../constants/thumbnailSizes";
import { colors as colorConstants } from "@crave/farmblocks-theme";

const width = props => props.width || `${props.size}px`;
const height = props => props.height || `${props.size}px`;

const borderRadius = props => {
  if (props.border && props.border.radius) {
    return props.border.radius;
  }
  return props.badge ? "100%" : "4px";
};

const borderWidth = props => {
  if (props.border && props.border.width) {
    return props.border.width;
  }
  const sizeLimit = props.badge ? badgeSizes.MEDIUM : thumbnailSizes.LARGE;
  return props.size < sizeLimit ? "1px" : "2px";
};

const borderColor = props =>
  props.border && props.border.color
    ? props.border.color
    : colorConstants.GREY_16;

const backgroundImage = props => window.encodeURI(props.src);
const backgroundSize = props => props.fit;

const StyledImage = styled.div`
  background-origin: border-box;
  background-repeat: no-repeat;
  box-sizing: border-box;
  min-width: ${width};
  min-height: ${height};
  width: ${width};
  height: ${height};
  overflow: hidden;
  border: solid ${borderWidth} ${borderColor};
  border-radius: ${borderRadius};
  background-image: url(${backgroundImage});
  background-size: ${backgroundSize};
  background-position: center;
`;

export default StyledImage;
