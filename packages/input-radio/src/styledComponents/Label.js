import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const enabledtyles = props =>
  (props.disabled &&
    css`
      .visibleInput {
        color: ${colors.GREY_16};
        background: currentColor;
      }
    `) ||
  css`
    cursor: pointer;
    &:hover .visibleInput {
      color: ${colors.INDIGO_MILK_CAP};
      border-width: 2px;
    }
  `;

const checkedStyles = props =>
  props.checked &&
  css`
    .checked {
      background-color: currentColor;
      transform: scale(1);
    }
  `;

export default styled.label`
  display: inline-flex;
  align-items: center;
  margin: 4px 0;

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
    margin: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .checked {
    height: 8px;
    width: 8px;
    border-radius: 4px;
    background: transparent;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
    transform-origin: center;
    transform: scale(0.2);
  }

  ${enabledtyles};
  ${checkedStyles};
`;
