import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import wrapDisplayName from "recompose/wrapDisplayName";
import Text from "@crave/farmblocks-text";
import Link from "@crave/farmblocks-link";
import { fontSizes } from "@crave/farmblocks-theme";

import Wrapper from "./styledComponents/Wrapper";

export const formInputProps = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  fontSize: PropTypes.number,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  innerRef: PropTypes.func,
  input: PropTypes.shape({
    value: PropTypes.any,
    onChange: PropTypes.func
  }),
  readOnly: PropTypes.bool,
  refName: PropTypes.string,
  clearable: PropTypes.bool,
  clearIcon: PropTypes.string
};

const formInput = WrappedComponent => {
  /* eslint-disable-next-line react/no-deprecated */
  return class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: props.input ? props.input.value : props.value,
        focused: props.focused
      };

      this.onChange = this.onChange.bind(this);
      this.onFocus = this.onFocus.bind(this);
      this.onBlur = this.onBlur.bind(this);
      this._renderInput = this._renderInput.bind(this);
    }

    render() {
      const { value } = this.state;
      const {
        label,
        focused,
        onChange,
        onFocus,
        onBlur,
        invalid,
        input,
        meta,
        ...wrappedComponentProps
      } = this.props;
      const wrapperProps = {
        focused: this.state.focused,
        invalid: invalid === "true",
        filled: !!value || value === 0,
        disabled: wrappedComponentProps.disabled,
        type: wrappedComponentProps.type,
        fontSize: wrappedComponentProps.fontSize
      };

      return (
        <Wrapper {...wrapperProps} onClick={this.handleWrapperClick}>
          {this._renderInput(wrappedComponentProps)}
          {this._renderLabel(label)}
        </Wrapper>
      );
    }

    _renderInput({ innerRef, refName, clearable, clearIcon, ...inputProps }) {
      const handlers = {
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      };

      const isSearch =
        inputProps.type && inputProps.type.toLowerCase() === "search";
      const icon = isSearch && (
        <div className="icon search">
          <i className="wg-search" />
        </div>
      );

      // We are preventing blur on MouseDown event to avoid a bug that
      // happens in the SearchField when typing and then clicking on the
      // clearButton. In this case, SearchField would lose focus because of
      // its onBlur function, which is fired before this clearButton's onClick,
      // and hence handleClearClick would not be called.
      const clearButton = (clearable || isSearch) &&
        this.state.value && (
          <Link
            className="clear"
            onClick={this.handleClearClick}
            onMouseDown={this.preventBlur}
          >
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
        <div
          className={classNames("input", { dropdown: isDropdown })}
          ref={element => {
            this.inputRef = element && element.querySelector("input");
          }}
        >
          {icon}
          <WrappedComponent
            className="wrapped"
            {...inputProps}
            {...handlers}
            {...{ [refName]: innerRef }}
            value={this.state.value}
          />
          {clearButton}
          {dropDownIcon}
        </div>
      );
    }

    _renderLabel(label, focused) {
      return (
        label && (
          <Text
            title
            className="label"
            size={fontSizes.SMALL}
            lineHeight={1.14}
          >
            {label}
          </Text>
        )
      );
    }

    componentWillReceiveProps(nextProps) {
      const nextValue = nextProps.input
        ? nextProps.input.value
        : nextProps.value;

      const currentValue = this.props.input
        ? this.props.input.value
        : this.props.value;

      if (nextValue !== currentValue) {
        this.setState({
          value: nextValue
        });
      }
    }

    preventBlur = event => event.preventDefault();

    handleClearClick = () => {
      this.setState({ value: "" });
      this.props.onChange({
        type: "change",
        value: "",
        target: { value: "" }
      });
    };

    handleWrapperClick = () => {
      this.inputRef && this.inputRef.focus();
    };

    onChange(event) {
      this.setState({
        value: event.value || event.target.value
      });

      if (this.props.input && this.props.input.onChange) {
        return this.props.input.onChange(event);
      }

      return this.props.onChange(event);
    }

    onFocus(event) {
      this.setState({ focused: true });
      return this.props.onFocus(event);
    }

    onBlur(event) {
      this.setState({ focused: false });
      return this.props.onBlur(event);
    }

    static displayName = wrapDisplayName(WrappedComponent, "formInput");

    static propTypes = {
      ...WrappedComponent.propTypes,
      ...formInputProps
    };

    static defaultProps = {
      value: "",
      type: "text",
      focused: false,
      disabled: false,
      onChange: () => null,
      onFocus: () => null,
      onBlur: () => null,
      input: null,
      refName: "ref",
      clearable: false,
      clearIcon: "wg-close-int"
    };
  };
};

export default formInput;
