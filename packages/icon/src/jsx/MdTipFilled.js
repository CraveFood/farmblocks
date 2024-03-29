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
      d="M23.698 23a1 1 0 0 1-1 1h-5.796a1 1 0 0 1-1-1c0-1.671-.48-2.7-1.735-4.281-.017-.023-.417-.523-.533-.67-1.254-1.601-1.767-2.795-1.61-4.524C12.356 9.871 15.232 7 20.001 7c4.783 0 7.65 2.754 7.976 6.36.158 1.738-.407 2.954-1.768 4.587-.132.16-.6.71-.596.705-1.388 1.641-1.915 2.688-1.915 4.348ZM17 26a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6Zm0 2a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6Zm0 2a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6Z"
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
const MdTipFilled = withWrapper(Vector);
MdTipFilled.groupName = "Misc";
export default MdTipFilled;
