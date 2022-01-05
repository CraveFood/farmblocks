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
      d="M24.538 31.88a.996.996 0 0 1-.475.12H10a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h13.313a1 1 0 0 1 .666.254l4.687 4.183a1 1 0 0 1 .334.746v11.52a1.994 1.994 0 0 0-2.414.318A1.994 1.994 0 0 0 26 24.436v3.12c-.372-.4-.87-.613-1.377-.635a1.994 1.994 0 0 0-1.438.524 1.994 1.994 0 0 0-.647 1.388c-.022.51.151 1.03.524 1.438l1.476 1.61Zm-6.287-7.936a.762.762 0 0 1-.001-.044V19a.75.75 0 0 1 .75-.75h4.944a5.001 5.001 0 1 0-5.693 5.694Zm5.693-4.194H19.75v4.15l-.001.044a5.004 5.004 0 0 0 4.195-4.194Zm4.96 13.442a1 1 0 0 1-1.808 0L23.8 29.595a1 1 0 1 1 1.475-1.351L27 30.127v-5.691a1 1 0 1 1 2 0v5.691l1.726-1.883a1 1 0 1 1 1.475 1.351l-3.297 3.597Z"
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
