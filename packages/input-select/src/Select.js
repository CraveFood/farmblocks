import * as React from "react";
import ReactAutocomplete from "react-autocomplete";
import PropTypes from "prop-types";
import { compose } from "recompose";
import disabledTooltip, {
  disabledTooltipProps
} from "@crave/farmblocks-hoc-disabled-tooltip";
import formInput, { formInputProps } from "@crave/farmblocks-hoc-input";
import {
  DropdownWrapper,
  DropdownMenuWrapper,
  DropdownItemWrapper
} from "@crave/farmblocks-dropdown";

import EmptyCard from "./components/EmptyCard";

const EnhancedInput = compose(disabledTooltip, formInput)("input");
EnhancedInput.displayName = "EnhancedInput";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.value,
      selectedLabel: this.getSelectedLabel(props),
      isSearching: false,
      isMenuOpen: false
    };

    this._renderInput = this._renderInput.bind(this);
    this._renderMenu = this._renderMenu.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this._shouldItemRender = this._shouldItemRender.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  render() {
    return (
      <DropdownWrapper>
        <ReactAutocomplete
          items={this.props.items}
          shouldItemRender={this._shouldItemRender}
          getItemValue={item => item.label}
          value={this.state.selectedLabel}
          onChange={this.onFilter}
          onSelect={this.onSelect}
          renderInput={this._renderInput}
          renderMenu={this._renderMenu}
          renderItem={this._renderItem}
          autoHighlight={false}
          onMenuVisibilityChange={isMenuOpen => this.setState({ isMenuOpen })}
        />
      </DropdownWrapper>
    );
  }

  onFilter(event) {
    !this.state.isSearching && this.props.onChange("");

    this.setState({ selectedLabel: event.target.value, isSearching: true });
  }

  onSelect(selectedLabel, item) {
    this.setState({ selectedLabel, isSearching: false });
    this.props.onChange(item.value);
  }

  getSelectedLabel(props) {
    const item = props.value && props.items.find(x => x.value === props.value);

    return item && item.label;
  }

  componentWillReceiveProps(newProps) {
    if (
      newProps.value &&
      newProps.value !== this.props.value &&
      newProps.value !== this.state.selectedValue
    ) {
      this.setState({
        selectedValue: newProps.value,
        selectedLabel: this.getSelectedLabel(newProps)
      });
    }
  }

  _renderInput(autoCompleteProps) {
    const { ref, ...rest } = autoCompleteProps;

    const { renderItem, ...inputProps } = this.props;

    inputProps.validationMessages = this.state.isMenuOpen
      ? []
      : this.props.validationMessages;

    return <EnhancedInput {...inputProps} {...rest} innerRef={ref} />;
  }

  _renderMenu(items) {
    if (!items || !items.length) {
      return <EmptyCard noResultsMessage={this.props.noResultsMessage} />;
    }

    return (
      <DropdownMenuWrapper>
        <ul>{items}</ul>
      </DropdownMenuWrapper>
    );
  }

  _renderItem(item, highlighted) {
    return (
      <DropdownItemWrapper
        key={item.value}
        highlighted={highlighted}
        selected={this.state.selectedLabel === item.label}
      >
        <div>
          {this.props.renderItem ? this.props.renderItem(item) : item.label}
        </div>
      </DropdownItemWrapper>
    );
  }

  _shouldItemRender(item) {
    if (this.state.isSearching) {
      return (
        item.label
          .toLowerCase()
          .indexOf(this.state.selectedLabel.toLowerCase()) > -1
      );
    }

    // If user is not searching, we render the full list of items
    return true;
  }
}

Select.defaultProps = {
  onChange: () => false
};

Select.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  renderItem: PropTypes.func,
  noResultsMessage: PropTypes.string,
  ...formInputProps,
  ...disabledTooltipProps
};

export default Select;
