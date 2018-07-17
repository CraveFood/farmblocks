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
          this.selectResult(this.state.highlightedIndex);
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

  onFocus = () => this.setState({ focused: true, highlightedIndex: -1 });

  onSearchChange = event => {
    const { value } = event.target;
    this.debouncedOnSearchChange(value);
    if (!value) {
      this.debouncedOnSearchChange.flush();
      this.valueUpdated();
    }
    this.setState({ inputValue: value });
  };

  valueUpdated = value => {
    const { onChange } = this.props;
    return onChange && onChange(value);
  };

  onBlur = () => {
    const { selectedItem } = this.state;
    const inputValue =
      selectedItem && selectedItem.label ? selectedItem.label : "";
    this.props.onSearchChange(inputValue);
    this.props.onChange(inputValue);
    return this.setState({ focused: false, highlightedIndex: -1, inputValue });
  };

  selectResult = index => {
    const { items } = this.props;
    const selectedItem = items && items[index];
    return (
      selectedItem &&
      this.setState(
        { selectedItem, focused: false, inputValue: selectedItem.label },
        () => this.valueUpdated(selectedItem.value)
      )
    );
  };

  onItemClick = ({ currentTarget }) => {
    const selectedIndex =
      this.scroller &&
      this.scroller.wrapper && // ref inside a ref 😜
      Array.from(this.scroller.wrapper.childNodes).indexOf(currentTarget);

    this.selectResult(selectedIndex);
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
      <DropdownWrapper style={{ width, zIndex }}>
        <Input
          value={this.getInputValue()}
          type={selectedItem ? "text" : "search"}
          clearable
          clearIcon={selectedItem ? "wg-edit" : undefined}
          displayBlock
          onKeyDown={this.onKeyDown}
          onFocus={this.onFocus}
          onChange={this.onSearchChange}
          onBlur={this.onBlur}
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
