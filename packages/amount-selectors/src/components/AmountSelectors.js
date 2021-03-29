import * as React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-spring/web.cjs";
import { PrimaryButton, NeutralButton } from "@crave/farmblocks-button";
import { colors } from "@crave/farmblocks-theme";
import { TooltipContent, POSITIONS } from "@crave/farmblocks-tooltip";
import { MdAdd, MdMinus, MdTrash } from "@crave/farmblocks-icon";
import formInput from "@crave/farmblocks-hoc-input";

import Wrapper from "../styledComponents/AmountSelector";

const Input = formInput("input");

class AmountSelectors extends React.Component {
  constructor(props) {
    super(props);

    const { value } = this.props;
    const parsedValue = parseFloat(value) || 0;
    const displayValue = parsedValue.toFixed(2);

    this.state = {
      value: Number(displayValue),
      displayValue,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.updateStateWithNewValue(this.props.value);
    }
  }

  onChange = (event, cb) => {
    const value = typeof event === "number" ? event : event.target.value;

    const validValue = parseFloat(value);

    this.setState(
      state => ({
        value: validValue,
        displayValue: validValue || state.displayValue,
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
      removable,
      disableTyping,
    } = this.props;
    const { value } = this.state;
    const showMaxMessage = value > max;
    const showMinMessage = value < min;
    const tooltipMessage =
      (showMaxMessage && maxAmountMessage) ||
      (showMinMessage && minAmountMessage);
    const disableDecreaseButton = disabled || value <= min;
    const disableIncreaseButton = disabled || value >= max;

    return (
      <Wrapper className={this.props.className}>
        <div>
          {!removable || (removable && value > min) ? (
            <NeutralButton
              className="button button--decrease"
              data-testid="button--decrease"
              small
              icon={
                <MdMinus
                  size={24}
                  color={
                    disableDecreaseButton ? colors.GREY_16 : colors.RED_ORANGE
                  }
                />
              }
              disabled={disableDecreaseButton}
              onClick={this.decrement}
            />
          ) : (
            <NeutralButton
              className="button button--remove"
              data-testid="button--remove"
              small
              icon={
                <MdTrash
                  size={24 - 8}
                  color={disabled ? colors.GREY_16 : colors.RED_ORANGE}
                />
              }
              onClick={this.props.onRemoveClick}
              disabled={disabled}
            />
          )}

          <Transition
            items={tooltipMessage}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {(style, message) => (
              <TooltipContent
                style={style}
                className="tooltip-content"
                positionX={POSITIONS.X.LEFT}
                isVisible
                {...this.props.tooltipProps}
              >
                {message}
              </TooltipContent>
            )}
          </Transition>
        </div>

        <Input
          data-testid="input-text"
          className="inputComponent"
          type="number"
          min={min}
          max={max}
          step={this.props.step}
          value={this.state.displayValue}
          readOnly={disableTyping}
          autoControlFocusedStyle={!disableTyping}
          onChange={this.onChange}
          onBlur={() => {
            this.updateDisplayValue();
          }}
          small
          disabled={disabled}
          borderRadius="16px"
          mb={0}
        />

        <PrimaryButton
          className="button button--increase"
          data-testid="button--increase"
          small
          icon={
            <MdAdd
              size={24}
              color={disableIncreaseButton ? colors.GREY_16 : "white"}
            />
          }
          disabled={disableIncreaseButton}
          onClick={this.increment}
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
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  disableTyping: PropTypes.bool,
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
};

export default AmountSelectors;
