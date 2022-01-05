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
      d="M27 12h-4V8H11v22h8a1 1 0 0 1 0 2h-9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h13.313a1 1 0 0 1 .666.254l4.687 4.183a1 1 0 0 1 .334.746V19a1 1 0 0 1-2 0v-7ZM14 23.75a.75.75 0 0 1-.75-.75v-5.509c0-.78.354-1.516.962-2.002l3.965-3.171a1.319 1.319 0 0 1 1.647 0l3.963 3.17a2.56 2.56 0 0 1 .963 2.003V23a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-1c0-.77-.686-1.36-1.466-1.233-.583.095-1.034.673-1.034 1.34V23a.75.75 0 0 1-.75.75h-3Zm.75-1.5h1.5v-.143c0-1.377.957-2.603 2.293-2.82A2.751 2.751 0 0 1 21.75 22v.25h1.5v-4.759c0-.323-.147-.628-.4-.83L19 13.58l-3.851 3.08a1.06 1.06 0 0 0-.399.83v4.759Zm15.402-.309a1 1 0 1 1 1.696 1.06l-6.435 10.292a1 1 0 0 1-1.682.022l-2.884-4.355a1 1 0 0 1 1.667-1.104l2.027 3.06 5.61-8.975Z"
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
const MdInsuranceCertificate = withWrapper(Vector);
MdInsuranceCertificate.groupName = "Docs";
export default MdInsuranceCertificate;
