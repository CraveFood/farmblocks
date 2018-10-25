import * as React from "react";
import ReactAutocomplete from "react-autocomplete";
import PropTypes from "prop-types";
import { compose } from "recompose";
import formInput, { formInputProps } from "@crave/farmblocks-hoc-input";
import {
  DropdownMenuWrapper,
  DropdownItemWrapper
} from "@crave/farmblocks-dropdown";
import withMessages, {
  withMessagesProps
} from "@crave/farmblocks-hoc-validation-messages";

import withImage, { refName } from "./components/withImage";
import Item from "./components/Item";
import EmptyCard from "./components/EmptyCard";
import DropdownWrapper from "./styledComponents/DropdownWrapper";

const EnhancedInput = compose(withMessages, formInput, withImage)("input");
EnhancedInput.displayName = "EnhancedInput";

class Select extends React.Component {
  render() {
    const { width, zIndex, items } = this.props;
    return (
      <DropdownWrapper width={width} zIndex={zIndex}>
        <ReactAutocomplete
          items={items}
          shouldItemRender={this._shouldItemRender}
          getItemValue={item => item.label}
          value={this.state.selectedLabel}
          onChange={this.onFilter}
          onSelect={this.onSelect}
          renderInput={this._renderInput}
          renderMenu={this._renderMenu}
          renderItem={this._renderItem}
          autoHighlight={false}
          onMenuVisibilityChange={this.onMenuVisibilityChange}
          wrapperStyle={{}}
          ref={ref => (this.input = ref)}
        />
      </DropdownWrapper>
    );
  }

  onMenuVisibilityChange = isMenuOpen => {
    if (!this.props.disableSearch && isMenuOpen && this.input) {
      this.input.select();
    }
    this.setState({ isMenuOpen });
  };

  onFilter = event => {
    !this.state.isSearching && this.props.onChange("");

    this.setState({ selectedLabel: event.target.value, isSearching: true });
  };

  onSelect = (selectedLabel, item) => {
    this.setState({ selectedLabel, isSearching: false });
    this.props.onChange(item.value);
  };

  getSelectedLabel = props => {
    const item =
      (props.value || props.value === 0) &&
      props.items.find(x => x.value === props.value);

    if (item) {
      return item.label;
    }
  };

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
        selectedLabel: this.getSelectedLabel(this.props)
      });
    }
  };

  _renderInput = autoCompleteProps => {
    const { ref, ...rest } = autoCompleteProps;

    const {
      renderItem,
      disableSearch,
      items,
      zIndex,
      maxHeight,
      ...inputProps
    } = this.props;

    inputProps.validationMessages = this.state.isMenuOpen
      ? []
      : this.props.validationMessages;

    const selectedItem = items.find(
      item => item.label === autoCompleteProps.value
    );
    const image = selectedItem && selectedItem.image;
    return (
      <EnhancedInput
        readOnly={disableSearch}
        {...inputProps}
        {...rest}
        ref={ref}
        refName={refName}
        image={image}
      />
    );
  };

  _renderMenu = items => {
    const { noResultsMessage, maxHeight } = this.props;

    if (!items || !items.length) {
      return <EmptyCard noResultsMessage={noResultsMessage} />;
    }
    return (
      <DropdownMenuWrapper maxHeight={maxHeight}>
        <ul>{items}</ul>
      </DropdownMenuWrapper>
    );
  };

  _renderItem = (item, highlighted) => {
    const selected = this.state.selectedLabel === item.label;
    return (
      <DropdownItemWrapper
        key={item.value}
        highlighted={highlighted}
        selected={selected}
      >
        {this.props.renderItem ? (
          this.props.renderItem(item, selected)
        ) : (
          <Item label={item.label} image={item.image} selected={selected} />
        )}
      </DropdownItemWrapper>
    );
  };

  _shouldItemRender = item => {
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

  state = {
    selectedValue: this.props.value,
    selectedLabel: this.getSelectedLabel(this.props),
    isSearching: false,
    isMenuOpen: false
  };

  static defaultProps = {
    onChange: () => false,
    width: "200px",
    items: []
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.string,
        image: PropTypes.string
      })
    ).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.string,
    onChange: PropTypes.func,
    renderItem: PropTypes.func,
    noResultsMessage: PropTypes.string,
    disableSearch: PropTypes.bool,
    zIndex: PropTypes.number,
    maxHeight: PropTypes.string,
    ...formInputProps,
    ...withMessagesProps
  };
}

export default Select;
