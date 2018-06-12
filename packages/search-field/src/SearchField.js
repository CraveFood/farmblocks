import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import PropTypes from "prop-types";
import { compose } from "recompose";
import debounce from "lodash.debounce";
import disabledTooltip, {
  disabledTooltipProps
} from "@crave/farmblocks-hoc-disabled-tooltip";
import formInput, { formInputProps } from "@crave/farmblocks-hoc-input";
import withMessages, {
  withMessagesProps
} from "@crave/farmblocks-hoc-validation-messages";

import DropdownWrapper from "./styledComponents/DropdownWrapper";
import Menu from "./components/Menu";

const EnhancedInput = compose(disabledTooltip, withMessages, formInput)(
  "input"
);
EnhancedInput.displayName = "EnhancedInput";

class SearchField extends React.Component {
  state = {
    highlightedIndex: -1,
    focused: false,
    inputValue: this.props.displayValue || this.props.value,
    selectedItem:
      this.props.items &&
      this.props.items.find(item => item.value === this.props.value)
  };

  debouncedOnChange = debounce(this.props.onChange, this.props.debounceDelay);
  onChange = event => {
    const { value } = event.target;

    this.setState({
      inputValue: value,
      highlightedIndex: -1,
      selectedItem: null
    });
    if (value) {
      this.debouncedOnChange(value);
    } else {
      this.props.onChange(value);
      this.props.onSelect();
    }
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.debounceDelay !== this.props.debounceDelay ||
      prevProps.onChange !== this.props.onChange
    ) {
      this.debouncedOnChange && this.debouncedOnChange.cancel();
      this.debouncedOnChange = debounce(
        this.props.onChange,
        this.props.debounceDelay
      );
    }
  };

  static getDerivedStateFromProps = (props, state) => {
    const value = props.displayValue || props.value;
    return value !== state.inputValue ? { inputValue: value } : null;
  };

  componentWillUnmount = () => {
    this.debouncedOnChange.cancel();
  };

  changeHighlight = modifier => {
    this.setState(prevState => {
      const { items } = this.props;
      const highlightedIndex = items
        ? Math.max(
            Math.min(prevState.highlightedIndex + modifier, items.length - 1),
            -1
          )
        : -1;
      this.scroller && this.scroller.centerChildByIndex(highlightedIndex);
      return {
        highlightedIndex
      };
    });
  };

  onKeyDown = event => {
    const { key } = event;
    switch (key) {
      case "Enter":
        if (this.state.highlightedIndex < 0) {
          this.debouncedOnChange.flush();
        } else {
          this.onSelect(this.state.highlightedIndex);
        }
        break;
      case "Escape":
        this.setState({ highlightedIndex: -1 });
        break;
      case "ArrowUp":
        event.preventDefault();
        this.changeHighlight(-1);
        break;
      case "ArrowDown":
        event.preventDefault();
        this.changeHighlight(1);
        break;
    }
  };

  onSelect = index => {
    const selectedItem = this.props.items && this.props.items[index];
    if (selectedItem) {
      this.setState({ selectedItem });
      this.props.onSelect(selectedItem.value);
    }
    this.input && this.input.blur();
  };

  onFocus = () => this.setState({ focused: true, highlightedIndex: -1 });
  onBlur = () => {
    const focusReset = { focused: false, highlightedIndex: -1 };
    this.setState(prevState => {
      if (prevState.selectedItem) {
        return focusReset;
      }
      this.props.onChange("");
      this.props.onSelect();
      return { ...focusReset, inputValue: "" };
    });
  };
  preventBlur = event => {
    event.preventDefault();
  };

  onItemClick = ({ currentTarget }) => {
    const selectedIndex =
      this.scroller &&
      this.scroller.wrapper && // ref inside a ref 😜
      Array.from(this.scroller.wrapper.childNodes).indexOf(currentTarget);

    this.onSelect(selectedIndex);
  };

  _renderMenu = () => {
    const { maxMenuHeight, items, onScrollReachEnd, footer } = this.props;
    const { highlightedIndex } = this.state;

    return (
      <Menu
        innerRef={node => (this.scroller = node)}
        maxMenuHeight={maxMenuHeight}
        onScrollReachEnd={onScrollReachEnd}
        items={items}
        onItemClick={this.onItemClick}
        onMenuMouseDown={this.preventBlur}
        highlightedIndex={highlightedIndex}
        footer={footer}
      />
    );
  };

  render() {
    const {
      width,
      onChange,
      debounceDelay,
      maxMenuHeight,
      items,
      onScrollReachEnd,
      onSelect,
      footer,
      value,
      displayValue,
      ...inputProps
    } = this.props;

    const { focused, highlightedIndex, inputValue, selectedItem } = this.state;

    return (
      <DropdownWrapper
        style={{ width }}
        className={!focused && !!selectedItem && "selected"}
      >
        <EnhancedInput
          value={
            selectedItem
              ? selectedItem.label
              : highlightedIndex === -1
                ? inputValue
                : items[highlightedIndex].label
          }
          onChange={this.onChange}
          type={focused || !inputValue ? "search" : "text"}
          clearable={!!inputValue}
          clearIcon={selectedItem ? "wg-edit" : undefined}
          displayBlock
          onKeyDown={this.onKeyDown}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          innerRef={node => (this.input = node)}
          {...inputProps}
        />
        {!inputProps.disabled &&
          focused &&
          (items || footer) &&
          this._renderMenu()}
      </DropdownWrapper>
    );
  }

  static defaultProps = {
    onChange: () => false,
    onScrollReachEnd: () => false,
    onSelect: () => false,
    width: 200,
    maxMenuHeight: 353,
    debounceDelay: 500
  };

  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    debounceDelay: PropTypes.number,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    displayValue: PropTypes.string,
    ...Menu.propTypes,
    ...formInputProps,
    ...withMessagesProps,
    ...disabledTooltipProps
  };
}

// For React 16.2 or older
polyfill(SearchField);

export default SearchField;
