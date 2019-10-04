import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import wrapDisplayName from "recompose/wrapDisplayName";
import Link from "@crave/farmblocks-link";
import { POSITIONS } from "@crave/farmblocks-tooltip";
import Label from "@crave/farmblocks-label";

import Wrapper from "./styledComponents/Wrapper";

export const formInputProps = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  fontSize: PropTypes.number,
  active: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  input: PropTypes.shape({
    value: PropTypes.any,
    onChange: PropTypes.func,
  }),
  readOnly: PropTypes.bool,
  refName: PropTypes.string,
  clearable: PropTypes.bool,
  clearIcon: PropTypes.string,
  leftIcon: PropTypes.string,
  moreInfoContent: PropTypes.node,
  moreInfoTooltipProps: PropTypes.object,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  autoControlFocusedStyle: PropTypes.bool,
  className: PropTypes.string,
};

const getValueFromProps = ({ input, value }) => (input ? input.value : value);

const formInput = WrappedComponent => {
  return class Input extends React.Component {
    state = {
      value: getValueFromProps(this.props),
      focused: this.props.focused,
    };

    componentDidMount() {
      if (this.props.focused) {
        this.setInputFocus();
      }
    }

    componentDidUpdate = prevProps => {
      if (this.props.focused && !prevProps.focused) {
        this.setInputFocus();
      }

      if (!this.props.focused && prevProps.focused) {
        this.inputRef?.blur();
      }

      if (
        !this.props.autoControlFocusedStyle &&
        this.props.focused !== prevProps.focused
      ) {
        this.setState({ focused: this.props.focused });
      }

      const nextValue = getValueFromProps(this.props);
      const prevValue = getValueFromProps(prevProps);
      if (nextValue !== prevValue) {
        this.setState({
          value: nextValue,
        });
      }
    };

    preventBlurOfClearIcon = event => {
      // do not blur the text field if the click is on the clear icon
      const { nodeName, className } = event.target;
      if (nodeName === "I" && className === this.props.clearIcon) {
        event.preventDefault();
      }
    };

    handleClearClick = () => {
      this.setState({ value: "" });
      this.props.onChange({
        type: "change",
        value: "",
        target: { value: "" },
      });
    };

    setInputFocus = () => {
      this.inputRef?.focus();
    };

    onChange = event => {
      this.setState({
        value: event.value || event.target.value,
      });

      if (this.props.input && this.props.input.onChange) {
        return this.props.input.onChange(event);
      }

      return this.props.onChange(event);
    };

    onFocus = event => {
      this.props.onFocus(event);

      if (!this.props.autoControlFocusedStyle) {
        return;
      }
      this.setState({ focused: true });
    };

    onBlur = event => {
      this.props.onBlur(event);

      if (!this.props.autoControlFocusedStyle) {
        return;
      }
      this.setState({ focused: false });
    };

    renderInput = ({
      innerRef,
      refName,
      clearable,
      clearIcon,
      leftIcon,
      prefix,
      suffix,
      ...inputProps
    }) => {
      const handlers = {
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
      };

      const isSearch =
        inputProps.type && inputProps.type.toLowerCase() === "search";
      const iconName = leftIcon || (isSearch && "wg-search");

      const clearButton = (clearable || isSearch) && this.state.value && (
        <Link className="clear" onClick={this.handleClearClick}>
          <i className={clearIcon} />
        </Link>
      );

      const isDropdown = inputProps.role === "combobox";
      const dropDownIcon = isDropdown && (
        <div className="icon dropdown">
          <i className="wg-small-arrow-bottom" />
        </div>
      );

      return (
        // Although we use onMouseDown, this element don't need role=button
        // as it just prevents the input blur on click in the clear icon.
        // there's no functionality in keyboard navigation.
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className={classNames("input", { dropdown: isDropdown })}
          ref={element => {
            this.inputRef = element && element.querySelector("input");
          }}
          onMouseDown={this.preventBlurOfClearIcon}
        >
          {prefix && <div className="prefix">{prefix}</div>}
          {iconName && (
            <div className="icon left">
              <i className={iconName} />
            </div>
          )}
          <WrappedComponent
            className="wrapped"
            {...inputProps}
            {...handlers}
            {...{ [refName]: innerRef }}
            value={this.state.value}
          />
          {clearButton}
          {dropDownIcon}
          {suffix && <div className="suffix">{suffix}</div>}
        </div>
      );
    };

    render() {
      const { value } = this.state;
      const {
        label,
        active,
        focused,
        onChange,
        onFocus,
        onBlur,
        invalid,
        input,
        meta,
        protected: covered,
        disableManualReplace,
        moreInfoContent,
        moreInfoTooltipProps,
        autoControlFocusedStyle,
        className,
        ...wrappedComponentProps
      } = this.props;
      const wrapperProps = {
        protected: covered,
        active,
        focused: this.state.focused,
        invalid,
        filled: !!value || value === 0,
        disabled: wrappedComponentProps.disabled,
        type: wrappedComponentProps.type,
        fontSize: wrappedComponentProps.fontSize,
        className,
      };

      return (
        <Wrapper {...wrapperProps} onClick={this.setInputFocus}>
          {this.renderInput(wrappedComponentProps)}

          {label && (
            <Label
              className="label"
              moreInfoContent={moreInfoContent}
              moreInfoTooltipProps={moreInfoTooltipProps}
              focused={this.state.focused || active}
              invalid={wrapperProps.invalid}
              protected={covered}
              disabled={wrapperProps.disabled}
            >
              {label}
            </Label>
          )}
        </Wrapper>
      );
    }

    static displayName = wrapDisplayName(WrappedComponent, "formInput");

    static propTypes = {
      ...WrappedComponent.propTypes,
      ...formInputProps,
    };

    static defaultProps = {
      value: "",
      type: "text",
      focused: false,
      active: false,
      disabled: false,
      onChange: () => null,
      onFocus: () => null,
      onBlur: () => null,
      input: null,
      refName: "ref",
      clearable: false,
      clearIcon: "wg-close-int",
      moreInfoTooltipProps: { positionX: POSITIONS.X.LEFT },
      autoControlFocusedStyle: true,
    };
  };
};

export default formInput;
