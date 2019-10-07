import React from "react";
import PropTypes from "prop-types";
import Text, { fontSizes } from "@crave/farmblocks-text";
import Link, { linkTypes } from "@crave/farmblocks-link";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

export const Header = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.GREY_16};

  .title {
    margin-left: 16px;
  }

  .cancel {
    margin-left: 32px;
    margin-right: 16px;
  }
`;

const FormWrapperHeader = ({ cancelLabel, id, onCancel, title }) => (
  <Header className="header">
    <Text fontWeight="title" size={fontSizes.MEDIUM} className="title">
      {title}
    </Text>
    <Link
      id={`${id}-cancel`}
      type={linkTypes.NEUTRAL}
      onClick={onCancel}
      className="cancel"
    >
      {cancelLabel}
    </Link>
  </Header>
);

FormWrapperHeader.defaulProps = {
  cancelLabel: "Cancel",
};

FormWrapperHeader.propTypes = {
  cancelLabel: PropTypes.string,
  id: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default FormWrapperHeader;
