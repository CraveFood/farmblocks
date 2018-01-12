import * as React from "react";
import PropTypes from "prop-types";
import { MenuItem } from "react-aria-menubutton";

import styled from "styled-components";
import { colors as colorConstants } from "@crave/farmblocks-theme";

const borderRadius = "3px";
const Wrapper = styled.li`
  cursor: pointer;

  transition: all ease 0.2s;

  :hover {
    background: ${colorConstants.INDIGO_MILK_CAP};
    color: white;
  }

  border-bottom: solid 1px ${colorConstants.GREY_16};

  &:first-child {
    border-top-right-radius: ${borderRadius};
    border-top-left-radius: ${borderRadius};
  }

  &:last-child {
    border-bottom-right-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
  }

  > div {
    padding: 14px;
  }
`;

const DropdownItem = props => {
  return (
    <Wrapper>
      <MenuItem value={props.value}>{props.text || props.children}</MenuItem>
    </Wrapper>
  );
};

DropdownItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string,
  children: PropTypes.node
};

export default DropdownItem;
