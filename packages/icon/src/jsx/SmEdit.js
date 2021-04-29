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
      d="M15.231 3.293a1 1 0 011.32-.084l.094.084 4.062 4.062a1 1 0 01.083 1.32l-.083.094-10.462 10.462a1 1 0 01-.325.217l-.124.042-5.539 1.476a1 1 0 01-1.247-1.113l.024-.111 1.476-5.538a1 1 0 01.173-.35l.087-.099L15.23 3.293zM13.23 8.12l-6.857 6.858-.962 3.609 3.61-.962 6.857-6.857L13.23 8.12zm2.708-2.708l-1.294 1.294 2.648 2.648 1.293-1.294-2.647-2.648z"
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
const SmEdit = withWrapper(Vector);
SmEdit.groupName = "Actions";
export default SmEdit;
