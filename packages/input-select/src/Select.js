import * as React from "react";
import ReactAutocomplete from "react-autocomplete";
import PropTypes from "prop-types";
import formInput, { formInputProps } from "@crave/farmblocks-hoc-input";
import {
  DropdownWrapper,
  DropdownMenuWrapper,
  DropdownItemWrapper
} from "@crave/farmblocks-dropdown";

const EnhancedInput = formInput("input");

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      search: "",
      item: {}
    };

    this._renderInput = this._renderInput.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this._shouldItemRender = this._shouldItemRender.bind(this);
  }

  render() {
    return (
      <DropdownWrapper>
        <ReactAutocomplete
          items={this.props.items}
          shouldItemRender={this._shouldItemRender}
          getItemValue={item => item.label}
          renderItem={this._renderItem}
          value={this.state.value}
          onChange={e =>
            this.setState({ value: e.target.value, search: e.target.value })}
          onSelect={(value, item) => {
            this.setState({ value, search: "", item });
          }}
          renderMenu={this._renderMenu}
          // open
          renderInput={this._renderInput}
          autoHighlight={false}
          style={{ cursor: "pointer" }}
        />
      </DropdownWrapper>
    );
  }

  _renderInput(props) {
    const { ref, ...rest } = props;
    const inputProps = {
      label: this.props.label,
      placeholder: this.props.placeholder
    };
    return <EnhancedInput {...rest} {...inputProps} innerRef={ref} />;
  }

  _renderMenu(items) {
    return (
      <DropdownMenuWrapper>
        <ul>{items}</ul>
      </DropdownMenuWrapper>
    );
  }

  _renderItem(item, highlighted) {
    return (
      <DropdownItemWrapper
        key={item.id}
        highlighted={highlighted}
        selected={this.state.value === item.label}
      >
        <div>
          {item.id} - {item.label}
        </div>
      </DropdownItemWrapper>
    );
  }

  _shouldItemRender(item, value) {
    if (this.state.search) {
      return (
        item.label.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
      );
    }

    // If user is not searching, we render the full list of items
    return true;
  }
}

Select.propTypes = {
  items: PropTypes.array,
  value: PropTypes.string,
  ...formInputProps
};

export default Select;
