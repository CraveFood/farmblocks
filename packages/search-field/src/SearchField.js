import * as React from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import isEqual from "lodash.isequal";
import Input from "@crave/farmblocks-input-text";

import DropdownWrapper from "./styledComponents/DropdownWrapper";
import Menu, { defaultKeyNames, keyNamesPropTypes } from "./components/Menu";

class SearchField extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.state = {
      highlightedIndex: -1,
      focused: false,
      inputValue: "",
      items: [],
      selectedItem: null,
    };
  }

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

    const selectedItem = items?.find(item => item[valueKey] === value);
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

      this.scroller?.centerChildByIndex(highlightedIndex);

      return {
        highlightedIndex,
      };
    });
  };

  handleKeyDown = event => {
    const { key, target } = event;
    switch (key) {
      case "Enter":
        if (this.state.highlightedIndex < 0) {
          this.debouncedOnSearchChange.flush();
        } else {
          this.selectResult(this.state.highlightedIndex, () => target?.blur());
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

  handleFocus = () => {
    this.setState({ focused: true, highlightedIndex: -1 });
  };

  handleSearchChangeEvent = event => {
    const { value } = event.target;
    this.handleSearchChangeValue(value);
  };

  handleSearchChangeValue = value => {
    this.debouncedOnSearchChange(value);
    if (!value) {
      this.debouncedOnSearchChange.flush();
      this.valueUpdated();
    }
    this.setState({ inputValue: value });
  };

  valueUpdated = (item, cb) => {
    const { valueKey, onChange } = this.props;
    onChange?.(item?.[valueKey], item);
    cb?.();
  };

  handleBlur = () => {
    const { selectedItem } = this.state;
    const { labelKey } = this.props;

    const inputValue = selectedItem?.[labelKey] || "";
    if (!selectedItem) {
      this.props.onSearchChange("", this.selectResult);
    }
    return this.setState({ focused: false, highlightedIndex: -1, inputValue });
  };

  selectResult = (index, cb) => {
    const { items, valueKey, labelKey, onBeforeChange } = this.props;
    const selectedItem = items?.[index];

    if (selectedItem) {
      const proceed = () => {
        this.setState(
          { selectedItem, focused: false, inputValue: selectedItem[labelKey] },
          () => this.valueUpdated(selectedItem, cb),
        );
      };
      if (onBeforeChange) {
        onBeforeChange({
          value: selectedItem[valueKey],
          selectedItem,
          inputDOMElement: this.inputRef.current,
          changeSearch: this.handleSearchChangeValue,
          proceed,
        });
        return;
      }
      proceed();
    }
  };

  handleItemClick = ({ currentTarget }) => {
    const selectedIndex =
      this.scroller?.wrapper && // ref inside a ref 😬
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
        onItemClick={this.handleItemClick}
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
      onBeforeChange,
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
          innerRef={this.inputRef}
          className="searchInput"
          type="search"
          protected={!!selectedItem}
          disableManualReplace
          value={inputValue}
          onKeyDown={this.handleKeyDown}
          onFocus={this.handleFocus}
          onChange={this.handleSearchChangeEvent}
          onBlur={this.handleBlur}
          focused={this.state.focused}
        />
        {focused &&
          (this.state.items?.length || footer) &&
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
    onBeforeChange: PropTypes.func,
    onChange: PropTypes.func,
    zIndex: PropTypes.number,
    className: PropTypes.string,
    ...keyNamesPropTypes,
    ...Menu.propTypes,
  };
}

export default SearchField;
