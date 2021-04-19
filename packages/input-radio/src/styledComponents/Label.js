import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const enabledStyles = (props) =>
  (props.disabled &&
    css`
      .visibleInput {
        color: ${colors.GREY_16};
        background: currentColor;
      }
    `) ||
  css`
    cursor: pointer;
    &:hover .visibleInput,
    & .hiddenInput:focus + .visibleInput {
      color: ${colors.INDIGO_MILK_CAP};
      border-width: 2px;
    }
  `;

const checkedStyles = (props) =>
  props.checked &&
  css`
    .checkedIndicator {
      opacity: 1;
      transform: scale(1);
    }
  `;

export default styled.label`
  margin: 0;

  display: inline-flex;
  align-items: center;

  .hiddenInput {
    opacity: 0;
    width: 0;
    margin: 0;
  }

  .visibleInput {
    height: 16px;
    width: 16px;
    color: ${colors.INDIGO_MILK_CAP};
    border: 1px solid currentColor;
    border-radius: 8px;
    margin: 4px 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .checkedIndicator {
    height: 8px;
    width: 8px;
    border-radius: 4px;
    background: currentColor;
    opacity: 0;
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    transform-origin: center;
    transform: scale(0.2);
    will-change: opacity, transform;
  }

  ${enabledStyles};
  ${checkedStyles};
`;
