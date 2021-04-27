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
      d="M21.06 32H10a1 1 0 01-1-1V7a1 1 0 011-1h13.313a1 1 0 01.666.254l4.687 4.183a1 1 0 01.334.746v9.788a2.533 2.533 0 00-.12.175l-4.376 6.998-.739-1.116a2.5 2.5 0 00-4.169 2.76L21.061 32zm9.092-10.059a1 1 0 111.696 1.06l-6.435 10.292a1 1 0 01-1.682.022l-2.884-4.355a1 1 0 011.667-1.104l2.027 3.06 5.61-8.975zm-11.396.21a.35.35 0 00.492 0l3.478-3.32c.05-.05 1.278-1.163 1.278-2.492 0-1.62-1-2.589-2.67-2.589-.975 0-1.891.763-2.332 1.195-.441-.432-1.356-1.195-2.333-1.195-1.67 0-2.67.968-2.67 2.59 0 1.328 1.23 2.44 1.274 2.478l3.483 3.332z"
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
const MdHealthCertificateFilled = withWrapper(Vector);
MdHealthCertificateFilled.groupName = "Docs";
export default MdHealthCertificateFilled;
