import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FormWrapperHeader from "./FormWrapperHeader";
import FormWrapperFooter from "./FormWrapperFooter";

export const Body = styled.div`
  padding: 16px 16px 0 16px;
`;

const FormWrapper = (props) => {
  const {
    title,
    extraContent,
    id,
    saveButtonProps,
    onCancel,
    cancelLabel,
    onSave,
    loading,
    saveLabel,
    children,
    className,
  } = props;

  return (
    <div className={className} id={id}>
      <FormWrapperHeader
        id={id}
        title={title}
        onCancel={onCancel}
        cancelLabel={cancelLabel}
      />
      <Body className="body">{children}</Body>
      <FormWrapperFooter
        id={id}
        onSave={onSave}
        loading={loading}
        saveButtonProps={saveButtonProps}
        saveLabel={saveLabel}
      />
      {extraContent}
    </div>
  );
};

FormWrapper.defaultProps = {
  ...FormWrapperFooter.defaulProps,
  ...FormWrapperHeader.defaulProps,
  id: "form-wrapper",
};

FormWrapper.propTypes = {
  ...FormWrapperHeader.propTypes,
  ...FormWrapperFooter.propTypes,
  children: PropTypes.node.isRequired,
  extraContent: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default FormWrapper;
