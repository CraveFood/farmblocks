import styled, { css } from "styled-components";

import colorTypes from "../constants/colorTypes";
import { MEDIUM } from "../constants/buttonSizes";
import { NEUTRAL } from "../constants/buttonTypes";

const buttonHeight = ({ size }) => (size === MEDIUM ? 48 : 32);
const lineHeight = props => buttonHeight(props) - 2;
const paddingStyle = ({ isIconOnly, paddingX }) => {
  if (paddingX) {
    return css`
      padding: 0 ${paddingX};
    `;
  }

  return css`
    padding: 0 ${isIconOnly ? "0" : "16px"};
  `;
};

function neutralStyle(props) {
  const { textColor, iconColor, textHoverColor, color } = props.theme[NEUTRAL];
  const activatedNeutralStyle = css`
    color: ${textHoverColor};
    border-color: ${textHoverColor};
    > .icon {
      color: ${textHoverColor};
    }
  `;
  return css`
    background-color: ${color};
    color: ${props.textColor || textColor};
    > .icon {
      color: ${iconColor};
    }
    ${({ activated }) => activated && activatedNeutralStyle};

    &:hover,
    &:focus {
      ${activatedNeutralStyle};
    }
  `;
}

function typeStyle(props) {
  const theme = { ...colorTypes, ...props.theme };
  if (props.type === NEUTRAL) {
    return neutralStyle({ ...props, theme });
  }
  const { color, hoverColor } = theme[props.type];

  return css`
    transition: background 0.3s ease;
    background-color: ${color};

    &:hover {
      background-color: ${hoverColor};
    }

    &:focus {
      background-color: ${hoverColor};
    }
  `;
}

function loadingStyle(props) {
  return (
    props.isLoading &&
    css`
      > .icon.left-icon i::before {
        display: inline-block;
        animation: spin 1.1s infinite linear;
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      }
    `
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${buttonHeight}px;
  min-width: ${buttonHeight}px;
  box-sizing: border-box;

  border: solid 1px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  box-shadow: ${props => props.boxShadow || "0 2px 2px 0 rgba(0, 0, 0, 0.16)"};

  color: ${({ textColor }) => textColor || "white"};

  line-height: ${lineHeight}px;
  font-size: 16px;
  font-family: lato, sans-serif;
  font-weight: 600;
  -webkit-font-smoothing: antialiased !important;

  white-space: nowrap;
  text-overflow: ellipsis;
  outline: 0;

  cursor: pointer;

  .icon {
    line-height: 1;
    color: rgba(255, 255, 255, 0.56);
    align-self: center;
    font-size: ${({ size }) => (size === MEDIUM ? "1.4em" : "1em")};
  }

  &:hover {
    box-shadow: ${props =>
      props.boxShadow || "0 4px 4px 0 rgba(0, 0, 0, 0.16)"};
  }

  &:focus {
    box-shadow: none;
  }

  &:hover .icon,
  &:focus .icon {
    color: white;
  }

  width: ${props => props.fluid && "100%"};

  ${loadingStyle};

  ${typeStyle};
  ${paddingStyle};

  font-size: ${({ fontSize }) => fontSize && fontSize};
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};

  &:disabled,
  &:disabled .icon,
  &:disabled :hover {
    color: rgba(0, 0, 0, 0.32);
  }

  &:disabled {
    background-color: #ccc;
    box-shadow: none;
  }
`;

Button.displayName = "StyledButton";
Button.defaultProps = {
  theme: {},
};

export default Button;
