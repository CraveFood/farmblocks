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
      d="M12.05 21.499h-.1l-.123-.014-.097-.022-.124-.044-7.053-3.025-.08-.044-.088-.061-.082-.072-.085-.093-.072-.104-.065-.125-.028-.074-.03-.11-.018-.116L3 7.06v-.111a.986.986 0 0 1 .359-.72l.12-.083a.972.972 0 0 1 .119-.062l-.094.047.045-.024.049-.023 8.07-3.528.114-.032.085-.015.07-.007h.139l.135.02.08.021.109.04 8 3.5c.054.025.102.05.147.08.249.16.395.407.438.669l.013.122v.1l-1.004 10.54-.009.072-.039.155-.053.128-.052.09-.06.085-.099.106-.09.075-.095.062-.104.052-7.073 3.028-.134.036-.137.016ZM5.156 8.597l.783 8.217 5.06 2.169L11 15a1 1 0 0 1 1.993-.117L13 15v3.983l5.06-2.168.783-8.217-6.504 2.843-.109.032-.097.018-.09.008-.135-.003-.105-.015-.076-.02-.128-.045-6.443-2.82ZM12 4.59 6.496 7 12 9.409 17.504 7 12 4.59Z"
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
const SmPackSize = withWrapper(Vector);
SmPackSize.groupName = "Actions";
export default SmPackSize;
