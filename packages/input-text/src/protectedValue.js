import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { formInputProps } from "@crave/farmblocks-hoc-input";

import ProtectedCover from "./ProtectedCover";

const Container = styled.div`
  position: relative;

  > :first-child {
    flex-grow: 1;
  }
`;

// extra properties supported/extended by the protected field HOC
export const protectedValueProps = {
  protected: PropTypes.bool,
  onUncover: PropTypes.func,
  onKeyDown: PropTypes.func,
};

// HOC that covers a component with a dummy text field
// until the edit button is clicked
export default WrappedComponent => {
  return class ProtectedInput extends React.Component {
    static propTypes = {
      ...protectedValueProps,
      ...formInputProps,
    };

    state = {
      isEditing: false,
      value: this.props.value,
      editedValue: "",
    };

    componentDidUpdate = prevProps => {
      if (this.props.value !== prevProps.value) {
        this.setState({
          value: this.props.value,
        });
      }
    };

    onUncover = () => {
      this.setState({ isEditing: true, editedValue: "" });
      this.props.onUncover?.();
    };

    onCancel = () => {
      this.setState({ isEditing: false, editedValue: "" });
    };

    onReplace = value => {
      this.setState({ value, isEditing: false, editedValue: "" });
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
      this.props.onKeyDown?.(evt);
    };

    render() {
      const {
        protected: covered,
        onKeyDown,
        onUncover,
        cancelButtonText,
        saveButtonText,
        focused,
        ...wrappedComponentProps
      } = this.props;
      const { isEditing } = this.state;

      return (
        <Container>
          <WrappedComponent
            {...wrappedComponentProps}
            protected={covered}
            focused={covered ? this.state.isEditing : focused}
            value={isEditing ? this.state.editedValue : this.state.value}
            onKeyDown={this.onKeyDown}
            onChange={event => {
              this.setState({ editedValue: event.target.value });
              this.props.onChange?.(event);
            }}
            onBlur={event => {
              if (covered && isEditing) {
                this.onCancel();
              }
              this.props.onBlur?.(event);
            }}
          />

          {covered && !isEditing && (
            <ProtectedCover
              prefix={wrappedComponentProps.prefix}
              value={this.state.value}
              disabled={this.props.disabled}
              handleEditClick={this.onUncover}
              label={wrappedComponentProps.label}
              validationMessages={wrappedComponentProps.validationMessages}
              invalid={wrappedComponentProps.invalid}
            />
          )}
        </Container>
      );
    }
  };
};
