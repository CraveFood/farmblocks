// @flow
import styled, { css } from "styled-components";

import colorTypes from "../constants/colorTypes";
import { MEDIUM } from "../constants/buttonSizes";
import { NEUTRAL } from "../constants/buttonTypes";

const Button = styled.button`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  border: solid 1px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);

  color: white;

  line-height: 16px;
  font-size: 16px;
  font-family: lato, sans-serif;
  font-weight: 600;
  -webkit-font-smoothing: antialiased !important;

  white-space: nowrap;
  text-overflow: ellipsis;
  outline: 0;

  cursor: pointer;

  .icon {
    color: rgba(255, 255, 255, 0.56);
  }

  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16);
  }

  &:focus {
    box-shadow: none;
  }

  &:hover .icon,
  &:focus .icon {
    color: white;
  }

  ${fluidStyle};
  ${loadingStyle};
  ${typeStyle};
  ${paddingStyle};

  &:disabled,
  &:disabled .icon,
  &:disabled :hover {
    color: rgba(0, 0, 0, 0.32);
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.16);
    box-shadow: none;
  }
`;

Button.displayName = "StyledButton";

function isIconOnly(props) {
  return !props.text;
}

function paddingStyle(props) {
  const isMedium = props.size === MEDIUM;
  let padding = "8px 16px";
  if (isMedium) {
    padding = "16px 16px";
  } else if (isIconOnly(props)) {
    padding = "8px 8px";
  }
  return css`
    padding: ${padding};
  `;
}

function neutralStyle(props) {
  const { textColor, iconColor, textHoverColor, color } = colorTypes[NEUTRAL];
  const activatedNeutralStyle = css`
    color: ${textHoverColor};
    border-color: ${textHoverColor};
    > .icon {
      color: ${textHoverColor};
    }
  `;
  return css`
    background-color: ${color};
    color: ${textColor};
    > .icon {
      color: ${iconColor};
    }
    ${props => props.activated && activatedNeutralStyle};

    &:hover,
    &:focus {
      ${activatedNeutralStyle};
    }
  `;
}

function typeStyle(props) {
  if (props.type === NEUTRAL) {
    return neutralStyle(props);
  }
  const { color, hoverColor } = colorTypes[props.type];

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
    props.loading &&
    css`
      > .icon {
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

function fluidStyle(props) {
  return (
    props.fluid &&
    css`
      max-width: 100%;
      width: 100%;
    `
  );
}

export default Button;
