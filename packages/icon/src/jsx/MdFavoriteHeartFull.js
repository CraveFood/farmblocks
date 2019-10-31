import React from "react";
import PropTypes from "prop-types";

const MdFavoriteHeartFull = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      ref={ref}
      aria-hidden={!props["aria-label"]}
      {...props}
    >
      <path
        d="M25.598 9C30.145 9 33 11.716 33 16.094c0 1.638-.652 3.22-1.724 4.708a12.92 12.92 0 0 1-1.66 1.881l-8.33 7.8c-.346.337-.81.517-1.286.517s-.94-.18-1.273-.505l-8.321-7.806c-.427-.363-1.113-1.086-1.735-1.962C7.631 19.262 7 17.704 7 16.094 7 11.716 9.855 9 14.402 9c1.981 0 3.874.98 5.598 2.461C21.724 9.98 23.617 9 25.598 9zM14.79 11.202a5.5 5.5 0 0 0-5.5 5.5.5.5 0 1 0 1 0 4.5 4.5 0 0 1 4.5-4.5.5.5 0 0 0 0-1z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdFavoriteHeartFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdFavoriteHeartFull.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdFavoriteHeartFull.groupName = "Actions";
export default MdFavoriteHeartFull;
