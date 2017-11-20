import styled, { css } from "styled-components";

import lineHeights from "../constants/lineHeights";
import linkColors from "../constants/linkColors";

import { fontSizes, fontWeights } from "@crave/farmblocks-theme";
import { Tooltip } from "@crave/farmblocks-tooltip";

const StyledLink = styled.div`
  font-family: Lato, sans-serif;  
  text-align: ${props => props.align};
  
  ${fontSize};  
  ${fontColor};
  ${lineHeight};

  font-weight: ${fontWeights.SEMIBOLD};  
`;

function fontSize (props) {  
  const isLargeSize =  props.type === "EXTERNAL_DEFAULT" || props.type === "EXTERNAL_ADDRESS" || props.type === "EXTERNAL_ADDRESS_WHITE";
  const isSmallSize = props.type === "EXTERNAL_ADDRESS_MINI" || props.type === "EXTERNAL_ADDRESS_MINI_WHITE";
  let fontSize = `${fontSizes.MEDIUM}px`;  
  if (isLargeSize) {
    fontSize = `${fontSizes.LARGE}px`;      
  }
  if (isSmallSize) {   
    fontSize = `${fontSizes.SMALL}px`;
  }
  return css`
    font-size: ${fontSize};
  `;
}

function fontColor(props){
  const { color, hoverColor } = linkColors[props.type];  
  return css`
    transition: background 0.3s ease;
    color: ${color};

    &:hover {
      color: ${hoverColor};
    }    
  `;
}

function lineHeight (props){
  const isMini = props.type === "EXTERNAL_ADDRESS_MINI" || "EXTERNAL_ADDRESS_MINI_WHITE";
  const isExternal = props.type === "EXTERNAL_DEFAULT" || "EXTERNAL_ADDRESS" || "EXTERNAL_ADDRESS_WHITE";
  const isRowTitle = props.type === "ROW_TITLE";  
  let lineHeight = lineHeights.DEFAULT; 
  if (isMini) {
    lineHeight = `${lineHeights.MINI}`;
  }
  if (isExternal) {
    lineHeight = `${lineHeights.EXTERNAL}`;
  }
  if (isRowTitle) {
    lineHeight = `${lineHeights.ROW_TITLE}`;
  }
  return css`
    line-height: ${lineHeight};  
  `;
}

export default StyledLink;

