import React from "react";
import PropTypes from "prop-types";

const MdFavoriteHeartEmpty = React.forwardRef(
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
        d="M20 28.947l8.236-7.71.164-.156a10.936 10.936 0 0 0 1.253-1.449C30.502 18.456 31 17.247 31 16.095 31 12.844 29.062 11 25.598 11c-1.595 0-3.343 1.034-4.905 2.534a1 1 0 0 1-1.386 0c-1.562-1.5-3.31-2.534-4.905-2.534C10.938 11 9 12.844 9 16.094c0 1.131.48 2.319 1.302 3.475.518.73 1.092 1.335 1.436 1.629L20 28.948zM25.598 9C30.145 9 33 11.716 33 16.094c0 1.638-.652 3.22-1.724 4.708a12.92 12.92 0 0 1-1.66 1.881l-8.33 7.8c-.346.337-.81.517-1.286.517s-.94-.18-1.273-.505l-8.321-7.806c-.427-.363-1.113-1.086-1.735-1.962C7.631 19.262 7 17.704 7 16.094 7 11.716 9.855 9 14.402 9c1.981 0 3.874.98 5.598 2.461C21.724 9.98 23.617 9 25.598 9z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdFavoriteHeartEmpty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdFavoriteHeartEmpty.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdFavoriteHeartEmpty.groupName = "Actions";
export default MdFavoriteHeartEmpty;
