import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import values from "object.values";
import Tooltip, { alignments } from "@crave/farmblocks-tooltip";

const Container = styled.div`
  display: inline-block;
  width: ${props => props.width};
`;

class Popover extends React.Component {
  state = {
    isVisible: false
  };

  componentDidMount() {
    document.addEventListener("click", this.handleOuterClick, {
      capture: true
    });
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOuterClick, {
      capture: true
    });
  }

  handleOuterClick = event => {
    if (this.popover.contains(event.target)) {
      return;
    }

    if (this.state.isVisible) {
      this.hide();
      this.props.onOutsideClick?.(event);
    }
  };

  toggle = async () => {
    const isVisible = !this.state.isVisible;
    const { onOpen, onClose } = this.props;

    try {
      isVisible && (await this.props.onBeforeOpen?.());
    } catch (e) {
      return;
    }
    isVisible ? onOpen?.() : onClose?.();

    this.setState({ isVisible });
  };

  hide = () => {
    this.setState({ isVisible: false });
    this.props.onClose && this.props.onClose();
  };

  render() {
    const { trigger } = this.props;
    const { isVisible } = this.state;
    return (
      <Container
        ref={popover => (this.popover = popover)}
        width={this.props.triggerWidth}
      >
        <div id="trigger" onClick={this.toggle}>
          {typeof trigger === "function" ? trigger(isVisible) : trigger}
        </div>

        <Tooltip
          isVisible={isVisible}
          hideArrow={!this.props.showTooltipArrow}
          align={this.props.align}
          zIndex={this.props.zIndex}
          padding={this.props.padding}
          overflow={this.props.overflow}
        >
          {this.state.isVisible && this.props.content(this.hide)}
        </Tooltip>
      </Container>
    );
  }

  static propTypes = {
    trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    content: PropTypes.func.isRequired,
    align: PropTypes.oneOf(values(alignments)),
    zIndex: PropTypes.number,
    padding: PropTypes.string,
    overflow: PropTypes.string,
    triggerWidth: PropTypes.string,
    onOutsideClick: PropTypes.func,
    onOpen: PropTypes.func,
    onBeforeOpen: PropTypes.func,
    onClose: PropTypes.func,
    showTooltipArrow: PropTypes.bool
  };

  static defaultProps = {
    triggerWidth: "auto",
    showTooltipArrow: false
  };
}

export default Popover;
