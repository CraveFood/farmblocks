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
      d="M16.798 3a3 3 0 012.552 1.423l.097.17 1.436 2.702a1 1 0 01.11.347l.007.122V10a1 1 0 01-.883.993L20 11h-1v4a1 1 0 01.117 1.993L19 17v2h1a1 1 0 01.117 1.993L20 21H4a1 1 0 01-.117-1.993L4 19h.999v-2l-.116-.007a1 1 0 010-1.986L5 15 5 11H4a1 1 0 01-.993-.883L3 10V7.764a1 1 0 01.066-.357l.05-.112 1.437-2.703a3 3 0 012.454-1.586L7.202 3h9.596zM17 17H7v2h10v-2zm0-6H7v4h10v-4zM7.718 5h-.516a1 1 0 00-.82.427l-.063.104L5 8.013V9h2V8l.007-.122.023-.12L7.718 5zm6.5 0H13v4h1.999v-.878L14.218 5zM11 5H9.781l-.782 3.126V9H11V5zm5.798 0h-.517l.69 2.757.022.12L17 8v1h2v-.985l-1.32-2.484a1 1 0 00-.642-.502l-.118-.022L16.798 5z"
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
const SmMarket = withWrapper(Vector);
SmMarket.groupName = "Business";
export default SmMarket;
