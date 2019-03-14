import * as React from "react";
import ReactAutocomplete from "react-autocomplete";
import PropTypes from "prop-types";
import { compose } from "recompose";
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

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue:
        props.multi && !Array.isArray(props.value)
          ? [props.value]
          : props.value,
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
    if (!this.state.isSearching) {
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

  // eslint-disable-next-line consistent-return
  getSelectedLabel = props => {
    const item =
      (props.value || props.value === 0) &&
      props.items.find(x => x.value === props.value);

    if (item) {
      return item.label;
    }
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
        readOnly={disableSearch}
        {...inputProps}
        {...rest}
        innerRef={ref}
        refName={refName}
        image={image}
      >
        {multi &&
          items.map(
            item =>
              this.state.selectedValue.includes(item.value) && (
                <Tag
                  key={item.value}
                  value={item.value}
                  text={item.label}
                  onRemove={this.onRemoveTag}
                />
              ),
          )}
      </EnhancedInput>
    );
  };

  renderMenu = items => {
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

  renderItem = (item, highlighted) => {
    const { selectedValue } = this.state;
    const selected = Array.isArray(selectedValue)
      ? selectedValue.includes(item.value)
      : selectedValue === item.value;
    return (
      <DropdownItemWrapper
        key={item.value}
        highlighted={highlighted}
        selected={selected}
      >
        {this.props.renderItem ? (
          this.props.renderItem(item, selected)
        ) : (
          <Item
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
    const { width, zIndex, items } = this.props;
    return (
      <DropdownWrapper width={width} zIndex={zIndex}>
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
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      ),
    ]),
    width: PropTypes.string,
    onChange: PropTypes.func,
    renderItem: PropTypes.func,
    noResultsMessage: PropTypes.string,
    disableSearch: PropTypes.bool,
    zIndex: PropTypes.number,
    maxHeight: PropTypes.string,
    multi: PropTypes.bool,
  };
}

export default Select;
