import * as React from "react";
import PropTypes from "prop-types";
import wrapDisplayName from "recompose/wrapDisplayName";
import Link from "@crave/farmblocks-link";
import { POSITIONS } from "@crave/farmblocks-tooltip";
import Label from "@crave/farmblocks-label";
import {
  MdSearch,
  MdRemoveFilled,
  SmChevronDown,
} from "@crave/farmblocks-icon";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Wrapper from "./styledComponents/Wrapper";

const ICON_SIZE = 18;

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
  leftIcon: PropTypes.elementType,
  moreInfoContent: PropTypes.node,
  moreInfoTooltipProps: PropTypes.object,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  autoControlFocusedStyle: PropTypes.bool,
  className: PropTypes.string,
  borderRadius: PropTypes.string,
};

const getValueFromProps = ({ input, value }) => (input ? input.value : value);

const formInput = WrappedComponent => {
  return class Input extends React.Component {
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
      moreInfoTooltipProps: { positionX: POSITIONS.X.LEFT },
      autoControlFocusedStyle: true,
      borderRadius: "4px",
    };

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
      const LeftIcon = leftIcon || (isSearch && MdSearch);

      const clearButton = (clearable || isSearch) && this.state.value && (
        <Link
          className="clear icon right"
          data-testid="input-clear"
          onClick={this.handleClearClick}
        >
          <MdRemoveFilled size={ICON_SIZE} />
        </Link>
      );

      const isDropdown = inputProps.role === "combobox";
      const RightIcon = isDropdown && SmChevronDown;

      return (
        // Although we use onMouseDown, this element don't need role=button
        // as it just prevents the input blur on click in the clear icon.
        // there's no functionality in keyboard navigation.
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className={`input ${isDropdown ? "dropdown" : ""}`}
          ref={element => {
            this.inputRef = element && element.querySelector("input, textarea");
          }}
        >
          {prefix && <div className="prefix">{prefix}</div>}

          {LeftIcon && (
            <div className="icon left">
              <LeftIcon size={ICON_SIZE} />
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

          {RightIcon && (
            <div className="icon right">
              <SmChevronDown size={ICON_SIZE} />
            </div>
          )}
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
        borderRadius,
        validationMessages,
        ...wrappedComponentProps
      } = this.props;
      const wrapperProps = {
        protected: covered,
        active,
        focused: this.state.focused,
        invalid: invalid || validationMessages?.length > 0,
        filled: !!value || value === 0,
        disabled: wrappedComponentProps.disabled,
        type: wrappedComponentProps.type,
        fontSize: wrappedComponentProps.fontSize,
        className,
        borderRadius,
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

          {validationMessages?.map(text => (
            <Text
              className="error-message-text"
              size={fontSizes.SMALL}
              type={fontTypes.NEGATIVE}
              key={`err-${text}`}
              css="margin-top: 8px; order: 3;"
            >
              {text}
            </Text>
          ))}
        </Wrapper>
      );
    }
  };
};

export default formInput;
