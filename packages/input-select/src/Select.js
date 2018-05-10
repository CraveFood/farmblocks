import * as React from "react";
import ReactAutocomplete from "react-autocomplete";
import PropTypes from "prop-types";
import { compose } from "recompose";
import disabledTooltip, {
  disabledTooltipProps
} from "@crave/farmblocks-hoc-disabled-tooltip";
import formInput, { formInputProps } from "@crave/farmblocks-hoc-input";
import {
  DropdownMenuWrapper,
  DropdownItemWrapper
} from "@crave/farmblocks-dropdown";
import withMessages, {
  withMessagesProps
} from "@crave/farmblocks-hoc-validation-messages";
import { badgeSizes, thumbnailSizes } from "@crave/farmblocks-image";

import EmptyCard from "./components/EmptyCard";
import ItemImage from "./styledComponents/ItemImage";
import ItemContainer from "./styledComponents/ItemContainer";
import DropdownWrapper from "./styledComponents/DropdownWrapper";

const EnhancedInput = compose(disabledTooltip, withMessages, formInput)(
  "input"
);
EnhancedInput.displayName = "EnhancedInput";

class Select extends React.Component {
  render() {
    return (
      <DropdownWrapper width={this.props.width}>
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
          wrapperStyle={{}}
        />
      </DropdownWrapper>
    );
  }

  onFilter = event => {
    !this.state.isSearching && this.props.onChange("");

    this.setState({ selectedLabel: event.target.value, isSearching: true });
  };

  onSelect = (selectedLabel, item) => {
    this.setState({ selectedLabel, isSearching: false });
    this.props.onChange(item.value);
  };

  getSelectedLabel = props => {
    const item = props.value && props.items.find(x => x.value === props.value);

    return item && item.label;
  };

  componentWillReceiveProps = newProps => {
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
  };

  _renderInput = autoCompleteProps => {
    const { ref, ...rest } = autoCompleteProps;

    const { renderItem, disableSearch, items, ...inputProps } = this.props;

    inputProps.validationMessages = this.state.isMenuOpen
      ? []
      : this.props.validationMessages;

    const selectedItem = this.props.items.find(
      item => item.label === autoCompleteProps.value
    );
    const image = selectedItem && selectedItem.image;
    return (
      <EnhancedInput
        readOnly={disableSearch}
        {...inputProps}
        {...rest}
        innerRef={ref}
        displayBlock
        renderContent={content => (
          <ItemContainer>
            {image && <ItemImage src={image} size={badgeSizes.SMALL} badge />}
            {content}
          </ItemContainer>
        )}
      />
    );
  };

  _renderMenu = items => {
    if (!items || !items.length) {
      return <EmptyCard noResultsMessage={this.props.noResultsMessage} />;
    }

    return (
      <DropdownMenuWrapper>
        <ul>{items}</ul>
      </DropdownMenuWrapper>
    );
  };

  _renderItem = (item, highlighted) => (
    <DropdownItemWrapper
      key={item.value}
      highlighted={highlighted}
      selected={this.state.selectedLabel === item.label}
    >
      <div>
        {this.props.renderItem
          ? this.props.renderItem(item)
          : this._renderLabel(item)}
      </div>
    </DropdownItemWrapper>
  );

  _renderLabel = item =>
    item.image ? (
      <ItemContainer>
        <ItemImage src={item.image} size={thumbnailSizes.SMALL} /> {item.label}
      </ItemContainer>
    ) : (
      item.label
    );

  _shouldItemRender = item => {
    if (this.state.isSearching) {
      return (
        item.label
          .toLowerCase()
          .indexOf(this.state.selectedLabel.toLowerCase()) > -1
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
    width: "200px"
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
        image: PropTypes.string
      })
    ).isRequired,
    value: PropTypes.string,
    width: PropTypes.string,
    onChange: PropTypes.func,
    renderItem: PropTypes.func,
    noResultsMessage: PropTypes.string,
    disableSearch: PropTypes.bool,
    ...formInputProps,
    ...withMessagesProps,
    ...disabledTooltipProps
  };
}

export default Select;
