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
      d="M28 25a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2h16Zm0-6a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2h16Zm0-6a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2h16Z"
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
const MdViewList = withWrapper(Vector);
MdViewList.groupName = "Misc";
export default MdViewList;
