import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";
import { Transition } from "react-spring/renderprops.cjs";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";
import InputText from "@crave/farmblocks-input-text";
import { fontSizes } from "@crave/farmblocks-theme";
import { TooltipContent, POSITIONS } from "@crave/farmblocks-tooltip";

import selectorSizes from "../constants/selectorSizes";
import Wrapper from "../styledComponents/AmountSelector";

const selectorSizeToButtonSize = {
  [selectorSizes.SMALL]: buttonSizes.SMALL,
  [selectorSizes.MEDIUM]: buttonSizes.MEDIUM,
};

const selectorSizeToFontSize = {
  [selectorSizes.SMALL]: fontSizes.SMALL,
  [selectorSizes.MEDIUM]: fontSizes.MEDIUM,
};

class AmountSelectors extends React.Component {
  constructor(props) {
    super(props);

    const { value } = this.props;
    const parsedValue = parseFloat(value) || 0;
    const displayValue = parsedValue.toFixed(2);

    this.state = {
      value: Number(displayValue),
      disableBoth: false,
      tooltipText: "",
      displayValue,
      focused: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.updateStateWithNewValue(this.props.value);
    }
  }

  // Conditions to disable both buttons,
  // see https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
  disableBoth = validity =>
    validity.badInput || (validity.stepMismatch && this.props.enforceStep);

  onChange = (event, cb) => {
    const value = typeof event === "number" ? event : event.target.value;
    const hasBrowserValidation = event?.target?.validity !== undefined;
    const disableBoth =
      hasBrowserValidation && this.disableBoth(event.target.validity);

    const tooltipText = hasBrowserValidation
      ? event.target.validationMessage
      : "";

    const validValue = parseFloat(value);

    this.setState(
      state => ({
        value: validValue,
        displayValue: validValue || state.displayValue,
        disableBoth,
        tooltipText,
      }),
      cb,
    );
    return this.props.onChange(validValue);
  };

  decrement = () => {
    const value = this.state.value - this.props.step;

    this.onChange(Math.max(value, this.props.min), this.updateDisplayValue);
  };

  increment = () => {
    const value = this.state.value + this.props.step;

    this.onChange(Math.min(value, this.props.max), this.updateDisplayValue);
  };

  updateDisplayValue = () => {
    const validValue = this.updateStateWithNewValue(this.state.value);

    return this.props.onChange(validValue);
  };

  getValidValue = value => {
    const parsedValue = parseFloat(value) || 0;
    const validValue = Math.min(
      this.props.max,
      Math.max(this.props.min, parsedValue),
    );

    return Number(validValue.toFixed(2));
  };

  updateStateWithNewValue = value => {
    const validValue = this.getValidValue(value);
    this.setState({
      value: validValue,
      displayValue: validValue.toFixed(2),
    });

    return validValue;
  };

  render() {
    const {
      disabled,
      max,
      min,
      minAmountMessage,
      maxAmountMessage,
      showBoundariesMessageOnlyOnFocus,
    } = this.props;
    const { focused, value } = this.state;
    const showMessage = !showBoundariesMessageOnlyOnFocus || focused;
    const showMaxMessage = value > max && showMessage;
    const showMinMessage = value < min && showMessage;
    const showTooltipMessage =
      (showMaxMessage && maxAmountMessage) ||
      (showMinMessage && minAmountMessage);
    return (
      <Wrapper size={this.props.size} className={this.props.className}>
        <Button
          className="decreaseButton"
          type={buttonTypes.SECONDARY}
          size={selectorSizeToButtonSize[this.props.size]}
          icon="wg-minus"
          disabled={
            disabled || this.state.disableBoth || value <= this.props.min
          }
          onClick={this.decrement}
          tooltipText={this.state.tooltipText}
        />
        <div className="inputContainer">
          <InputText
            data-testid="input-text"
            className="inputComponent"
            type="number"
            min={min}
            max={max}
            step={this.props.step}
            value={this.state.displayValue}
            readOnly={this.props.disableTyping}
            onChange={this.onChange}
            onBlur={() => {
              this.setState({ focused: false, disableBoth: false });
              this.updateDisplayValue();
            }}
            fontSize={selectorSizeToFontSize[this.props.size]}
            disabled={disabled}
            onFocus={() => this.setState({ focused: true })}
          />
          <Transition
            items={showTooltipMessage}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {tooltipMessage =>
              tooltipMessage &&
              (props => (
                <TooltipContent
                  style={props}
                  className="tooltip-content"
                  offset="-9px"
                  positionX={POSITIONS.X.CENTER}
                  isVisible
                  {...this.props.tooltipProps}
                >
                  {tooltipMessage}
                </TooltipContent>
              ))
            }
          </Transition>
        </div>

        <Button
          className="increaseButton"
          type={buttonTypes.SECONDARY}
          size={selectorSizeToButtonSize[this.props.size]}
          icon="wg-add"
          disabled={
            disabled || this.state.disableBoth || value >= this.props.max
          }
          onClick={this.increment}
          tooltipText={this.state.tooltipText}
        />
      </Wrapper>
    );
  }
}

AmountSelectors.propTypes = {
  value: PropTypes.number,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  maxAmountMessage: PropTypes.string,
  minAmountMessage: PropTypes.string,
  showBoundariesMessageOnlyOnFocus: PropTypes.bool,
  enforceStep: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  disableTyping: PropTypes.bool,
  size: PropTypes.oneOf(values(selectorSizes)),
  className: PropTypes.string,
  tooltipProps: PropTypes.object,
};

AmountSelectors.defaultProps = {
  value: 0,
  step: 1,
  min: 0,
  max: Number.MAX_VALUE,
  maxAmountMessage: "Reached maximum amount",
  minAmountMessage: "Reached minimum amount",
  onChange: () => false,
  disableTyping: false,
  size: selectorSizes.MEDIUM,
};

export default AmountSelectors;
