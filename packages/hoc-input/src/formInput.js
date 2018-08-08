import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import wrapDisplayName from "recompose/wrapDisplayName";
import Text from "@crave/farmblocks-text";
import Link from "@crave/farmblocks-link";
import { fontSizes } from "@crave/farmblocks-theme";
import MoreInfo from "@crave/farmblocks-more-info";
import { alignments } from "@crave/farmblocks-tooltip";
import values from "object.values";

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
  clearIcon: PropTypes.string,
  leftIcon: PropTypes.string,
  moreInfoContent: PropTypes.node,
  moreInfoAlign: PropTypes.oneOf(values(alignments))
};

const formInput = WrappedComponent => {
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
        protected: covered,
        disableManualReplace,
        moreInfoContent,
        moreInfoAlign,
        ...wrappedComponentProps
      } = this.props;
      const wrapperProps = {
        protected: covered,
        focused: this.state.focused,
        invalid: invalid === "true",
        filled: !!value || value === 0,
        disabled: wrappedComponentProps.disabled,
        type: wrappedComponentProps.type,
        fontSize: wrappedComponentProps.fontSize
      };

      return (
        <Wrapper {...wrapperProps} onClick={this.setInputFocus}>
          {this._renderInput(wrappedComponentProps)}
          {this._renderLabel(label, moreInfoContent, moreInfoAlign)}
        </Wrapper>
      );
    }

    _renderInput({
      innerRef,
      refName,
      clearable,
      clearIcon,
      leftIcon,
      ...inputProps
    }) {
      const handlers = {
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      };

      const isSearch =
        inputProps.type && inputProps.type.toLowerCase() === "search";
      const iconName = leftIcon || (isSearch && "wg-search");

      const clearButton = (clearable || isSearch) &&
        this.state.value && (
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
        <div
          className={classNames("input", { dropdown: isDropdown })}
          ref={element => {
            this.inputRef = element && element.querySelector("input");
          }}
          onMouseDown={this.preventBlurOfClearIcon}
        >
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
        </div>
      );
    }

    _renderLabel(label, moreInfoContent, moreInfoAlign) {
      return (
        label && (
          <div>
            <Text
              title
              className="label"
              size={fontSizes.SMALL}
              lineHeight={1.14}
            >
              {label}
            </Text>
            {moreInfoContent && (
              <MoreInfo className="moreInfo" tooltipAlign={moreInfoAlign}>
                {moreInfoContent}
              </MoreInfo>
            )}
          </div>
        )
      );
    }

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
        this.inputRef && this.inputRef.blur();
      }

      const nextValue = this.getValueFromProps(this.props);
      const prevValue = this.getValueFromProps(prevProps);
      if (nextValue !== prevValue) {
        this.setState({
          value: nextValue
        });
      }
    };

    getValueFromProps = ({ input, value }) => (input ? input.value : value);

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
        target: { value: "" }
      });
    };

    setInputFocus = () => {
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
      clearIcon: "wg-close-int",
      moreInfoAlign: alignments.LEFT
    };
  };
};

export default formInput;
