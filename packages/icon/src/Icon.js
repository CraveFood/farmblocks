/* eslint-disable react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const IconWrapper = styled.span`
  display: inline-block;
  vertical-align: text-bottom;
  .farmblocks-icon {
    display: block;
  }
`;

IconWrapper.propTypes = {
  /**
   * A valid CSS color. E.g. `"hotpink"`, `"#FF0"`, `"rgba(255, 0, 0, 0.3)"`
   */
  color: PropTypes.string,

  /**
   * A valid CSS font-size. E.g. `"10vw"`, `"100px"`, `100`
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Use this when the icon isn't paired with a text label.
   * All the icon components have a default `aria-hidden="true"`.
   * By setting a label, the hidden prop will change to `false` automatically.
   */
  "aria-label": PropTypes.string,
};
IconWrapper.defaultProps = {
  color: "currentColor",
  size: "1em",
};

export const withWrapper = (Icon) =>
  // eslint-disable-next-line react/prop-types
  React.forwardRef(({ className = "", ...props }, ref) => (
    <IconWrapper>
      <Icon ref={ref} {...props} className={`farmblocks-icon ${className}`} />
    </IconWrapper>
  ));

export default withWrapper(() => <>Use destructuring to import the icons.</>);
