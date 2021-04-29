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
      d="M17 25a1 1 0 000 2h12a1 1 0 000-2H17zm0-6a1 1 0 000 2h12a1 1 0 000-2H17zm0-6a1 1 0 000 2h12a1 1 0 000-2H17zm-6 12a1 1 0 000 2h1a1 1 0 000-2h-1zm0-6a1 1 0 000 2h1a1 1 0 000-2h-1zm0-6a1 1 0 000 2h1a1 1 0 000-2h-1z"
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
const MdList = withWrapper(Vector);
MdList.groupName = "Menu";
export default MdList;
