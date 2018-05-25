import * as React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import disabledTooltip, {
  disabledTooltipProps
} from "@crave/farmblocks-hoc-disabled-tooltip";
import formInput, { formInputProps } from "@crave/farmblocks-hoc-input";
import withMessages, {
  withMessagesProps
} from "@crave/farmblocks-hoc-validation-messages";

import DropdownWrapper from "./styledComponents/DropdwonWrapper";

const EnhancedInput = compose(disabledTooltip, withMessages, formInput)(
  "input"
);
EnhancedInput.displayName = "EnhancedInput";

class SearchField extends React.Component {
  render() {
    const { onChange, ...inputProps } = this.props;
    return (
      <DropdownWrapper width={this.props.width}>
        <EnhancedInput
          onChange={onChange}
          type="search"
          clearIcon="wg-edit"
          displayBlock
          {...inputProps}
        />
      </DropdownWrapper>
    );
  }

  static defaultProps = {
    onChange: () => false,
    onSelect: () => false,
    width: "200px",
    maxMenuHeight: "353px"
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
    maxMenuHeight: PropTypes.string,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    ...formInputProps,
    ...withMessagesProps,
    ...disabledTooltipProps
  };
}

export default SearchField;
