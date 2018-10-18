import * as React from "react";
import Tooltip from "@crave/farmblocks-tooltip";
import wrapDisplayName from "recompose/wrapDisplayName";

import styled from "styled-components";

const StyledDiv = styled.div`
  display: inline-block;
`;

const withTooltip = WrappedComponent => {
  return class extends React.Component {
    state = {
      tooltipVisible: false
    };

    hideTooltip = () => {
      this.setState({ tooltipVisible: false });
    };

    showTooltip = () => {
      this.setState({ tooltipVisible: true });
    };

    render() {
      return (
        <StyledDiv
          onMouseOver={this.showTooltip}
          onMouseLeave={this.hideTooltip}
        >
          <WrappedComponent />
          <Tooltip isVisible={this.state.tooltipVisible} />
        </StyledDiv>
      );
    }
    static displayName = wrapDisplayName(WrappedComponent, "withTooltip");
  };
};

export default withTooltip;
