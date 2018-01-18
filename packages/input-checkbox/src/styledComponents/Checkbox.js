import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const size = "16px";
const margin = "8px";

const baseColors = props => {
  if (props.disabled) {
    return css`
      color: ${colors.GREY_16};
      background-color: ${colors.GREY_16};
      border-color: ${colors.GREY_16};
    `;
  }
  return css`
    color: ${props.checked ? "#FFFFFF" : colors.INDIGO_MILK_CAP};
    background-color: ${props.checked ? colors.INDIGO_MILK_CAP : "#FFFFFF"};
    border-color: ${props.checked ? colors.INDIGO_MILK_CAP : colors.GREY_16};
  `;
};

const hoverColors = props => {
  if (props.disabled) {
    return;
  }

  if (!props.checked) {
    return css`
      border-color: ${colors.INDIGO_MILK_CAP};
    `;
  }

  return css`
    color: ${colors.INDIGO_MILK_CAP};
    background-color: #ffffff;
    border-color: ${colors.INDIGO_MILK_CAP};
  `;
};

const Label = styled.label`
  display: inline-flex;

  .tooltipTarget {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: ${margin};
  }

  .hiddenCheckbox {
    opacity: 0;
    width: 0;
    margin: 0;
  }

  .visibleCheckbox {
    display: inline-block;
    box-sizing: border-box;
    width: ${size};
    height: ${size};
    line-height: ${size};
    font-size: 8px;
    border: 1px solid;
    border-radius: 4px;
    text-align: center;
    margin-right: ${props => (props.hasText ? margin : "0")};
    ${baseColors};

    .checkmark {
      visibility: ${props => (props.checked ? "visible" : "hidden")};
    }
  }

  :hover .visibleCheckbox {
    border-width: ${props => (props.disabled ? "1px" : "2px")};
    ${hoverColors};
  }

  .hiddenCheckbox:focus + div .visibleCheckbox {
    border-color: ${colors.INDIGO_MILK_CAP};
  }
`;

export default Label;
