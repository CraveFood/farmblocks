import * as React from "react";
import PropTypes from "prop-types";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";
import InputText from "@crave/farmblocks-input-text";

import Wrapper from "../styledComponents/AmountSelector";

class AmountSelectors extends React.Component {
  state = {
    value: this.props.value,
    validationMessages: []
  };

  isDigit = value => {
    return !Number.isNaN(parseFloat(value));
  };

  isTypedKeyValid = key => {
    const commonAcceptedKeys = [
      "Backspace",
      "ArrowRight",
      "ArrowLeft",
      "Delete",
      "."
    ];

    const isValidKey = commonAcceptedKeys.indexOf(key) !== -1;

    return this.isDigit(key) || isValidKey;
  };

  onKeyDown = event => {
    if (!this.isTypedKeyValid(event.key)) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  onChange = event => {
    const value = typeof event === "number" ? event : event.target.value;
    const parsedValue = parseFloat(value);

    if (
      this.isDigit(parsedValue) &&
      parsedValue >= this.props.min &&
      parsedValue <= this.props.max
    ) {
      this.setState({
        value: parsedValue,
        validationMessages: []
      });

      return this.props.onChange(parsedValue);
    }

    this.setState({
      validationMessages: ["Invalid value"]
    });
  };

  decrement = () => {
    const value = this.state.value - this.props.step;

    this.onChange(Math.max(value, this.props.min));
  };

  increment = () => {
    const value = this.state.value + this.props.step;

    this.onChange(Math.min(value, this.props.max));
  };

  render() {
    return (
      <Wrapper>
        <Button
          className="decreaseButton"
          type={buttonTypes.SECONDARY}
          size={buttonSizes.MEDIUM}
          icon="wg-minus"
          disabled={this.state.value === this.props.min}
          onClick={this.decrement}
          noTooltip
        />
        <div className="inputContainer">
          <InputText
            value={this.state.value}
            readOnly={this.props.disableEdit}
            onKeyDown={this.onKeyDown}
            onChange={this.onChange}
            size={4}
            validationMessages={this.state.validationMessages}
          />
        </div>
        <Button
          className="increaseButton"
          type={buttonTypes.SECONDARY}
          size={buttonSizes.MEDIUM}
          icon="wg-add"
          disabled={this.state.value === this.props.max}
          onClick={this.increment}
          tooltipText="There is no more available amount."
        />
      </Wrapper>
    );
  }

  static propTypes = {
    value: PropTypes.number,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
    disableEdit: PropTypes.bool
  };

  static defaultProps = {
    value: 0,
    step: 1,
    min: 0,
    max: Number.MAX_VALUE,
    onChange: () => false,
    disableEdit: false
  };
}

export default AmountSelectors;
