import * as React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import StyledLabel from "./styledComponents/Checkbox";
import Toggle from "./Toggle";

const createCheckbox = ({ isSwitch }) =>
  class Checkbox extends React.Component {
    static propTypes = {
      label: PropTypes.string,
      checked: PropTypes.bool,
      loading: PropTypes.bool,
      onMouseUp: PropTypes.func,
      onChange: PropTypes.func,
      disabled: PropTypes.bool,
      innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      className: PropTypes.string,
    };

    static defaultProps = {
      onMouseUp: () => null,
      onChange: () => null,
    };

    state = {
      clicked: false,
    };

    onMouseUp = (event) => {
      if (isSwitch) {
        // we use a clicked state to flag that the
        // switch change started from a pointer click and not the spacebar
        this.setState({ clicked: true });
      }
      return this.props.onMouseUp(event);
    };

    onChange = (event) => {
      if (this.state.clicked) {
        // we only want to show the focus outline for when
        // the focus was gained with a tab keypress and not a click
        event.target.blur();
      }

      event.persist();
      this.props.onChange(event);
      this.setState({ clicked: false });
    };

    render() {
      const {
        label,
        checked,
        onMouseUp,
        onChange,
        innerRef,
        className,
        loading,
        ...inputProps
      } = this.props;

      const labelProps = {
        onMouseUp: this.onMouseUp,
        switch: isSwitch,
        checked,
        disabled: inputProps.disabled || loading,
        hasText: !!label,
        className,
      };

      inputProps.checked = checked;
      inputProps.onChange = this.onChange;

      const fontColor = inputProps.disabled
        ? fontTypes.SUBTLE
        : fontTypes.NORMAL;

      return (
        <StyledLabel {...labelProps} ref={innerRef}>
          <input {...inputProps} type="checkbox" className="hiddenCheckbox" />
          <div className="centerVisibleCheckbox">
            <Toggle isSwitch={isSwitch} loading={loading} />
            {label && (
              <Text
                className="label"
                fontWeight={isSwitch ? "normal" : "title"}
                type={fontColor}
                size={fontSizes.MEDIUM}
              >
                {label}
              </Text>
            )}
          </div>
        </StyledLabel>
      );
    }
  };

export const Checkbox = createCheckbox({ isSwitch: false });
export const Switch = createCheckbox({ isSwitch: true });
