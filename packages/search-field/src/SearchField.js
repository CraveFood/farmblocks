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
import StaticInput from "./components/StaticInput";

const EnhancedInput = compose(disabledTooltip, withMessages, formInput)(
  "input"
);
EnhancedInput.displayName = "EnhancedInput";
const ReadOnly = compose(disabledTooltip, withMessages, formInput)(StaticInput);
ReadOnly.displayName = "ReadOnly";

class SearchField extends React.Component {
  state = {
    highlightedIndex: -1,
    focused: false,
    inputValue: "",
    lastValue: "",
    selectedItem: null
  };

  debouncedOnSearchChange = debounce(
    this.props.onSearchChange,
    this.props.debounceDelay
  );
  onSearchChange = event => {
    const { value } = event.target;

    this.setState({
      inputValue: value,
      highlightedIndex: -1,
      selectedItem: null
    });
    this.debouncedOnSearchChange(value);
    if (!value) {
      this.debouncedOnSearchChange.flush();
      this.props.onChange();
    }
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.debounceDelay !== this.props.debounceDelay ||
      prevProps.onSearchChange !== this.props.onSearchChange
    ) {
      this.debouncedOnSearchChange && this.debouncedOnSearchChange.cancel();
      this.debouncedOnSearchChange = debounce(
        this.props.onSearchChange,
        this.props.debounceDelay
      );
    }
  };

  static getDerivedStateFromProps = (props, state) => {
    if (props.value !== state.lastValue) {
      const selectedItem =
        props.items && props.items.find(item => item.value === props.value);
      return {
        inputValue: selectedItem ? selectedItem.label : "",
        selectedItem,
        lastValue: props.value
      };
    }
    return null;
  };

  componentWillUnmount = () => {
    this.debouncedOnSearchChange.cancel();
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
          this.debouncedOnSearchChange.flush();
        } else {
          this.onChange(this.state.highlightedIndex);
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

  onChange = index => {
    const selectedItem = this.props.items && this.props.items[index];
    if (selectedItem) {
      this.setState({ selectedItem });
      this.props.onChange(selectedItem.value);
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
      this.props.onSearchChange("");
      this.props.onChange();
      return { ...focusReset, inputValue: "", selectedItem: null };
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

    this.onChange(selectedIndex);
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

  getInputValue = () => {
    const { selectedItem, highlightedIndex, inputValue } = this.state;

    if (selectedItem) return selectedItem.label;
    if (highlightedIndex === -1) return inputValue;

    const { items } = this.props;
    const highlightedItem = items && items[highlightedIndex];

    if (highlightedItem) return highlightedItem.label;
    return "";
  };

  render() {
    const {
      width,
      onSearchChange,
      debounceDelay,
      maxMenuHeight,
      items,
      onScrollReachEnd,
      onChange,
      footer,
      value,
      zIndex,
      ...inputProps
    } = this.props;

    const { focused, selectedItem } = this.state;

    const Input = selectedItem ? ReadOnly : EnhancedInput;
    Input.displayName = "Input";

    return (
      <DropdownWrapper
        style={{ width, zIndex }}
        className={!focused && !!selectedItem && "selected"}
      >
        <Input
          value={this.getInputValue()}
          onChange={this.onSearchChange}
          type={selectedItem ? "text" : "search"}
          clearable
          clearIcon={selectedItem ? "wg-edit" : undefined}
          displayBlock
          onKeyDown={this.onKeyDown}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          innerRef={node => (this.input = node)}
          {...inputProps}
        />
        {focused && (items || footer) && this._renderMenu()}
      </DropdownWrapper>
    );
  }

  static defaultProps = {
    onSearchChange: () => false,
    onScrollReachEnd: () => false,
    onChange: () => false,
    width: 200,
    maxMenuHeight: 353,
    debounceDelay: 500
  };

  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    debounceDelay: PropTypes.number,
    onSearchChange: PropTypes.func,
    onChange: PropTypes.func,
    zIndex: PropTypes.number,
    ...Menu.propTypes,
    ...formInputProps,
    ...withMessagesProps,
    ...disabledTooltipProps
  };
}

// For React 16.2 or older
polyfill(SearchField);

export default SearchField;
