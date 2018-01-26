import * as React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";
import disabledTooltip, {
  disabledTooltipProps
} from "@crave/farmblocks-hoc-disabled-tooltip";

import StyledLabel from "./styledComponents/Checkbox";

const TooltipTarget = disabledTooltip("div");

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
    this.onChange = this.onChange.bind(this);
  }

  render() {
    const {
      type,
      label,
      checked,
      onChange,
      displayBlock,
      onMouseLeave,
      onMouseOver,
      tooltipText,
      tooltipAlign,
      ...inputProps
    } = this.props;
    const checkedState = this.state.checked;
    const labelProps = {
      checked: checkedState,
      disabled: inputProps.disabled,
      hasText: !!label
    };
    const tooltipProps = {
      onMouseLeave,
      onMouseOver,
      tooltipText,
      tooltipAlign,
      disabled: inputProps.disabled
    };
    inputProps.defaultChecked = checkedState;
    inputProps.onChange = this.onChange;
    const fontColor = inputProps.disabled ? fontTypes.SUBTLE : fontTypes.NORMAL;
    return (
      <StyledLabel {...labelProps}>
        <input type="checkbox" {...inputProps} className="hiddenCheckbox" />
        <TooltipTarget {...tooltipProps} className="tooltipTarget">
          <div className="visibleCheckbox">
            <i className="checkmark wg-check" />
          </div>
          {label && (
            <Text title type={fontColor} size={fontSizes.MEDIUM}>
              {label}
            </Text>
          )}
        </TooltipTarget>
      </StyledLabel>
    );
  }

  componentWillReceiveProps(nextProps) {
    const nextState = {};
    if (nextProps.checked !== this.props.checked) {
      nextState.checked = nextProps.checked;
    }
    this.setState(nextState);
  }

  onChange(event) {
    // ignore the checked value from event.target.checked and
    // overwrite it with the inverse of current checked state
    // state.checked is our single source of truth
    event.persist();
    this.setState(prevState => {
      const newCheckedState = !prevState.checked;
      event.target.checked = newCheckedState;
      this.props.onChange(event);
      return { checked: !prevState.checked };
    });
  }

  static propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    ...disabledTooltipProps
  };

  static defaultProps = {
    onChange: () => null
  };
}

export default Checkbox;
