import React from "react";
import PropTypes from "prop-types";

const MdProducts = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M10.81 21.437l12.435 8.388 7.44-11.03c.292-.433.404-.962.313-1.475l-1.382-7.786-.012-.058a1.996 1.996 0 0 0-2.368-1.546L19.5 9.564c-.51.108-.958.41-1.25.843l-7.44 11.03zm-.561.832l-1.111 1.647c-.62.918-.38 2.163.536 2.781l9.12 6.151c.915.618 2.16.374 2.78-.544l1.11-1.648L10.25 22.27zM19.09 7.604l7.737-1.635a3.992 3.992 0 0 1 4.736 3.093l.023.117 1.382 7.786a4.018 4.018 0 0 1-.626 2.948l-9.112 13.51a4.006 4.006 0 0 1-5.56 1.088L8.553 28.36a4.006 4.006 0 0 1-1.072-5.563L16.59 9.288a4.018 4.018 0 0 1 2.5-1.684zm5.238 7.202a2.003 2.003 0 0 1-.537-2.78 2.003 2.003 0 0 1 2.78-.545 2.003 2.003 0 0 1 .536 2.78 2.003 2.003 0 0 1-2.78.545z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdProducts.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdProducts.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdProducts.groupName = "Menu";
export default MdProducts;
