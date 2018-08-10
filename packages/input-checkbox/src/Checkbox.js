import * as React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import StyledLabel from "./styledComponents/Checkbox";

const createCheckbox = ({ isSwitch }) =>
  class Checkbox extends React.Component {
    state = {
      checked: this.props.checked,
      clicked: false
    };

    render() {
      const { label, checked, onMouseUp, onChange, ...inputProps } = this.props;

      const checkedState = this.state.checked;
      const labelProps = {
        onMouseUp: this.onMouseUp,
        switch: isSwitch,
        checked: checkedState,
        disabled: inputProps.disabled,
        hasText: !!label
      };

      inputProps.defaultChecked = checkedState;
      inputProps.onChange = this.onChange;

      const fontColor = inputProps.disabled
        ? fontTypes.SUBTLE
        : fontTypes.NORMAL;

      return (
        <StyledLabel {...labelProps}>
          <input {...inputProps} type="checkbox" className="hiddenCheckbox" />
          <div className="centerVisibleCheckbox">
            <div className="visibleCheckbox">
              <div className={isSwitch ? "toggle" : "checkmark wg-check"} />
            </div>
            {label && (
              <Text title={!isSwitch} type={fontColor} size={fontSizes.MEDIUM}>
                {label}
              </Text>
            )}
          </div>
        </StyledLabel>
      );
    }

    componentDidUpdate(prevProps) {
      if (prevProps.checked !== this.props.checked) {
        this.setState({ checked: this.props.checked });
      }
    }

    onMouseUp = event => {
      if (isSwitch) {
        // we use a clicked state to flag that the
        // switch change started from a pointer click and not the spacebar
        this.setState({ clicked: true });
      }
      return this.props.onMouseUp(event);
    };

    onChange = event => {
      if (this.state.clicked) {
        // we only want to show the focus outline for when
        // the focus was gained with a tab keypress and not a click
        event.target.blur();
      }
      // ignore the checked value from event.target.checked and
      // overwrite it with the inverse of current checked state
      // state.checked is our single source of truth
      event.persist();
      this.setState(prevState => {
        const newCheckedState = !prevState.checked;
        event.target.checked = newCheckedState;
        this.props.onChange(event);
        return { checked: !prevState.checked, clicked: false };
      });
    };

    static propTypes = {
      label: PropTypes.string,
      checked: PropTypes.bool,
      onMouseUp: PropTypes.func,
      onChange: PropTypes.func,
      disabled: PropTypes.bool
    };

    static defaultProps = {
      onMouseUp: () => null,
      onChange: () => null
    };
  };

export const Checkbox = createCheckbox({ isSwitch: false });
export const Switch = createCheckbox({ isSwitch: true });
