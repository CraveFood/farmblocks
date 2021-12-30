import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M11.388 25.3a1 1 0 0 1 .612.922v4.75l5.001-3.835a.996.996 0 0 1 .434-.192.998.998 0 0 1 .344-.032c.713.058 1.453.087 2.22.087C28.098 27 33 23.943 33 18.21 33 12.38 27.92 9 20 9S7 12.38 7 18.21c0 3.221 1.475 5.539 4.267 7.014.043.023.083.048.121.076ZM10 26.81c-3.222-1.828-5-4.748-5-8.6C5 11.063 11.107 7 20 7s15 4.062 15 11.21C35 25.298 29.062 29 20 29c-.704 0-1.388-.023-2.053-.068l-6.338 4.861A1 1 0 0 1 10 33v-6.19ZM14 16a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 3a.5.5 0 1 1 0-1h12a.5.5 0 1 1 0 1H14Zm0 3a.5.5 0 1 1 0-1h12a.5.5 0 1 1 0 1H14Z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
Vector.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
Vector.defaultProps = {
  color: "currentColor",
  size: "1em",
};
const MdMessages = withWrapper(Vector);
MdMessages.groupName = "Menu";
export default MdMessages;
