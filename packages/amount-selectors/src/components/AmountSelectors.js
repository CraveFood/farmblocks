import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";
import { Transition } from "react-spring/renderprops.cjs";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";
import InputText from "@crave/farmblocks-input-text";
import { fontSizes, colors } from "@crave/farmblocks-theme";
import { TooltipContent, POSITIONS } from "@crave/farmblocks-tooltip";
import { MdAdd, MdMinus, MdTrash } from "@crave/farmblocks-icon";

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

const selectorSizeToIconSize = {
  [selectorSizes.SMALL]: 24,
  [selectorSizes.MEDIUM]: 32,
};

const inputBorderRadius = {
  [selectorSizes.SMALL]: "16px",
  [selectorSizes.MEDIUM]: "32px",
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
      size,
      removable,
    } = this.props;
    const { focused, value } = this.state;
    const showMessage = !showBoundariesMessageOnlyOnFocus || focused;
    const showMaxMessage = value > max && showMessage;
    const showMinMessage = value < min && showMessage;
    const showTooltipMessage =
      (showMaxMessage && maxAmountMessage) ||
      (showMinMessage && minAmountMessage);
    const disableDecreaseButton =
      disabled || this.state.disableBoth || value <= this.props.min;
    const disableIncreaseButton =
      disabled || this.state.disableBoth || value >= this.props.max;
    return (
      <Wrapper size={size} className={this.props.className}>
        {!removable || (removable && value > min) ? (
          <Button
            className="decreaseButton"
            size={selectorSizeToButtonSize[size]}
            icon={
              <MdMinus
                size={selectorSizeToIconSize[size]}
                color={
                  disableDecreaseButton ? colors.GREY_16 : colors.RED_ORANGE
                }
              />
            }
            disabled={disableDecreaseButton}
            onClick={this.decrement}
            tooltipText={this.state.tooltipText}
            css={{ borderRadius: "50%" }}
            data-testid="amount-selectors-decrease-button"
          />
        ) : (
          <Button
            className="removeButton"
            size={selectorSizeToButtonSize[size]}
            icon={
              <MdTrash
                size={selectorSizeToIconSize[size] - 8}
                color={disabled ? colors.GREY_16 : colors.RED_ORANGE}
              />
            }
            onClick={this.props.onRemoveClick}
            css={{ borderRadius: "50%" }}
            disabled={disabled}
            data-testid="amount-selectors-remove-button"
          />
        )}
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
            fontSize={selectorSizeToFontSize[size]}
            disabled={disabled}
            onFocus={() => this.setState({ focused: true })}
            borderRadius={inputBorderRadius[size]}
            css={`
              .input {
                box-shadow: 0 3px 3px 0 ${colors.GREY_08};
              }
            `}
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
          type={buttonTypes.PRIMARY}
          size={selectorSizeToButtonSize[size]}
          icon={
            <MdAdd
              size={selectorSizeToIconSize[size]}
              color={disableIncreaseButton ? colors.GREY_16 : "white"}
            />
          }
          disabled={disableIncreaseButton}
          onClick={this.increment}
          tooltipText={this.state.tooltipText}
          css={{ borderRadius: "50%" }}
          data-testid="amount-selectors-increase-button"
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
  onRemoveClick: PropTypes.func,
  removable: PropTypes.bool,
};

AmountSelectors.defaultProps = {
  value: 0,
  step: 1,
  min: 0,
  max: Number.MAX_VALUE,
  maxAmountMessage: "Reached maximum amount",
  minAmountMessage: "Reached minimum amount",
  onChange: () => false,
  onRemoveClick: () => false,
  disableTyping: false,
  size: selectorSizes.MEDIUM,
};

export default AmountSelectors;
