import React from "react";
import PropTypes from "prop-types";

const LgVendorProfile = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M36.294 70.61l6.927 4.158a1 1 0 0 1-1.03 1.714l-7.518-4.512-11.423 2.308.77 8.588a1.5 1.5 0 0 1-2.988.268l-.89-9.926a1.5 1.5 0 0 1 1.197-1.605l12.338-2.493 1.722-3.92a1.5 1.5 0 0 1 2.118-.698l12.484 7.146 12.484-7.146a1.5 1.5 0 0 1 2.119.699l1.722 3.92 12.338 2.492a1.5 1.5 0 0 1 1.196 1.605l-.89 9.926a1.5 1.5 0 1 1-2.988-.268l.77-8.588-11.783-2.381a1.5 1.5 0 0 1-1.077-.867l-1.364-3.106L51 74.523V82a1 1 0 0 1-2 0v-7.479l-11.526-6.597-1.18 2.687zm1.819-39.11H47a1 1 0 0 1 0 2h-9.524a1.498 1.498 0 0 1-.409.235l-13.73 5.22c.729.196 1.536.39 2.426.577C31.573 40.76 39.544 41.5 50 41.5c10.456 0 18.427-.74 24.237-1.968.89-.188 1.697-.38 2.426-.576l-13.73-5.22a1.5 1.5 0 0 1-.961-1.272L60.92 20.5H39.08l-.967 11zM65.5 43.84v8.088c0 8.104-5.93 11.913-15.5 11.913-9.567 0-15.5-3.81-15.5-11.913v-8.087c-3.565-.342-6.674-.807-9.357-1.373-2.14-.452-3.863-.94-5.209-1.435-.846-.31-1.396-.566-1.688-.736-1.091-.635-.959-2.25.22-2.7l16.656-6.332 1.09-12.396a1.5 1.5 0 0 1 1.494-1.369h24.588a1.5 1.5 0 0 1 1.494 1.369l1.09 12.396 16.655 6.333c1.18.448 1.312 2.064.221 2.699-.292.17-.842.425-1.688.736-1.346.494-3.07.983-5.21 1.435-2.682.566-5.791 1.031-9.356 1.373zm-28 .25v7.838c0 6.097 4.386 8.913 12.5 8.913 8.117 0 12.5-2.815 12.5-8.913v-7.837c-3.718.266-7.876.409-12.5.409s-8.782-.143-12.5-.41zM51 33.5a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2h-3zm-4.219 14.891a2.391 2.391 0 1 1-4.782 0 2.391 2.391 0 0 1 4.782 0zm11 0a2.391 2.391 0 1 1-4.782 0 2.391 2.391 0 0 1 4.782 0z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgVendorProfile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
LgVendorProfile.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgVendorProfile.groupName = "Menu";
export default LgVendorProfile;