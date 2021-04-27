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
      d="M31.53 21.623a1 1 0 01.318 1.378l-6.435 10.292a1 1 0 01-1.682.022l-2.884-4.355a1 1 0 011.667-1.104l2.027 3.06 5.61-8.975a1 1 0 011.379-.318zM23.313 6a1 1 0 01.666.254l4.687 4.183a1 1 0 01.334.746v9.788l-.062.086-.058.089-4.376 6.998-.739-1.116a2.5 2.5 0 00-4.258 2.615l.09.146L21.06 32H10a1 1 0 01-1-1V7a1 1 0 011-1h13.313zm-3.716 6.49a.953.953 0 00-1.194 0l-3.172 2.55a1.96 1.96 0 00-.731 1.529V21a.5.5 0 00.5.5h2.4a.5.5 0 00.5-.5v-.718c0-.586.395-1.095.912-1.18a1.104 1.104 0 011.288 1.094V21a.5.5 0 00.5.5H23a.5.5 0 00.5-.5v-4.431a1.96 1.96 0 00-.732-1.529z"
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
const MdInsuranceCertificateFilled = withWrapper(Vector);
MdInsuranceCertificateFilled.groupName = "Docs";
export default MdInsuranceCertificateFilled;
