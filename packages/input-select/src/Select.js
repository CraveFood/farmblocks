import * as React from "react";
import ReactAutocomplete from "react-autocomplete";
import PropTypes from "prop-types";
import { compose } from "recompose";
import memoize from "memoize-one";
import groupBy from "lodash.groupby";
import xor from "lodash.xor";
import formInput, { formInputProps } from "@crave/farmblocks-hoc-input";
import {
  DropdownMenuWrapper,
  DropdownItemWrapper,
} from "@crave/farmblocks-dropdown";
import withMessages, {
  withMessagesProps,
} from "@crave/farmblocks-hoc-validation-messages";
import Tag from "@crave/farmblocks-tags";

import withImage, { refName } from "./components/withImage";
import Item from "./components/Item";
import EmptyCard from "./components/EmptyCard";
import DropdownWrapper from "./styledComponents/DropdownWrapper";
import InputWithTags from "./components/InputWithTags";

const EnhancedInput = compose(
  withMessages,
  formInput,
  withImage,
)(InputWithTags);
EnhancedInput.displayName = "EnhancedInput";

const getValues = ({ multi, value }) => {
  if (!multi) return value;
  if (Array.isArray(value)) return value;
  if (value === undefined) return [];

  return [value];
};

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: getValues(props),
      selectedLabel: this.getSelectedLabel(props),
      isSearching: false,
      isMenuOpen: false,
    };
  }

  componentDidUpdate = prevProps => {
    const { value } = this.props;
    if (
      ((value || value === 0) &&
        value !== prevProps.value &&
        value !== this.state.selectedValue) ||
      prevProps.items !== this.props.items
    ) {
      this.setState({
        selectedValue: value,
        selectedLabel: this.getSelectedLabel(this.props),
      });
    }
  };

  onMenuVisibilityChange = isMenuOpen => {
    if (!this.props.disableSearch && isMenuOpen && this.input) {
      this.input.select();
    }
    this.setState({ isMenuOpen });
  };

  onFilter = event => {
    if (!this.state.isSearching && !this.props.multi) {
      this.props.onChange("");
    }

    this.setState({ selectedLabel: event.target.value, isSearching: true });
  };

  onSelect = (selectedLabel, item) => {
    const { onChange } = this.props;
    this.setState({ selectedLabel, isSearching: false });
    if (this.props.multi) {
      onChange(xor(this.state.selectedValue, [item.value]));
      return;
    }
    onChange(item.value);
  };

  onRemoveTag = value => this.onSelect("", { value });

  onKeyDown = autoCompleteOnKeyDown => event => {
    const { value } = this.props;
    if (
      this.props.multi &&
      event.key === "Backspace" &&
      !this.state.selectedLabel
    ) {
      const lastTagValue = Array.isArray(value) && value.slice(-1)?.[0];
      if (lastTagValue) this.onRemoveTag(lastTagValue);
    }
    autoCompleteOnKeyDown?.(event);
  };

  // eslint-disable-next-line consistent-return
  getSelectedLabel = props => {
    const item =
      (props.value || props.value === 0) &&
      props.items.find(x => x.value === props.value);

    if (item) {
      return item.label;
    }
  };

  normalizeItems = memoize(items => groupBy(items, "value"));

  renderTags = () => {
    const items = this.normalizeItems(this.props.items);
    return getValues(this.props)?.map(value => {
      const item = items[value]?.[0];
      if (!item) return null;

      return (
        <Tag
          className="tag"
          key={item.value}
          value={item.value}
          text={item.label}
          onRemove={this.onRemoveTag}
          disabled={this.props.disabled}
        />
      );
    });
  };

  renderInput = autoCompleteProps => {
    const { ref, ...rest } = autoCompleteProps;

    const {
      renderItem,
      disableSearch,
      items,
      zIndex,
      maxHeight,
      multi,
      placeholder,
      ...inputProps
    } = this.props;

    inputProps.validationMessages = this.state.isMenuOpen
      ? []
      : this.props.validationMessages;

    const selectedItem = items.find(
      item => item.label === autoCompleteProps.value,
    );
    const image = selectedItem && selectedItem.image;

    return (
      <EnhancedInput
        className="input"
        readOnly={disableSearch}
        placeholder={getValues(this.props)?.length ? "" : placeholder}
        {...inputProps}
        {...rest}
        innerRef={ref}
        refName={refName}
        image={image}
        onKeyDown={this.onKeyDown(rest.onKeyDown)}
      >
        {multi && this.renderTags()}
      </EnhancedInput>
    );
  };

  renderMenu = items => {
    const { noResultsMessage, maxHeight } = this.props;

    if (!items || !items.length) {
      return (
        <EmptyCard className="emptyCard" noResultsMessage={noResultsMessage} />
      );
    }
    return (
      <DropdownMenuWrapper className="dropdownMenu" maxHeight={maxHeight}>
        <ul>{items}</ul>
      </DropdownMenuWrapper>
    );
  };

  renderItem = (item, highlighted) => {
    const { selectedValue } = this.state;
    const selected = Array.isArray(selectedValue)
      ? selectedValue.includes(item.value)
      : selectedValue === item.value;
    return (
      <DropdownItemWrapper
        className="itemWrapper"
        key={item.value}
        highlighted={highlighted}
        selected={selected}
      >
        {this.props.renderItem ? (
          this.props.renderItem(item, selected)
        ) : (
          <Item
            className="item"
            label={item.label}
            id={this.props.id && `${this.props.id}-item-${item.value}`}
            image={item.image}
            selected={selected}
            checkbox={this.props.multi}
          />
        )}
      </DropdownItemWrapper>
    );
  };

  shouldItemRender = item => {
    const { selectedLabel } = this.state;
    if (this.state.isSearching) {
      return (
        item.label
          .toLowerCase()
          .indexOf(selectedLabel && selectedLabel.toLowerCase()) > -1
      );
    }

    // If user is not searching, we render the full list of items
    return true;
  };

  render() {
    const { width, zIndex, items, className } = this.props;
    return (
      <DropdownWrapper className={className} width={width} zIndex={zIndex}>
        <ReactAutocomplete
          items={items}
          shouldItemRender={this.shouldItemRender}
          getItemValue={item => item.label}
          value={this.state.selectedLabel}
          onChange={this.onFilter}
          onSelect={this.onSelect}
          renderInput={this.renderInput}
          renderMenu={this.renderMenu}
          renderItem={this.renderItem}
          autoHighlight={false}
          onMenuVisibilityChange={this.onMenuVisibilityChange}
          wrapperStyle={{}}
          ref={ref => {
            this.input = ref;
          }}
        />
      </DropdownWrapper>
    );
  }

  static defaultProps = {
    onChange: () => false,
    width: "200px",
    items: [],
  };

  static propTypes = {
    ...formInputProps,
    ...withMessagesProps,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.string,
        image: PropTypes.string,
      }),
    ),
    value: (props, ...rest) => {
      const valueTypes = PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]);
      return (props.multi ? PropTypes.arrayOf(valueTypes) : valueTypes)(
        props,
        ...rest,
      );
    },
    width: PropTypes.string,
    onChange: PropTypes.func,
    renderItem: PropTypes.func,
    noResultsMessage: PropTypes.string,
    disableSearch: PropTypes.bool,
    zIndex: PropTypes.number,
    maxHeight: PropTypes.string,
    multi: PropTypes.bool,
    className: PropTypes.string,
  };
}

export default Select;
