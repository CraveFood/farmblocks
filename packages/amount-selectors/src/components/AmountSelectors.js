import * as React from "react";
import PropTypes from "prop-types";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";
import InputText from "@crave/farmblocks-input-text";

class AmountSelectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  decrement = () => {
    this.setState({
      value: Math.max(this.state.value - this.props.step, this.props.minValue)
    });
  };

  increment = () => {
    this.setState({
      value: Math.min(this.state.value + this.props.step, this.props.maxValue)
    });
  };

  render() {
    return (
      <div>
        <Button
          type={buttonTypes.SECONDARY}
          size={buttonSizes.MEDIUM}
          icon="wg-minus"
          onClick={this.decrement}
        />
        <div className="inputContainer">
          <InputText value={this.state.value} />
        </div>
        <Button
          type={buttonTypes.SECONDARY}
          size={buttonSizes.MEDIUM}
          icon="wg-add"
          onClick={this.increment}
        />
      </div>
    );
  }

  static propTypes = {
    value: PropTypes.number,
    step: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number
  };

  static defaultProps = {
    value: 0,
    step: 1,
    minValue: 0,
    maxValue: Number.MAX_VALUE
  };
}

export default AmountSelectors;
