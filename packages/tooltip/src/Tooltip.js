// @flow
import * as React from "react";

import { Container, StyledTooltip } from "./styledComponents/Tooltip";

type Props = {
  text: string,
  isVisible?: boolean
};
class Tooltip extends React.Component<Props> {
  render(): React.Node {
    return (
      <Container>
        <StyledTooltip {...this.props}>{this.props.text}</StyledTooltip>
      </Container>
    );
  }

  static defaultProps = {
    isVisible: true
  };
}

export default Tooltip;
