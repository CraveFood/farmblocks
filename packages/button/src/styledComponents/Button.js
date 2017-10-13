// @flow
import styled, { css } from "styled-components";

import colorTypes from "../constants/colorTypes";
import { LARGE } from "../constants/SizeTypes";
import { NEUTRAL } from "../constants/ButtonTypes";

const Button = styled.button`
  display: flex;
  align-items: flex-end;

  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);

  color: white;

  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 13px;
  outline: 0;

  cursor: pointer;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.16);
    color: rgba(0, 0, 0, 0.32);
    border: solid 1px rgba(0, 0, 0, 0.16);
    box-shadow: none;

    &:hover {
      background-color: rgba(0, 0, 0, 0.16);
      color: rgba(0, 0, 0, 0.32);
      border: solid 1px rgba(0, 0, 0, 0.16);
    }
  }

  ${fluidStyle};
  ${loadingStyle};
  ${typeStyle};
  ${paddingStyle};
`;

Button.displayName = "StyledButton";

function isIconOnly(props) {
  return !props.text;
}

function paddingStyle(props) {
  const isLarge = props.size === LARGE;
  let padding = "8px 16px";
  if (isLarge) {
    padding = "16px 16px";
  } else if (isIconOnly(props)) {
    padding = "8px 8px";
  }
  return css`
    padding: ${padding};
  `;
}

const activatedNeutralStyle = css`
  color: #3498db;
  border-color: #3498db;
`;

function neutralStyle(props) {
  return css`
    background-color: white;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);

    border: solid 1px rgba(0, 0, 0, 0.16);
    border-radius: 4px;

    color: #58636f;

    ${props => props.activated && activatedNeutralStyle};

    &:hover {
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
    border: solid 1px rgba(0, 0, 0, 0.16);
    background-color: ${color};
    color: ${props => isIconOnly(props) && color};

    &:hover {
      background-color: ${hoverColor};
    }

    &:focus {
      background-color: ${hoverColor};
      box-shadow: none;
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
