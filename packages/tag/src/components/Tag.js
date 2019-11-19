import React from "react";
import PropTypes from "prop-types";
import values from "object.values";
import { MdRemove } from "@crave/farmblocks-icon";

import StyledTag from "./styledComponent/StyledTag";
import tagTypes from "../constants/tagTypes";

const Tag = ({
  text,
  onRemove,
  value,
  icon,
  disabled,
  children,
  ...wrapperProps
}) => {
  return (
    <StyledTag disabled={disabled} removable={!!onRemove} {...wrapperProps}>
      {icon && <div className="icon">{icon}</div>}
      {text || children}
      {onRemove && !disabled && (
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
          <MdRemove />
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
  icon: PropTypes.node,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

export default Tag;
