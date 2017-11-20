import * as React from "react";
import PropTypes from "prop-types";

import linkTypes from "./constants/linkTypes"; 

import StyledLink from "./styledComponents/Link"


export default class Link extends React.Component {
    render() {
    const props = this.props;
    return <StyledLink {...props} />;    
  }

  static PropTypes = {
    type: PropTypes.oneOf(Object.values(linkTypes)),
    align: PropTypes.oneOf(["left", "right"]),
    icon: PropTypes.string,    
  }

  static defaultProps = {
    type: linkTypes.PRIMARY,
    align: "left"
  }
  
}