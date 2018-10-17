import React from "react";
import PropTypes from "prop-types";
import values from "object.values";

import StyledTag from "./styledComponent/StyledTag";
import tagTypes from "../constants/tagTypes";

const Tag = props => {
  const { text, onRemove, value, icon } = props;
  return (
    <StyledTag {...props}>
      {icon && (
        <div className="icon">
          <i className={icon} />
        </div>
      )}
      {text}
      {onRemove && (
        <div className="close-icon" onClick={() => onRemove(value)}>
          <i className="wg-close" />
        </div>
      )}
    </StyledTag>
  );
};

Tag.defaultProps = {
  type: tagTypes.SECONDARY
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
  value: PropTypes.any,
  type: PropTypes.oneOf(values(tagTypes)),
  icon: PropTypes.string
};

export default Tag;
