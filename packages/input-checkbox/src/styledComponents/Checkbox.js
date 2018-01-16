import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const size = "16px";
const margin = "8px";
const borderRadius = "4px";
const checkmarkSize = "8px";
const borderHoverWidth = props => (props.disabled ? "1px" : "2px");
const checkmarkVisibility = props => (props.checked ? "visible" : "hidden");
const labelMargin = props => (props.hasText ? margin : "0");
const borderColor = props =>
  props.checked && !props.disabled ? colors.INDIGO_MILK_CAP : colors.GREY_16;
const borderHoverColor = props =>
  props.disabled ? colors.GREY_16 : colors.INDIGO_MILK_CAP;
const borderFocusColor = colors.INDIGO_MILK_CAP;
const backgroundColor = props => {
  if (props.disabled) {
    return colors.GREY_16;
  }
  if (props.checked) {
    return colors.INDIGO_MILK_CAP;
  }
  return "#FFFFFF";
};
const backgroundHoverColor = props =>
  props.disabled ? colors.GREY_16 : "#FFFFFF";
const checkmarkColor = props => (props.disabled ? colors.GREY_16 : "#FFFFFF");
const checkMarkHoverColor = props =>
  props.disabled ? colors.GREY_16 : colors.INDIGO_MILK_CAP;

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
    font-size: ${checkmarkSize};
    color: ${checkmarkColor};
    border: 1px solid ${borderColor};
    border-radius: ${borderRadius};
    background-color: ${backgroundColor};
    text-align: center;
    margin-right: ${labelMargin};

    .checkmark {
      visibility: ${checkmarkVisibility};
    }
  }

  :hover .visibleCheckbox {
    background-color: ${backgroundHoverColor};
    border-width: ${borderHoverWidth};
    border-color: ${borderHoverColor};
    color: ${checkMarkHoverColor};
  }

  .hiddenCheckbox:focus + div .visibleCheckbox {
    border-color: ${borderFocusColor};
  }
`;

export default Label;
