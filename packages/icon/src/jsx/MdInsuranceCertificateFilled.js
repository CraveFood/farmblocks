import React from "react";
import PropTypes from "prop-types";

const MdInsuranceCertificateFilled = React.forwardRef(
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
        d="M31.53 21.623a1 1 0 0 1 .318 1.378l-6.435 10.292a1 1 0 0 1-1.682.022l-2.884-4.355a1 1 0 0 1 1.667-1.104l2.027 3.06 5.61-8.975a1 1 0 0 1 1.379-.318zM23.313 6a1 1 0 0 1 .666.254l4.687 4.183a1 1 0 0 1 .334.746v9.788l-.062.086-.058.089-4.376 6.998-.739-1.116a2.5 2.5 0 0 0-4.258 2.615l.09.146L21.06 32H10a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h13.313zm-3.716 6.49a.953.953 0 0 0-1.194 0l-3.172 2.55a1.96 1.96 0 0 0-.731 1.529V21a.5.5 0 0 0 .5.5h2.4a.5.5 0 0 0 .5-.5v-.718c0-.586.395-1.095.912-1.18a1.104 1.104 0 0 1 1.288 1.094V21a.5.5 0 0 0 .5.5H23a.5.5 0 0 0 .5-.5v-4.431a1.96 1.96 0 0 0-.732-1.529z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdInsuranceCertificateFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdInsuranceCertificateFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdInsuranceCertificateFilled.groupName = "Docs";
export default MdInsuranceCertificateFilled;
