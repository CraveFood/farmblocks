import * as React from "react";
import PropTypes from "prop-types";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";
import InputText from "@crave/farmblocks-input-text";

import Wrapper from "../styledComponents/AmountSelector";

class AmountSelectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  isDigit = key => {
    return /\d/.test(key);
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
    const value = event.target.value;
    const parsedValue = this.isDigit(value) && parseFloat(value);

    if (
      parsedValue &&
      parsedValue > this.props.minValue &&
      parsedValue < this.props.maxValue
    ) {
      this.setState({
        value: parsedValue
      });

      this.props.onChange(parsedValue);
    }
  };

  decrement = () => {
    const value = this.state.value - this.props.step;
    this.setState({
      value: Math.max(value, this.props.minValue)
    });

    this.props.onChange(value);
  };

  increment = () => {
    const value = this.state.value + this.props.step;
    this.setState({
      value: Math.min(value, this.props.maxValue)
    });

    this.props.onChange(value);
  };

  render() {
    return (
      <Wrapper>
        <Button
          type={buttonTypes.SECONDARY}
          size={buttonSizes.MEDIUM}
          icon="wg-minus"
          disabled={this.state.value === this.props.minValue}
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
          />
        </div>
        <Button
          type={buttonTypes.SECONDARY}
          size={buttonSizes.MEDIUM}
          icon="wg-add"
          disabled={this.state.value === this.props.maxValue}
          onClick={this.increment}
          tooltipText="There is no more available amount."
        />
      </Wrapper>
    );
  }

  static propTypes = {
    value: PropTypes.number,
    step: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    onChange: PropTypes.func,
    disableEdit: PropTypes.bool
  };

  static defaultProps = {
    value: 0,
    step: 1,
    minValue: 0,
    maxValue: Number.MAX_VALUE,
    onChange: () => false,
    disableEdit: false
  };
}

export default AmountSelectors;
