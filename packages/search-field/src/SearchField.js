import * as React from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import isEqual from "lodash.isequal";
import Input from "@crave/farmblocks-input-text";

import DropdownWrapper from "./styledComponents/DropdownWrapper";
import Menu, { defaultKeyNames, keyNamesPropTypes } from "./components/Menu";

class SearchField extends React.Component {
  state = {
    highlightedIndex: -1,
    focused: false,
    inputValue: "",
    items: [],
    selectedItem: null,
  };

  componentDidMount = () => {
    const { value, items } = this.props;
    if (items) {
      this.setState({ items });
    }

    if (value) {
      this.setValueFromProps();
    }
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.debounceDelay !== this.props.debounceDelay ||
      prevProps.onSearchChange !== this.props.onSearchChange
    ) {
      this.debouncedOnSearchChange?.cancel();

      this.debouncedOnSearchChange = debounce(
        this.props.onSearchChange,
        this.props.debounceDelay,
      );
    }

    if (!isEqual(prevProps.items, this.props.items)) {
      this.setState({ items: this.props.items });
      this.setValueFromProps();
    }

    if (prevProps.value !== this.props.value) {
      this.setValueFromProps();
    }
  };

  componentWillUnmount = () => {
    this.debouncedOnSearchChange.cancel();
  };

  debouncedOnSearchChange = debounce(
    this.props.onSearchChange,
    this.props.debounceDelay,
  );

  setValueFromProps = () => {
    const { value, items, valueKey, labelKey } = this.props;
    const emptyState = { selectedItem: null };

    if (!value) {
      return this.setState(emptyState);
    }

    const selectedItem = items && items.find(item => item[valueKey] === value);
    if (selectedItem) {
      return this.setState({
        inputValue: selectedItem[labelKey],
        selectedItem,
      });
    }

    return this.setState(emptyState);
  };

  changeHighlight = modifier => {
    this.setState(prevState => {
      const { items } = this.props;
      const highlightedIndex = items
        ? Math.max(
            Math.min(prevState.highlightedIndex + modifier, items.length - 1),
            -1,
          )
        : -1;

      if (this.scroller) {
        this.scroller.centerChildByIndex(highlightedIndex);
      }

      return {
        highlightedIndex,
      };
    });
  };

  onKeyDown = event => {
    const { key, target } = event;
    switch (key) {
      case "Enter":
        if (this.state.highlightedIndex < 0) {
          this.debouncedOnSearchChange.flush();
        } else {
          this.selectResult(
            this.state.highlightedIndex,
            () => target && target.blur && target.blur(),
          );
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

      default:
    }
  };

  onFocus = () => {
    this.setState({ focused: true, highlightedIndex: -1 });
  };

  onSearchChange = event => {
    const { value } = event.target;
    this.debouncedOnSearchChange(value);
    if (!value) {
      this.debouncedOnSearchChange.flush();
      this.valueUpdated();
    }
    this.setState({ inputValue: value });
  };

  valueUpdated = (item, cb) => {
    const { valueKey } = this.props;
    this.props.onChange?.(item && item[valueKey], item);
    return cb && cb();
  };

  onBlur = () => {
    const { selectedItem } = this.state;
    const { labelKey } = this.props;

    const inputValue =
      selectedItem && selectedItem[labelKey] ? selectedItem[labelKey] : "";
    if (!selectedItem) {
      this.props.onSearchChange("");
      this.valueUpdated();
    }
    return this.setState({ focused: false, highlightedIndex: -1, inputValue });
  };

  selectResult = (index, cb) => {
    const { items, labelKey } = this.props;
    const selectedItem = items && items[index];
    return (
      selectedItem &&
      this.setState(
        { selectedItem, focused: false, inputValue: selectedItem[labelKey] },
        () => this.valueUpdated(selectedItem, cb),
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

  renderMenu = props => {
    const { highlightedIndex } = this.state;

    return (
      <Menu
        {...props}
        className="menu"
        innerRef={node => {
          this.scroller = node;
        }}
        onItemClick={this.onItemClick}
        highlightedIndex={highlightedIndex}
      />
    );
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
      valueKey,
      labelKey,
      imageKey,
      className,
      ...inputProps
    } = this.props;

    const menuProps = {
      maxMenuHeight,
      items: this.state.items,
      onScrollReachEnd,
      footer,
      valueKey,
      labelKey,
      imageKey,
    };

    const { focused, selectedItem, inputValue } = this.state;
    return (
      <DropdownWrapper
        className={`${className} ${selectedItem ? "protected" : ""} ${
          inputProps.disabled ? "disabled" : ""
        }`}
        style={{ width, zIndex }}
      >
        <Input
          {...inputProps}
          className="searchInput"
          type="search"
          protected={!!selectedItem}
          disableManualReplace
          value={inputValue}
          onKeyDown={this.onKeyDown}
          onFocus={this.onFocus}
          onChange={this.onSearchChange}
          onBlur={this.onBlur}
          focused={this.state.focused}
        />
        {focused &&
          ((this.state.items && this.state.items.length) || footer) &&
          this.renderMenu(menuProps)}
      </DropdownWrapper>
    );
  }

  static defaultProps = {
    onSearchChange: () => false,
    onScrollReachEnd: () => false,
    onChange: () => false,
    width: 200,
    maxMenuHeight: 353,
    debounceDelay: 500,
    ...defaultKeyNames,
  };

  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    debounceDelay: PropTypes.number,
    onSearchChange: PropTypes.func,
    onChange: PropTypes.func,
    zIndex: PropTypes.number,
    className: PropTypes.string,
    ...keyNamesPropTypes,
    ...Menu.propTypes,
  };
}

export default SearchField;
