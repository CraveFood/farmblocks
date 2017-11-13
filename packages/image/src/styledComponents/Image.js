import styled from "styled-components";

import thumbnailSizes from "../constants/thumbnailSizes";
import imageTypes from "../constants/types";

const size = props => props.size;

const borderRadius = props =>
  props.type === imageTypes.THUMBNAIL ? "4px" : "100%";

const borderWidth = props =>
  props.size < thumbnailSizes.LARGE ? "1px" : "2px";

const borderColor = "rgba(0, 0, 0, 0.16)";

const backgroundImage = props => props.src || window.encodeURI(props.src);

const StyledImage = styled.div`
  width: ${size}px;
  height: ${size}px;
  overflow: hidden;
  border: solid ${borderWidth} ${borderColor};
  border-radius: ${borderRadius};
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

export default StyledImage;
