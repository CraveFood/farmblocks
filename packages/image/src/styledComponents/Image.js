import styled from "styled-components";
import thumbnailSizes from "../constants/thumbnailSizes";
import { colors as colorConstants } from "@crave/farmblocks-theme";

const size = props => props.size;

const borderRadius = props => (props.badge ? "100%" : "4px");

const borderWidth = props =>
  props.size < thumbnailSizes.LARGE ? "1px" : "2px";

const borderColor = colorConstants.GREY_16;

const backgroundImage = props => window.encodeURI(props.src);

const StyledImage = styled.div`
  background-origin: border-box;
  background-repeat: no-repeat;
  box-sizing: border-box;
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
