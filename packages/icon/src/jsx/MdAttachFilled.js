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
      d="M33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13Zm-16.642.706-.009.005a.852.852 0 0 0-.241.176.853.853 0 0 0-.247.696l.124 1.261c.063.62.587 1.121 1.208 1.15l1.175.055c.321.013.629-.1.854-.325l5.502-5.5a.75.75 0 1 0-1.061-1.062l-5.38 5.381-.824-.039-.07-.717 7.036-7.037c.18-.18.398-.18.617.04l1.95 1.95c.256.255.283.582.144.72l-8.314 8.314c-.135.135-.349.197-.598.155l-2.719-.463a1.244 1.244 0 0 1-.971-.972l-.463-2.718c-.042-.25.02-.463.155-.598l8.19-8.19a.75.75 0 0 0-1.06-1.06l-8.19 8.19c-.49.49-.695 1.195-.573 1.91l.462 2.718a2.742 2.742 0 0 0 2.198 2.198l2.72.464c.715.121 1.42-.084 1.91-.573l8.314-8.314c.765-.766.663-2.035-.144-2.842l-1.95-1.95c-.805-.805-1.973-.805-2.739-.04l-7.08 7.08a.41.41 0 0 1 .074-.063Z"
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
const MdAttachFilled = withWrapper(Vector);
MdAttachFilled.groupName = "Actions";
export default MdAttachFilled;
