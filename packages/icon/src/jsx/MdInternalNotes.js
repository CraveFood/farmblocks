import React from "react";
import PropTypes from "prop-types";

const MdInternalNotes = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M30.915 21.293l2.792 2.793a1 1 0 0 1 0 1.414l-7.192 7.192a1 1 0 0 1-.45.26l-3.807 1.014a1 1 0 0 1-1.224-1.224l1.015-3.807a1 1 0 0 1 .26-.45l7.192-7.192a1 1 0 0 1 1.414 0zm-1.958 3.371l-5.045 5.046-.5 1.879 1.879-.5 5.044-5.047-1.378-1.378zm1.25-1.25l-.543.543 1.378 1.378.544-.542-1.378-1.379zM23.314 6a1 1 0 0 1 .666.254l4.687 4.183a1 1 0 0 1 .334.746V19a1 1 0 0 1-2 0v-7h-4V8H11v22h8a1 1 0 0 1 0 2h-9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h13.313zM24 20.75a.75.75 0 1 1 0 1.5H14a.75.75 0 1 1 0-1.5h10zm0-3a.75.75 0 1 1 0 1.5H14a.75.75 0 1 1 0-1.5h10zm0-3a.75.75 0 1 1 0 1.5H14a.75.75 0 1 1 0-1.5h10z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdInternalNotes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdInternalNotes.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdInternalNotes.groupName = "Docs";
export default MdInternalNotes;
