import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors } from "@crave/farmblocks-theme";
import { formInputProps, styledInput } from "@crave/farmblocks-hoc-input";

// the cover of a protected field is a div (instead of an input) enhanced with formInput hoc and some extra style overridings
const Cover = styled(styledInput)`
  .input {
    position: absolute;
    width: 100%;
    bottom: 0;
    background: ${colors.SUGAR};
    color: ${colors.CARBON};
    box-shadow: none;
    cursor: auto;
  }
  .clear {
    position: absolute;
    right: 8px;
  }
`;
Cover.displayName = "InputCover";

// extra properties supported/extended by the protected field HOC
export const protectedValueProps = {
  protected: PropTypes.bool,
  onReplace: PropTypes.func,
  onCancel: PropTypes.func,
  onKeyDown: PropTypes.func
};

// HOC that covers a component with a dummy text field
// until the edit button is clicked
export default WrappedComponent => {
  return class ProtectedInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isEditing: false,
        value: props.value
      };
    }

    onUncover = () => {
      this.setState({ isEditing: true });
    };

    onCancel = () => {
      this.setState({ isEditing: false });
      return this.props.onCancel && this.props.onCancel();
    };

    onReplace = value => {
      this.setState({ value, isEditing: false });
      return this.props.onReplace && this.props.onReplace(value);
    };

    componentDidUpdate = prevProps => {
      if (this.props.value !== prevProps.value) {
        this.setState({ value: this.props.value, isEditing: false });
      }
    };

    _renderCover = () => {
      return (
        <Cover>
          <div className="input">
            {this.state.value}
            {!this.props.disabled && (
              <div className="clear">
                <a onClick={this.onUncover}>
                  <i className="wg-edit" />
                </a>
              </div>
            )}
          </div>
        </Cover>
      );
    };

    // protected fields will listen to Enter key as an OK and Esc key as Cancel
    onKeyDown = evt => {
      if (evt.key === "Enter") {
        const { value } = evt.target;
        this.onReplace(value);
      }
      if (evt.key === "Escape") {
        this.onCancel();
      }
      return this.props.onKeyDown && this.props.onKeyDown(evt);
    };

    render() {
      const {
        protected: covered,
        onReplace,
        onKeyDown,
        ...wrappedComponentProps
      } = this.props;
      return (
        <div style={{ position: "relative" }}>
          <WrappedComponent
            {...wrappedComponentProps}
            protected={covered}
            focused={this.state.isEditing}
            value={this.state.isEditing ? "" : this.state.value}
            onKeyDown={covered ? this.onKeyDown : onKeyDown}
          />
          {covered && !this.state.isEditing && this._renderCover()}
        </div>
      );
    }

    static propTypes = {
      ...protectedValueProps,
      ...formInputProps
    };
  };
};
