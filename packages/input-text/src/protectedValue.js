import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors } from "@crave/farmblocks-theme";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";
import { formInputProps, styledInput } from "@crave/farmblocks-hoc-input";

// the cover of a protected field is a div (instead of an input) enhanced with formInput hoc and some extra style overridings
const Cover = styled(styledInput)`
  display: block;

  .input {
    position: absolute;
    width: 100%;
    height: 48px;
    padding: 16px;
    bottom: 0;
    background: ${colors.SUGAR};
    color: ${colors.CARBON};
    box-shadow: none;
    cursor: auto;
  }
  .clear {
    position: absolute;
    right: 0px;
  }
`;
Cover.displayName = "InputCover";

const Container = styled.div`
  position: relative;
  display: ${props => props.isEditing && "flex"};
  align-items: flex-end;

  > :first-child {
    flex-grow: 1;
  }

  .margin-button {
    margin: 0 8px;
  }
`;

// extra properties supported/extended by the protected field HOC
export const protectedValueProps = {
  protected: PropTypes.bool,
  onUncover: PropTypes.func,
  onReplace: PropTypes.func,
  onCancel: PropTypes.func,
  onKeyDown: PropTypes.func,
  cancelButtonText: PropTypes.string,
  saveButtonText: PropTypes.string,
  disableManualReplace: PropTypes.bool
};

// HOC that covers a component with a dummy text field
// until the edit button is clicked
export default WrappedComponent => {
  return class ProtectedInput extends React.Component {
    state = {
      isEditing: false,
      value: this.props.value,
      editedValue: ""
    };

    onUncover = () => {
      const { onUncover } = this.props;
      this.setState({ isEditing: true, editedValue: "" });
      onUncover && onUncover();
    };

    onCancel = () => {
      this.setState({ isEditing: false, editedValue: "" });
      return this.props.onCancel && this.props.onCancel();
    };

    onReplace = value => {
      this.setState({ value, isEditing: false, editedValue: "" });
      return this.props.onReplace && this.props.onReplace(value);
    };

    componentDidUpdate = prevProps => {
      if (this.props.value !== prevProps.value) {
        this.setState({
          value: this.props.value
        });
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
        disableManualReplace,
        onReplace,
        onKeyDown,
        onUncover,
        onBlur,
        onChange,
        cancelButtonText,
        saveButtonText,
        focused,
        ...wrappedComponentProps
      } = this.props;
      const { isEditing } = this.state;

      const displayButtons = !disableManualReplace;

      return (
        <Container isEditing={isEditing}>
          <WrappedComponent
            {...wrappedComponentProps}
            protected={covered}
            focused={covered ? this.state.isEditing : focused}
            value={isEditing ? this.state.editedValue : this.state.value}
            onKeyDown={covered && displayButtons ? this.onKeyDown : onKeyDown}
            onChange={event => {
              this.setState({ editedValue: event.target.value });
              onChange && onChange(event);
            }}
            onBlur={event => {
              covered && isEditing && this.onCancel();
              onBlur && onBlur(event);
            }}
          />
          {covered && !isEditing && this._renderCover()}
          {covered && displayButtons && isEditing && (
            <div>
              <Button
                id="cancel-button"
                onClick={this.onCancel}
                size={buttonSizes.MEDIUM}
                className="margin-button"
              >
                {cancelButtonText}
              </Button>
              <Button
                id="save-button"
                onClick={() => {
                  this.onReplace(this.state.editedValue);
                }}
                onMouseDown={e => {
                  // We do this in order to avoid onBlur event on input
                  e.preventDefault();
                }}
                type={buttonTypes.SECONDARY}
                size={buttonSizes.MEDIUM}
              >
                {saveButtonText}
              </Button>
            </div>
          )}
        </Container>
      );
    }

    static defaultProps = {
      cancelButtonText: "Cancel",
      saveButtonText: "Save"
    };

    static propTypes = {
      ...protectedValueProps,
      ...formInputProps
    };
  };
};
