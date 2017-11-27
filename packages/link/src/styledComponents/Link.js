import styled, { css } from "styled-components";
import { fontWeights, fontTypes } from "@crave/farmblocks-theme";

import hoverColors from "../constants/hoverColors";
import linkTypes from "../constants/linkTypes";

const LinkContainer = styled.div`
  font-family: Lato, sans-serif;

  display: inline-block;

  position: relative;

  > .hit-box-container {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  > i.margin-left {
    margin-left: 8px;
  }

  > i.margin-right {
    margin-right: 8px;
  }

  font-size: ${props => props.size}px;
  font-weight: ${fontWeights.SEMIBOLD};

  line-height: ${props => props.lineHeight};

  transition: all 0.3s ease;

  ${textDecoration};

  ${colorStyle};
`;

function textDecoration({ disabled, type }) {
  const underline =
    disabled || type === linkTypes.NEUTRAL || type === linkTypes.WHITE
      ? "none"
      : "underline";

  return css`
    & > a {
      text-decoration: none;
      pointer-events: ${disabled && "none"};

      &:hover {
        text-decoration: ${underline};
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

LinkContainer.displayName = "LinkContainer";

export default LinkContainer;
