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
      d="M30.915 21.293l2.792 2.793a1 1 0 010 1.414l-7.192 7.192a1 1 0 01-.45.26l-3.807 1.014a1 1 0 01-1.224-1.224l1.015-3.807a1 1 0 01.26-.45l7.192-7.192a1 1 0 011.414 0zm-1.958 3.371l-5.045 5.046-.5 1.879 1.879-.5 5.044-5.047-1.378-1.378zm1.25-1.25l-.543.543 1.378 1.378.544-.542-1.378-1.379zM23.314 6a1 1 0 01.666.254l4.687 4.183a1 1 0 01.334.746V19a1 1 0 01-2 0v-7h-4V8H11v22h8a1 1 0 010 2h-9a1 1 0 01-1-1V7a1 1 0 011-1h13.313zM24 20.75a.75.75 0 110 1.5H14a.75.75 0 110-1.5h10zm0-3a.75.75 0 110 1.5H14a.75.75 0 110-1.5h10zm0-3a.75.75 0 110 1.5H14a.75.75 0 110-1.5h10z"
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
const MdInternalNotes = withWrapper(Vector);
MdInternalNotes.groupName = "Docs";
export default MdInternalNotes;
