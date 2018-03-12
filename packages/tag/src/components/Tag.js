import React from "react";
import PropTypes from "prop-types";

import StyledTag from "./styledComponent/StyledTag";

const Tag = props => {
  const { text, onRemove } = props;
  return (
    <StyledTag {...props}>
      {text}
      {onRemove && (
        <div className="icon" onClick={onRemove}>
          <i className="wg-close" />
        </div>
      )}
    </StyledTag>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func
};

export default Tag;
