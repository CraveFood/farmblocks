import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button, { buttonSizes } from "@crave/farmblocks-button";
import {
  Button as AriaButtonWrapper,
  Wrapper as AriaWrapper,
  Menu
} from "react-aria-menubutton";

import { colors as colorConstants } from "@crave/farmblocks-theme";
const Wrapper = styled.div`
  font-family: lato, sans-serif;

  *:focus {
    outline: none;
  }

  display: inline-block;
  position: relative;
`;

const MenuWrapper = styled.div`
  margin-top: 16px;
  min-width: 100%;

  border: solid 1px ${colorConstants.GREY_16};
  border-radius: 4px;
  box-shadow: 0 4px 4px 0 ${colorConstants.GREY_16};

  background: white;

  position: absolute;
  right: ${props => props.align === "right" && 0};

  z-index: ${props => props.zIndex};

  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper align={this.props.align}>
        <AriaWrapper onSelection={this.props.handleSelection}>
          <AriaButtonWrapper>
            <Button
              rightIcon="wg-small-arrow-bottom"
              text={this.props.text}
              size={buttonSizes.MEDIUM}
            />
          </AriaButtonWrapper>

          <Menu>
            <MenuWrapper align={this.props.align} zIndex={this.props.zIndex}>
              <ul>{this.props.children}</ul>
            </MenuWrapper>
          </Menu>
        </AriaWrapper>
      </Wrapper>
    );
  }
}

Dropdown.defaultProps = {
  handleSelection: () => false,
  text: "",
  align: "left"
};

Dropdown.propTypes = {
  handleSelection: PropTypes.func,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  align: PropTypes.oneOf(["left", "right"]),
  zIndex: PropTypes.number
};

export default Dropdown;
