import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

import ScrollWrapper from "./styledComponents/ScrollWrapper";

export default class ScrollBox extends React.Component {
  componentDidMount = () => {
    this.scroller.addEventListener("scroll", this.onScroll);
  };
  componentWillUnmount = () => {
    this.scroller.removeEventListener("scroll", this.onScroll);
  };

  onScroll = debounce(event => {
    const reachEnd =
      this.scroller.scrollHeight -
        this.scroller.scrollTop -
        this.scroller.clientHeight <
      this.scroller.clientHeight / 2;
    if (reachEnd) this.props.onReachEnd(event);
  }, 300);

  render() {
    const { children, maxHeight } = this.props;
    return (
      <ScrollWrapper
        style={{ maxHeight }}
        innerRef={node => (this.scroller = node)}
      >
        {children}
      </ScrollWrapper>
    );
  }

  static propTypes = {
    children: PropTypes.node,
    maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onReachEnd: PropTypes.func
  };
}
