import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import values from "object.values";
import Tooltip, { alignments } from "@crave/farmblocks-tooltip";

const Container = styled.div`display: inline-block;`;

class Popover extends React.Component {
  state = {
    isVisible: false
  };

  componentDidMount() {
    document.addEventListener("click", this.handleOuterClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOuterClick);
  }

  handleOuterClick = event => {
    if (this.popover.contains(event.target)) {
      return;
    }

    this.hide();
  };

  toggle = () => {
    this.setState((prevState, props) => ({ isVisible: !prevState.isVisible }));
  };

  hide = () => this.setState({ isVisible: false });

  render() {
    return (
      <Container innerRef={popover => (this.popover = popover)}>
        <div id="trigger" onClick={this.toggle}>
          {this.props.trigger}
        </div>

        <Tooltip
          isVisible={this.state.isVisible}
          hideArrow
          align={this.props.align}
          zIndex={this.props.zIndex}
          padding={this.props.padding}
        >
          {this.props.content(this.hide)}
        </Tooltip>
      </Container>
    );
  }

  static propTypes = {
    trigger: PropTypes.node.isRequired,
    content: PropTypes.func.isRequired,
    align: PropTypes.oneOf(values(alignments)),
    zIndex: PropTypes.number,
    padding: PropTypes.string
  };
}

export default Popover;
