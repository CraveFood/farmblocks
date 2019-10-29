import React from "react";
import PropTypes from "prop-types";

const MdPhoto = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M19 11V9a1 1 0 0 1 2 0v2h9.08A2.92 2.92 0 0 1 33 13.92v14.16A2.92 2.92 0 0 1 30.08 31H9.92a2.92 2.92 0 0 1-2.92-2.92V13.92A2.92 2.92 0 0 1 9.92 11H19zm12 11.417V13.92a.92.92 0 0 0-.92-.92H9.92a.92.92 0 0 0-.92.92v14.2l6.716-7.015a2.33 2.33 0 0 1 3.273-.09l3.828 3.64 3.399-3.551a2.329 2.329 0 0 1 3.266-.096L31 22.417zm0 2.047l-2.537-2.357a.829.829 0 0 0-1.162.034l-3.396 3.547.808.768a.75.75 0 1 1-1.034 1.088l-5.717-5.436a.828.828 0 0 0-1.161.034L10.235 29h19.844a.92.92 0 0 0 .921-.92v-3.616zM11.75 17.5a1.25 1.25 0 1 0 2.501-.001 1.25 1.25 0 0 0-2.501.001zm-1.5 0a2.75 2.75 0 1 1 5.501.001 2.75 2.75 0 0 1-5.501-.001z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdPhoto.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdPhoto.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdPhoto.groupName = "Actions";
export default MdPhoto;
