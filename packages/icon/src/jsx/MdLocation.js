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
      d="M20.764 34.75a1 1 0 01-.661.25h-.206a1 1 0 01-.661-.25 12.922 12.922 0 01-.418-.391 26.22 26.22 0 01-1.048-1.083 32.885 32.885 0 01-3.155-4.038C11.735 24.896 10 20.11 10 15.02 10 9.167 14.266 5 19.897 5h.206C25.733 5 30 9.167 30 15.02c0 5.09-1.734 9.876-4.615 14.218a32.885 32.885 0 01-3.155 4.038c-.378.413-.73.774-1.048 1.083-.194.188-.336.32-.418.391zM20 33.883l.103-.116V33h-.206v.767l.103.116zm.756-1.959c1.01-1.1 2.02-2.37 2.962-3.791C26.398 24.093 28 19.673 28 15.02 28 10.283 24.639 7 20.103 7h-.206C15.361 7 12 10.282 12 15.02c0 4.653 1.602 9.073 4.282 13.113a30.898 30.898 0 002.962 3.791c.268.293.522.557.756.791.234-.234.488-.498.756-.79zM23 16a3 3 0 10-6 0 3 3 0 006 0zm2 0a5 5 0 11-10 0 5 5 0 0110 0z"
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
const MdLocation = withWrapper(Vector);
MdLocation.groupName = "Misc";
export default MdLocation;
