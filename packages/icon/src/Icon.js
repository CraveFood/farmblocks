/* eslint-disable react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";

const Icon = () => <span>Use destructuring to import the icons.</span>;
Icon.propTypes = {
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
Icon.defaultProps = {
  color: "currentColor",
  size: "1em",
};

export default Icon;
