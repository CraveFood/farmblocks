import React from "react";
import PropTypes from "prop-types";
import values from "object.values";

import StyledTag from "./styledComponent/StyledTag";
import tagTypes from "../constants/tagTypes";

const Tag = props => {
  const { text, onRemove, value, icon, children } = props;
  return (
    <StyledTag {...props}>
      {icon && (
        <div className="icon">
          <i className={icon} />
        </div>
      )}
      {text || children}
      {onRemove && (
        <div
          role="button"
          tabIndex="0"
          className="close-icon"
          onClick={() => onRemove(value)}
          onKeyDown={event => {
            if (event.key === "Enter" || event.key === " ") {
              onRemove(value);
            }
          }}
        >
          <i className="wg-close" />
        </div>
      )}
    </StyledTag>
  );
};

Tag.defaultProps = {
  type: tagTypes.SECONDARY,
};

Tag.propTypes = {
  text: PropTypes.string,
  onRemove: PropTypes.func,
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  type: PropTypes.oneOf(values(tagTypes)),
  icon: PropTypes.string,
  children: PropTypes.node,
};

export default Tag;
