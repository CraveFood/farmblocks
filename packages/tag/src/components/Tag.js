import React from "react";
import PropTypes from "prop-types";
import values from "object.values";

import StyledTag from "./styledComponent/StyledTag";
import tagTypes from "../constants/tagTypes";

const Tag = props => {
  const { text, onRemove, value } = props;
  return (
    <StyledTag {...props}>
      {text}
      {onRemove && (
        <div className="icon" onClick={() => onRemove(value)}>
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
  type: PropTypes.oneOf(values(tagTypes))
};

export default Tag;
