import React from "react";
import PropTypes from "prop-types";

import StyledTag from "./styledComponent/StyledTag";

const RemovableTags = props => {
  const { text, removable, onRemove } = props;
  return (
    <StyledTag {...props}>
      {text}
      {removable && (
        <div className="icon" onClick={onRemove}>
          <i className="wg-close" />
        </div>
      )}
    </StyledTag>
  );
};

RemovableTags.propTypes = {
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
  removable: PropTypes.bool
};

RemovableTags.defaultProps = {
  onRemove: () => null,
  removable: true
};

export default RemovableTags;
