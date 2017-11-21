import styled, { css } from "styled-components";

import linkColors from "../constants/linkColors";

import { fontWeights, fontTypes } from "@crave/farmblocks-theme";

import linkTypes from "../constants/linkTypes"; 

const StyledLink = styled.div`
  font-family: Lato, sans-serif;  
  text-align: ${props => props.align};
  font-size: ${props => props.size}px;
  line-height: ${props => props.lineHeight};
   
  ${linkColor};
  ${linkDecoration};

  font-weight: ${fontWeights.SEMIBOLD};  
`;

function linkDecoration(props){
  const hasLinkDecoration = !props.disabled && (props.type === linkTypes.ROW_TITLE || props.type === linkTypes.PRIMARY);
  if (hasLinkDecoration) {
    return css`
      &:hover {
        text-decoration: underline;
      }
    `;
  }
}

function linkColor(props){
  let { color, hoverColor } = linkColors[props.type];
  if (props.disabled) {
    color = hoverColor = fontTypes.SUBTLE;
  }
  return css`
  transition: background 0.3s ease;
  color: ${color};

  &:hover {
    color: ${hoverColor};
  }
`;
}

export default StyledLink;

