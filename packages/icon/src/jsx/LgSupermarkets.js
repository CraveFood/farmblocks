import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M35 80h14.5v-3a1 1 0 012 0v3H65v-9.431c0-.287-.317-.568-.764-.568H51.5V73.5a1 1 0 01-2 0V70H35.764c-.447 0-.764.283-.764.569V80zm-2 0v-9.431C33 69.122 34.262 68 35.764 68h14.698a1.018 1.018 0 01.076 0h13.698C65.739 68 67 69.122 67 70.569V80h17.405l-2.867-18.518a1.5 1.5 0 112.964-.459L87.44 80H89c2 0 2 3 0 3H11c-2 0-2-3 0-3h1.637l5.628-36.23a1.5 1.5 0 011.482-1.27h6.547V38c0-3.552 2.609-6.5 5.925-6.5h35.29c3.316 0 5.926 2.949 5.926 6.5v4.487a1142.301 1142.301 0 012.538-.018c1.254-.007 2.277-.01 2.99-.006.417.002.724.006.92.012.165.005.257.011.372.03.102.009.102.009.512.18.187.11.187.11.465.41.244.42.287.495.27.924l1.98 12.75a1.5 1.5 0 01-2.964.461L78.69 45.462c-.682-.002-1.602 0-2.7.007a892.978 892.978 0 00-4.04.03A1.5 1.5 0 0170.435 44v-6c0-1.97-1.354-3.5-2.925-3.5H32.22c-1.573 0-2.926 1.529-2.926 3.5v6a1.5 1.5 0 01-1.5 1.5h-6.762L15.673 80H33zm2.25-38v-1.082a1 1 0 112 0V42h17.117a1 1 0 110 2H33a1 1 0 01-1-1v-5a1 1 0 011-1h34a1 1 0 011 1v5a1 1 0 01-1 1h-8.943a1 1 0 110-2H66v-3H34v3h1.25zM58 50v8h9v-8h-9zm-2 0H44v8h12v-8zm13 0v8h6.897l-.785-8H69zm-27 0h-9v8h9v-8zm-11 0h-6.112l-.785 8H31v-8zm-8.013-1.098a1 1 0 01.995-.902h52.036a1 1 0 01.995.902l.982 10A1 1 0 0177 60H23a1 1 0 01-.995-1.098l.982-10zm56.76-6.384l-.354.114c-.05.018-.092.033-.128.05.146-.08.308-.136.481-.164z"
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
const LgSupermarkets = withWrapper(Vector);
LgSupermarkets.groupName = "Business";
export default LgSupermarkets;
