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
      d="M16.798 3a3 3 0 0 1 2.552 1.423l.097.17 1.436 2.702a1 1 0 0 1 .11.347l.007.122V10a1 1 0 0 1-.883.993L20 11h-1v4a1 1 0 0 1 .117 1.993L19 17v2h1a1 1 0 0 1 .117 1.993L20 21H4a1 1 0 0 1-.117-1.993L4 19h.999v-2l-.116-.007a1 1 0 0 1 0-1.986L5 15 5 11H4a1 1 0 0 1-.993-.883L3 10V7.764a1 1 0 0 1 .066-.357l.05-.112 1.437-2.703a3 3 0 0 1 2.454-1.586L7.202 3h9.596ZM17 11H7v4h10v-4ZM7.718 5h-.516a1 1 0 0 0-.82.427l-.063.104-1.312 2.468H7l.007-.121.023-.12L7.718 5ZM11 5H9.781l-.75 2.999H11V5Zm3.218 0H13v2.999h1.968L14.218 5Zm2.58 0h-.517l.69 2.757.022.12L17 8h1.992l-1.311-2.468a1 1 0 0 0-.643-.502l-.118-.022L16.798 5Z"
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
const SmMarketFilled = withWrapper(Vector);
SmMarketFilled.groupName = "Business";
export default SmMarketFilled;
