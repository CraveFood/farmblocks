import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

import ScrollWrapper from "./styledComponents/ScrollWrapper";

export default class ScrollBox extends React.Component {
  state = {
    atEnd: false
  };

  componentDidMount = () => {
    this.wrapper.addEventListener("scroll", this.onScroll);
  };
  componentWillUnmount = () => {
    this.wrapper.removeEventListener("scroll", this.onScroll);
  };

  centerChildByIndex = index => {
    const element = this.wrapper.childNodes[index];
    if (!element) return;
    const elementCenter = element.offsetTop + element.clientHeight / 2;
    this.wrapper.scrollTop =
      elementCenter - this.wrapper.offsetTop - this.wrapper.clientHeight / 2;
  };

  onScroll = debounce(() => {
    const reachEnd =
      this.wrapper.scrollHeight -
        this.wrapper.scrollTop -
        this.wrapper.clientHeight <
      this.wrapper.clientHeight / 2;
    if (reachEnd) {
      this.setState(prevState => {
        if (!prevState.atEnd) this.props.onReachEnd();
        return { atEnd: true };
      });
    } else {
      this.setState({ atEnd: false });
    }
  }, 300);

  render() {
    const { children, maxHeight } = this.props;
    return (
      <ScrollWrapper
        style={{ maxHeight }}
        innerRef={node => (this.wrapper = node)}
      >
        {children}
      </ScrollWrapper>
    );
  }

  static defaultProps = {
    onReachEnd: () => false
  };

  static propTypes = {
    children: PropTypes.node,
    maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onReachEnd: PropTypes.func
  };
}
