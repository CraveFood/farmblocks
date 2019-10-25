import React from "react";
import PropTypes from "prop-types";

const MdTwitter = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M31 20c0-6.074-4.926-11-11-11-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11zm2 0c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-6.844-3.313c-.343.5-.773.946-1.265 1.305a4.6 4.6 0 0 1 .007.328c0 3.336-2.539 7.18-7.18 7.18a7.13 7.13 0 0 1-3.874-1.133c.203.024.398.031.61.031 1.179 0 2.265-.398 3.132-1.078a2.528 2.528 0 0 1-2.36-1.75 2.668 2.668 0 0 0 1.14-.047 2.524 2.524 0 0 1-2.022-2.476v-.031c.336.187.726.304 1.14.32a2.522 2.522 0 0 1-.78-3.375 7.173 7.173 0 0 0 5.202 2.64 2.848 2.848 0 0 1-.062-.578 2.522 2.522 0 0 1 2.523-2.523c.727 0 1.383.305 1.844.797.57-.11 1.117-.32 1.602-.61a2.517 2.517 0 0 1-1.11 1.391 5.06 5.06 0 0 0 1.453-.39z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdTwitter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdTwitter.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdTwitter.groupName = "Social";
export default MdTwitter;
