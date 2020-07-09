import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M24.538 31.88a.996.996 0 01-.475.12H10a1 1 0 01-1-1V7a1 1 0 011-1h13.313a1 1 0 01.666.254l4.687 4.183a1 1 0 01.334.746v11.52a1.994 1.994 0 00-2.414.318A1.994 1.994 0 0026 24.436v3.12c-.372-.4-.87-.613-1.377-.635a1.994 1.994 0 00-1.438.524 1.994 1.994 0 00-.647 1.388c-.022.51.151 1.03.524 1.438l1.476 1.61zm-6.287-7.936a.762.762 0 01-.001-.044V19a.75.75 0 01.75-.75h4.944a5.001 5.001 0 10-5.693 5.694zm5.693-4.194H19.75v4.15l-.001.044a5.004 5.004 0 004.195-4.194zm4.96 13.442a1 1 0 01-1.808 0L23.8 29.595a1 1 0 111.475-1.351L27 30.127v-5.691a1 1 0 112 0v5.691l1.726-1.883a1 1 0 111.475 1.351l-3.297 3.597z"
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
const MdReportFilled = withWrapper(Vector);
MdReportFilled.groupName = "Docs";
export default MdReportFilled;
