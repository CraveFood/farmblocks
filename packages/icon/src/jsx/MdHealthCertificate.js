import React from "react";
import PropTypes from "prop-types";

const MdHealthCertificate = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      ref={ref}
      ariaHidden={!props.ariaLabel}
      {...props}
    >
      <path
        d="M27 12h-4V8H11v22h8a1 1 0 0 1 0 2h-9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h13.313a1 1 0 0 1 .666.254l4.687 4.183a1 1 0 0 1 .334.746V19a1 1 0 0 1-2 0v-7zm4.53 9.623a1 1 0 0 1 .318 1.378l-6.435 10.292a1 1 0 0 1-1.682.022l-2.884-4.355a1 1 0 0 1 1.667-1.104l2.027 3.06 5.61-8.975a1 1 0 0 1 1.379-.318zM21.335 14c2.08 0 3.419 1.3 3.419 3.34 0 .772-.296 1.503-.777 2.185a5.795 5.795 0 0 1-.733.848l-3.47 3.312a1.1 1.1 0 0 1-1.54.005l-3.451-3.304c-.766-.662-1.533-1.762-1.533-3.047 0-2.04 1.34-3.339 3.419-3.339.84 0 1.62.369 2.333.942.713-.573 1.493-.942 2.333-.942zm0 1.5c-.551 0-1.216.401-1.808.981a.75.75 0 0 1-1.05 0c-.593-.58-1.256-.98-1.808-.98-1.261 0-1.92.637-1.92 1.838 0 .722.552 1.512 1.042 1.937l3.211 3.072 3.194-3.048c.062-.06.12-.115.194-.195.124-.134.247-.284.362-.445.318-.451.502-.906.502-1.32 0-1.202-.658-1.84-1.92-1.84z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdHealthCertificate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdHealthCertificate.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdHealthCertificate.groupName = "Docs";
export default MdHealthCertificate;
