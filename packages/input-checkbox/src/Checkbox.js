import * as React from "react";
import PropTypes from "prop-types";
import disabledTooltip, {
  disabledTooltipProps
} from "@crave/farmblocks-hoc-disabled-tooltip";

const Label = disabledTooltip("label");

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
      displayBlock,
      onMouseLeave,
      onMouseOver,
      tooltipText,
      tooltipAlign,
      ...inputProps
    } = this.props;
    const tooltipProps = {
      displayBlock,
      onMouseLeave,
      onMouseOver,
      tooltipText,
      tooltipAlign,
      disabled: inputProps.disabled
    };
    inputProps.checked = this.state.checked;
    return (
      <Label {...tooltipProps}>
        <input type="checkbox" {...inputProps} />
        {label && <span className="label">{label}</span>}
      </Label>
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
    this.setState({
      checked: event.target.checked
    });
    return this.props.onChange(event);
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
