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
  value: PropTypes.string,
  type: PropTypes.string,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  innerRef: PropTypes.func
};

const formInput = WrappedComponent => {
  return class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: props.value,
        focused: props.focused
      };

      this.onChange = this.onChange.bind(this);
      this.onFocus = this.onFocus.bind(this);
      this.onBlur = this.onBlur.bind(this);
      this._renderInput = this._renderInput.bind(this);
    }

    render() {
      const {
        label,
        focused,
        onChange,
        onFocus,
        onBlur,
        invalid,
        ...wrappedComponentProps
      } = this.props;
      const wrapperProps = {
        focused: this.state.focused,
        invalid: invalid === "true",
        filled: this.state.value.length > 0,
        disabled: wrappedComponentProps.disabled,
        type: wrappedComponentProps.type
      };

      return (
        <Wrapper {...wrapperProps} onClick={this.handleWrapperClick}>
          {this._renderInput(wrappedComponentProps)}
          {this._renderLabel(label)}
        </Wrapper>
      );
    }

    _renderInput({ innerRef, ...inputProps }) {
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
      const clearButton = isSearch &&
        this.state.value && (
          <Link className="clear" onClick={this.handleClearClick}>
            <i className="wg-close-int" />
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
            {...inputProps}
            {...handlers}
            ref={innerRef}
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
      if (nextProps.value !== this.props.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }

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
      onBlur: () => null
    };
  };
};

export default formInput;
