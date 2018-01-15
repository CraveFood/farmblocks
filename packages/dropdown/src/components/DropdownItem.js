import * as React from "react";
import PropTypes from "prop-types";
import { MenuItem } from "react-aria-menubutton";

import DropdownItemWrapper from "../styledComponents/DropdownItemWrapper";

const DropdownItem = props => {
  return (
    <DropdownItemWrapper>
      <MenuItem value={props.value}>{props.text || props.children}</MenuItem>
    </DropdownItemWrapper>
  );
};

DropdownItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string,
  children: PropTypes.node
};

export default DropdownItem;
