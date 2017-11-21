import * as React from "react";
import PropTypes from "prop-types";

import linkTypes from "./constants/linkTypes"; 

import StyledLink from "./styledComponents/Link"
import Tooltip from "@crave/farmblocks-tooltip";
import { fontSizes } from "@crave/farmblocks-theme";
import Container from "./constants/Container";


export default class Link extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showTooltip: false
    };    
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeaves = this.mouseLeaves.bind(this);
  }
  
  render() {  
    const props = this.props;
    const showIconAddress = props.icon && props.address;
    const showIconExternal = props.icon && props.external;

    return (
      <Container>        
        {props.disabled && (
          <div
            className="hit-box-container"
            onMouseOver={this.mouseOver}
            onMouseLeave={this.mouseLeaves}
          />
        )}
        <StyledLink {...props} />
        {showIconAddress && (
          <div className="icon">            
          </div>
        )}
        <Tooltip
            text="This action is disabled."
            isVisible={this.state.showTooltip}
        />
      </Container>
    )
  }

  mouseOver() {
    if (this.props.disabled) {
      this.setState({
        showTooltip: true
      });
    }
  }
  
  mouseLeaves() {
    if (this.props.disabled) {
      this.setState({
        showTooltip: false
      });
    }
  }

  static PropTypes = {
    type: PropTypes.oneOf(Object.values(linkTypes)),
    align: PropTypes.oneOf(["left", "right"]),
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    external: PropTypes.bool,
    address: PropTypes.bool,
    size: PropTypes.number,
    lineHeight: PropTypes.number
  }

  static defaultProps = {
    type: linkTypes.PRIMARY,
    align: "left",
    size: fontSizes.MEDIUM,
    lineHeight: 1,
    disabled: false
  }
  
}