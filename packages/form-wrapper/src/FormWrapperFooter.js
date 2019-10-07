import React from "react";
import PropTypes from "prop-types";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

export const Footer = styled.div`
  padding: 16px;
  border-top: 1px solid ${colors.GREY_16};
`;

const FormWrapperFooter = ({
  id,
  loading,
  onSave,
  saveButtonProps,
  saveLabel,
}) => (
  <Footer className="footer">
    <Button
      className="save"
      id={`${id}-save`}
      type={buttonTypes.SECONDARY}
      size={buttonSizes.MEDIUM}
      onClick={onSave}
      loading={loading}
      fluid
      {...saveButtonProps}
    >
      {saveLabel}
    </Button>
  </Footer>
);

FormWrapperFooter.defaulProps = {
  saveLabel: "Save",
};

FormWrapperFooter.propTypes = {
  id: PropTypes.string,
  loading: PropTypes.bool,
  onSave: PropTypes.func,
  saveButtonProps: PropTypes.object,
  saveLabel: PropTypes.string,
};

export default FormWrapperFooter;
