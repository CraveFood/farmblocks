import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Popover from "@crave/farmblocks-popover";
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
  padding: 16px;
`;

const Footer = styled.div`
  padding: 16px;
  border-top: 1px solid ${colors.GREY_16};
  .save {
  }
`;

class FormPopover extends React.Component {
  onSubmit = dismiss => event => {
    event.preventDefault();
    const formData = new window.FormData(this.form);
    dismiss();
    this.props.onSave(formData);
  };

  onCancel = dismiss => event => {
    event.preventDefault();
    dismiss();
    this.props.onCancel();
  };

  render = () => {
    const {
      trigger,
      content,
      formData,
      title,
      cancelLabel,
      saveLabel
    } = this.props;
    return (
      <Popover
        padding="0"
        trigger={trigger}
        content={dismiss => {
          return (
            <form
              onSubmit={this.onSubmit}
              ref={element => {
                this.form = element;
              }}
            >
              <Header>
                {title && (
                  <div className="title">
                    <Text title size={fontSizes.MEDIUM}>
                      {title}
                    </Text>
                  </div>
                )}
                <div className="cancel">
                  <Link
                    type={linkTypes.NEUTRAL}
                    onClick={this.onCancel(dismiss)}
                  >
                    {cancelLabel}
                  </Link>
                </div>
              </Header>
              <Body>{content(formData)}</Body>
              <Footer>
                <Button
                  fluid
                  type={buttonTypes.SECONDARY}
                  size={buttonSizes.MEDIUM}
                  onClick={this.onSubmit(dismiss)}
                >
                  {saveLabel}
                </Button>
              </Footer>
            </form>
          );
        }}
      />
    );
  };

  static defaultProps = {
    formData: new window.FormData(),
    content: () => null,
    onCancel: () => null,
    onSave: () => null,
    trigger: <div>open</div>,
    cancelLabel: "Cancel",
    saveLabel: "Save Changes"
  };

  static propTypes = {
    formData: PropTypes.instanceOf(window.FormData),
    content: PropTypes.func,
    onCancel: PropTypes.func,
    onSave: PropTypes.func,
    trigger: PropTypes.node,
    title: PropTypes.string,
    cancelLabel: PropTypes.string,
    saveLabel: PropTypes.string
  };
}

export default FormPopover;
