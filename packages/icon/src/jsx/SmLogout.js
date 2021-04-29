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
      d="M16.053 2a2.474 2.474 0 012.468 2.311l.005.163v.776a1 1 0 01-1.993.116l-.007-.116v-.776a.474.474 0 00-.388-.466L16.053 4h-9.58a.474.474 0 00-.465.389L6 4.474v15.052c0 .233.168.426.389.466l.085.008h9.579a.474.474 0 00.466-.389l.007-.085v-.706a1 1 0 011.994-.116l.006.116v.706a2.474 2.474 0 01-2.31 2.469l-.163.005h-9.58a2.474 2.474 0 01-2.468-2.311L4 19.526V4.474a2.474 2.474 0 012.311-2.469L6.474 2h9.579zm-.44 5.21l.094.083 4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L16.585 13H10.5a1 1 0 01-.117-1.993L10.5 11h6.085l-2.292-2.293a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083z"
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
const SmLogout = withWrapper(Vector);
SmLogout.groupName = "Actions";
export default SmLogout;
