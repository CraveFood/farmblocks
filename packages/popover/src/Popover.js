import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { TooltipContent } from "@crave/farmblocks-tooltip";

const Container = styled.div`
  display: inline-block;
  width: ${props => props.width};

  .appear-enter {
    opacity: 0;
  }

  .appear-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }

  .appear-exit {
    opacity: 1;
  }

  .appear-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-out;
  }
`;

class Popover extends React.Component {
  state = {
    isVisible: false,
  };

  componentDidMount() {
    document.addEventListener("click", this.handleOuterClick, {
      capture: true,
    });
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOuterClick, {
      capture: true,
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
    // eslint-disable-next-line react/no-access-state-in-setstate
    const isVisible = !this.state.isVisible;
    const { onOpen, onClose } = this.props;

    try {
      // eslint-disable-next-line babel/no-unused-expressions
      isVisible && (await this.props.onBeforeOpen?.());
    } catch (e) {
      return;
    }

    if (isVisible) {
      onOpen?.();
    } else {
      onClose?.();
    }

    this.setState({ isVisible });
  };

  hide = () => {
    this.setState({ isVisible: false });
    this.props.onClose?.();
  };

  render() {
    const { trigger } = this.props;
    const { isVisible } = this.state;
    return (
      <Container
        className={this.props.className}
        ref={popover => {
          this.popover = popover;
        }}
        width={this.props.triggerWidth}
      >
        <div
          role="button"
          id="trigger"
          onClick={this.toggle}
          onKeyDown={this.toggle}
          tabIndex="0"
        >
          {typeof trigger === "function" ? trigger(isVisible) : trigger}
        </div>

        <CSSTransition
          in={isVisible}
          mountOnEnter
          unmountOnExit
          timeout={200}
          classNames="appear"
        >
          <TooltipContent
            className="tooltip"
            isVisible
            hideArrow
            {...this.props.tooltipProps}
          >
            {this.props.content(this.hide)}
          </TooltipContent>
        </CSSTransition>
      </Container>
    );
  }

  static propTypes = {
    trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    content: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    tooltipProps: PropTypes.object,
    triggerWidth: PropTypes.string,
    onOutsideClick: PropTypes.func,
    onOpen: PropTypes.func,
    onBeforeOpen: PropTypes.func,
    onClose: PropTypes.func,
    className: PropTypes.string,
  };

  static defaultProps = {
    triggerWidth: "auto",
  };
}

export default Popover;
