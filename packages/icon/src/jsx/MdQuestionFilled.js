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
      d="M33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-13.505 4.408c-1.051 0-1.829.776-1.829 1.785v.042c0 1.01.778 1.787 1.829 1.787 1.05 0 1.827-.778 1.827-1.787v-.042c0-1.009-.776-1.785-1.827-1.785zm0-1.387h.168c.608 0 1.049-.482 1.133-1.028l.063-.379C23.15 21.152 25 20.06 25 17.391v-.042C25 14.555 22.94 13 19.915 13c-1.848 0-3.256.589-4.37 1.513A1.467 1.467 0 0015 15.648c0 .797.67 1.47 1.468 1.47.359 0 .695-.147.947-.336.755-.568 1.533-.84 2.437-.84 1.217 0 1.934.547 1.934 1.491v.042c0 1.03-.843 1.598-2.67 1.827-.672.084-1.07.568-.967 1.261l.212 1.43c.083.566.524 1.028 1.134 1.028z"
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
const MdQuestionFilled = withWrapper(Vector);
MdQuestionFilled.groupName = "States";
export default MdQuestionFilled;
