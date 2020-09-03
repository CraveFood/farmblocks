import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import "focus-visible";

import buttonThemes from "../constants/buttonThemes";
import buttonVariants from "../constants/buttonVariants";

const buttonHeight = ({ small }) => (small ? 32 : 40);

const calcPadding = borderWidth => ({ paddingX, paddingY }) =>
  `${paddingY - borderWidth + 1}px ${paddingX - borderWidth + 1}px`;

function themeStyle(props) {
  const theme = { ...buttonThemes, ...props.theme };

  const { normal, hover, active } =
    theme[props.variant] || theme[buttonVariants.NEUTRAL];

  return css`
    background-color: ${normal?.backgroundColor};
    color: ${normal?.textColor};
    border: ${normal?.border || `solid 1px ${colors.GREY_16}`};
    box-shadow: ${normal?.boxShadow || `0px 2px 2px 0px ${colors.GREY_16}`};

    .icon {
      transition: color 0.3s ease;
      color: ${normal?.iconColor || colors.WHITE_48};

      line-height: 1;
    }

    :not(:disabled) {
      &:hover,
      &.hovered,
      &:active,
      &.active {
        background-color: ${hover?.backgroundColor};
        color: ${hover?.textColor};
        border-width: ${hover?.borderWidth && `${hover?.borderWidth}px`};
        border-color: ${hover?.borderColor};
        box-shadow: ${hover?.boxShadow || `0px 4px 4px 0px ${colors.GREY_16}`};
        padding: ${calcPadding(hover?.borderWidth || 1)};
      }

      &:hover,
      &.hovered,
      &:active,
      &.active,
      &:focus,
      &.focused {
        .icon {
          color: ${hover?.iconColor || "#FFFFFF"};
        }
      }

      &.active,
      &:active {
        box-shadow: none;
        background-color: ${active?.backgroundColor};
      }
    }

    /* Chrome keeps the :focus style after a click, so this a polyfill for the :focus-visible pseudo element that is available on Firefox only */
    &:focus,
    &.focused {
      outline: none;
    }
    &.focus-visible,
    &.focused:not(:disabled) {
      // we use box-shadow instead of outline to keep the rounded borders
      box-shadow: 0 0 0 3px ${colors.INDIGO_MILK_CAP_56};
    }
  `;
}

const Button = styled.button`
  font-size: 16px;
  font-family: lato, sans-serif;
  font-weight: 600;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX}px`};
  border-radius: 4px;

  line-height: 1;
  height: ${buttonHeight}px;
  min-width: ${buttonHeight}px;
  width: ${props => {
    if (props.fluid) return "100%";
    if (props.iconOnly) return `${buttonHeight(props)}px`;
    return null;
  }};
  overflow: hidden;

  cursor: pointer;
  transition: background 0.3s, color 0.3s, border-color 0.3s;

  &:disabled {
    background-color: ${colors.GREY_32};
    color: ${colors.GREY_32};
    border-width: 1px;
    border-color: ${colors.GREY_16};
    box-shadow: none;
    cursor: default;

    .icon {
      color: ${colors.GREY_32};
    }
  }

  ${themeStyle};
`;

Button.displayName = "StyledButton";
Button.defaultProps = {
  theme: {},
};

export default Button;
