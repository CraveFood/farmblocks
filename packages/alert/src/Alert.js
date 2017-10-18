//@flow
import * as React from "react";

import Container from "./styledComponents/Container";
import DismissButton from "./styledComponents/DismissButton";
import type { AlertType } from "./constants/alertTypes";
import { NEWS } from "./constants/alertTypes";

// @FIXME Dismissbutton should be a Actionable > Neutral Off Icon Actionable (button component?)
// imported from a different farm block, and the X probably an icon and not text.
/// see issue #24

type Props = {
  text: string,
  type?: AlertType,
  dismissable?: boolean,
  onDismiss?: Function
};

class Alert extends React.Component<Props> {
  render(): React.Node {
    return (
      <Container type={this.props.type}>
        <p>{this.props.text}</p>

        {this.props.dismissable && (
          <DismissButton onClick={this.props.onDismiss}>X</DismissButton>
        )}
      </Container>
    );
  }

  static defaultProps = {
    type: NEWS,
    dismissable: true,
    onDismiss: () => null
  };
}

export default Alert;
