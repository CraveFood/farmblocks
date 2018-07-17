import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import isEqual from "lodash.isequal";
import Input from "@crave/farmblocks-input-text";

import DropdownWrapper from "./styledComponents/DropdownWrapper";
import Menu from "./components/Menu";

class SearchField extends React.Component {
  state = {
    highlightedIndex: -1,
    focused: false,
    inputValue: "",
    lastValue: "",
    lastItems: [],
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
    const valueChanged = props.value !== state.lastValue;
    if (valueChanged || !isEqual(props.items, state.lastItems)) {
      const selectedItem =
        props.items && props.items.find(item => item.value === props.value);
      const inputValue = selectedItem
        ? selectedItem.label
        : valueChanged
          ? ""
          : state.inputValue;
      return {
        inputValue,
        selectedItem,
        lastValue: props.value,
        lastItems: props.items
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

  _renderMenu = props => {
    const { highlightedIndex } = this.state;

    return (
      <Menu
        {...props}
        innerRef={node => (this.scroller = node)}
        onItemClick={this.onItemClick}
        highlightedIndex={highlightedIndex}
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

    const menuProps = {
      maxMenuHeight,
      items,
      onScrollReachEnd,
      footer
    };

    const { focused, selectedItem } = this.state;

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
          {...inputProps}
        />
        {focused && (items || footer) && this._renderMenu(menuProps)}
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
    ...Menu.propTypes
  };
}

// For React 16.2 or older
polyfill(SearchField);

export default SearchField;
