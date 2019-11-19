import styled, { css } from "styled-components";
import { fontWeights, fontTypes } from "@crave/farmblocks-theme";

import hoverColors from "../constants/hoverColors";
import linkTypes from "../constants/linkTypes";

function textDecoration({ type }) {
  const underline =
    type === linkTypes.NEUTRAL || type === linkTypes.WHITE
      ? "none"
      : "underline";

  return css`
    a {
      text-decoration: none;

      &:hover {
        text-decoration: ${underline};

        i {
          display: inline-block;
          text-decoration: none;
        }
      }
    }
  `;
}

function colorStyle({ disabled, type }) {
  const color = disabled ? fontTypes.SUBTLE : type;
  const hoverColor = disabled ? fontTypes.SUBTLE : hoverColors[type];

  return css`
    color: ${color};

    > a {
      color: inherit;
    }

    &:hover {
      color: ${hoverColor};
    }
  `;
}

const LinkContainer = styled.div`
  font-family: Lato, sans-serif;

  display: inline-block;

  position: relative;

  span.margin-left {
    margin-left: 4px;
  }

  span.margin-right {
    margin-right: 4px;
  }

  font-size: ${props => props.size}px;
  font-weight: ${fontWeights.SEMIBOLD};

  line-height: ${props => props.lineHeight};

  transition: all 0.3s ease;
  cursor: ${props => (props.disabled ? "default" : "pointer")};

  ${textDecoration};

  ${colorStyle};
`;

LinkContainer.displayName = "LinkContainer";

export default LinkContainer;
