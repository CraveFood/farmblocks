import * as React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import debounce from "lodash.debounce";
import disabledTooltip, {
  disabledTooltipProps
} from "@crave/farmblocks-hoc-disabled-tooltip";
import formInput, { formInputProps } from "@crave/farmblocks-hoc-input";
import withMessages, {
  withMessagesProps
} from "@crave/farmblocks-hoc-validation-messages";
import {
  DropdownMenuWrapper,
  DropdownItemWrapper
} from "@crave/farmblocks-dropdown";

import DropdownWrapper from "./styledComponents/DropdwonWrapper";
import ScrollWrapper from "./styledComponents/ScrollWrapper";

const EnhancedInput = compose(disabledTooltip, withMessages, formInput)(
  "input"
);
EnhancedInput.displayName = "EnhancedInput";

class SearchField extends React.Component {
  state = {
    highlightedIndex: -1
  };

  debouncedOnChange = debounce(this.props.onChange, this.props.debounceDelay);
  onChange = event => {
    // retain synthetic events for async use.
    // https://reactjs.org/docs/events.html#event-pooling
    event && event.persist && event.persist();

    this.debouncedOnChange(event);
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.debounceDelay !== this.props.debounceDelay ||
      prevProps.onChange !== this.props.onChange
    ) {
      this.debouncedOnChange && this.debouncedOnChange.cancel();
      this.debouncedOnChange = debounce(
        this.props.onChange,
        this.props.debounceDelay
      );
    }
  };

  componentWillUnmount = () => {
    this.debouncedOnChange.cancel(); // Avoid a debounced event to trigger after the component is unmounted
  };

  onKeyDown = event => {
    const { key } = event;
    switch (key) {
      case "Enter":
        this.debouncedOnChange.flush();
        break;
      case "ArrowUp":
        event.preventDefault();
        this.setState(prevState => ({
          highlightedIndex: Math.max(prevState.highlightedIndex - 1, -1)
        }));
        break;
      case "ArrowDown":
        event.preventDefault();
        this.setState(prevState => ({
          highlightedIndex: Math.min(
            prevState.highlightedIndex + 1,
            this.props.items.length - 1
          )
        }));
        break;
    }
  };

  _renderItem = (item, highlighted) => {
    return (
      <DropdownItemWrapper key={item.value} highlighted={highlighted}>
        {item.label}
      </DropdownItemWrapper>
    );
  };

  render() {
    const {
      width,
      onChange,
      debounceDelay,
      maxMenuHeight,
      items,
      onScrollReachEnd,
      ...inputProps
    } = this.props;
    return (
      <DropdownWrapper width={width}>
        <EnhancedInput
          onChange={this.onChange}
          type="search"
          clearIcon="wg-edit"
          displayBlock
          onKeyDown={this.onKeyDown}
          {...inputProps}
        />
        {items && (
          <DropdownMenuWrapper>
            <ScrollWrapper style={{ maxHeight: maxMenuHeight }}>
              {items.map((item, index) => {
                return this._renderItem(
                  item,
                  index === this.state.highlightedIndex
                );
              })}
            </ScrollWrapper>
          </DropdownMenuWrapper>
        )}
      </DropdownWrapper>
    );
  }

  static defaultProps = {
    onChange: () => false,
    onSelect: () => false,
    width: "200px",
    maxMenuHeight: 353,
    debounceDelay: 500
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          label: PropTypes.string,
          image: PropTypes.string
        }),
        PropTypes.node
      ])
    ),
    loading: PropTypes.node,
    width: PropTypes.string,
    maxMenuHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    debounceDelay: PropTypes.number,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    ...formInputProps,
    ...withMessagesProps,
    ...disabledTooltipProps
  };
}

export default SearchField;
