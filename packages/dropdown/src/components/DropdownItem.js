import * as React from "react";
import PropTypes from "prop-types";
import { MenuItem } from "react-aria-menubutton";

import DropdownItemWrapper from "../styledComponents/DropdownItemWrapper";

const DropdownItem = (props) => {
  const { value, text, children, ...rest } = props;
  return (
    <DropdownItemWrapper {...rest}>
      <MenuItem value={value}>{text || children}</MenuItem>
    </DropdownItemWrapper>
  );
};

DropdownItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string,
  footer: PropTypes.bool,
  children: PropTypes.node,
};

export default DropdownItem;
