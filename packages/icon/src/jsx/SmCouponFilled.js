import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M10.43 2.56a2.357 2.357 0 0 1 2.995-.119l.145.12 1.302 1.162a.357.357 0 0 0 .18.086l.068.005 1.745-.054a2.357 2.357 0 0 1 2.376 1.858l.029.16.25 1.727c.01.068.04.131.083.183l.05.047 1.37 1.08c.895.705 1.151 1.94.633 2.937l-.088.155-.918 1.484a.357.357 0 0 0-.054.193l.008.068.355 1.708a2.357 2.357 0 0 1-1.417 2.663l-.152.056-1.658.546a.357.357 0 0 0-.165.114l-.038.057-.826 1.537a2.357 2.357 0 0 1-2.79 1.131l-.16-.057-1.62-.647a.357.357 0 0 0-.2-.02l-.065.02-1.621.647a2.357 2.357 0 0 1-2.865-.927l-.085-.147-.826-1.537a.357.357 0 0 0-.14-.143l-.063-.028-1.658-.546a2.357 2.357 0 0 1-1.597-2.559l.028-.16.355-1.708a.357.357 0 0 0-.016-.2l-.03-.061-.918-1.484A2.357 2.357 0 0 1 2.84 8.93l.136-.116 1.37-1.08a.357.357 0 0 0 .117-.164l.016-.066.25-1.727a2.357 2.357 0 0 1 2.243-2.017h.162l1.745.053a.357.357 0 0 0 .194-.05l.054-.04L10.43 2.56Zm3.496 10.554a1.5 1.5 0 1 1 1.149 2.77 1.5 1.5 0 0 1-1.149-2.77Zm1.781-4.821a1 1 0 0 1 .083 1.32l-.083.094-6 6a1 1 0 0 1-1.497-1.32l.083-.094 6-6a1 1 0 0 1 1.414 0Zm-6.78-.179a1.5 1.5 0 1 1 1.148 2.77 1.5 1.5 0 0 1-1.149-2.77Z"
      fill={color}
      fillRule="evenodd"
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
const SmCouponFilled = withWrapper(Vector);
SmCouponFilled.groupName = "Cart";
export default SmCouponFilled;
