import React from "react";
import PropTypes from "prop-types";

import StyledTag from "./styledComponent/StyledTag";

const Tag = props => {
  const { text, onRemove, value } = props;
  return (
    <StyledTag {...props}>
      {text}
      {onRemove && (
        <div className="icon" onClick={onRemove(value)}>
          <i className="wg-close" />
        </div>
      )}
    </StyledTag>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
  value: PropTypes.any
};

export default Tag;
