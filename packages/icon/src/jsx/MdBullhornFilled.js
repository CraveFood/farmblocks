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
      d="M31 15.15a2.699 2.699 0 010 5.21V27a1 1 0 01-1.583.812 13.572 13.572 0 00-.908-.577A23.987 23.987 0 0026 25.947V10.053c.93-.411 1.77-.85 2.51-1.288.448-.266.756-.469.907-.577A1 1 0 0131 9v6.15zm-12.063 8.918l2.786 6.54a1 1 0 01-.92 1.392h-4.096a1 1 0 01-.918-.604L12.6 24h-.844c-1.237 0-2.297-.756-2.584-1.952l-2.145-8.811A1 1 0 018 12h9.355c2.26 0 4.495-.423 6.645-1.16v14.32a21.16 21.16 0 00-5.063-1.092zM16 16h-4a.5.5 0 100 1h4a.5.5 0 100-1zm0 2h-4a.5.5 0 100 1h4a.5.5 0 100-1z"
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
const MdBullhornFilled = withWrapper(Vector);
MdBullhornFilled.groupName = "Menu";
export default MdBullhornFilled;
