import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text, { fontSizes } from "@crave/farmblocks-text";
import Link, { linkTypes } from "@crave/farmblocks-link";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";
import { colors } from "@crave/farmblocks-theme";

const Header = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  border-bottom: 1px solid ${colors.GREY_16};

  .title {
    margin-left: 16px;
  }

  .cancel {
    margin-left: auto;
    margin-right: 16px;
  }
`;

const Body = styled.div`
  padding: 16px 16px 0 16px;
`;

const Footer = styled.div`
  padding: 16px;
  border-top: 1px solid ${colors.GREY_16};
`;

const FormPopover = props => {
  const { title, extraContent } = props;
  return (
    <div>
      <Header>
        {title && (
          <Text title size={fontSizes.MEDIUM} className="title">
            {title}
          </Text>
        )}
        <Link
          type={linkTypes.NEUTRAL}
          onClick={props.onCancel}
          className="cancel"
        >
          {props.cancelLabel}
        </Link>
      </Header>

      <Body>{props.children}</Body>

      <Footer>
        <Button
          fluid
          type={buttonTypes.SECONDARY}
          size={buttonSizes.MEDIUM}
          onClick={props.onSave}
          loading={props.loading}
        >
          {props.saveLabel}
        </Button>
      </Footer>

      {extraContent && extraContent}
    </div>
  );
};

FormPopover.defaultProps = {
  cancelLabel: "Cancel",
  saveLabel: "Save Changes"
};

FormPopover.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  extraContent: PropTypes.node,
  title: PropTypes.string,
  cancelLabel: PropTypes.string,
  saveLabel: PropTypes.string,
  loading: PropTypes.bool
};

export default FormPopover;
