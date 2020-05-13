import * as React from "react";
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
      d="M9 28h2v-7H9v7zm0 1v1h2v-1H9zm7-1v-7h-2v7h2zm0 1h-2v1h2v-1zm0-9v-1h1v11h1v-3a2 2 0 114 0v3h1V19h1v1h2v-1H12v11h1V19h1v1h2zm12 10V19h1v1h2v-1h-4v11h1zm3-2v-7h-2v7h2zm0 1h-2v1h2v-1zm-5-1v-7h-2v7h2zm0 1h-2v1h2v-1zm6-10v11h2c1.333 0 1.333 2 0 2H6c-1.333 0-1.333-2 0-2h2V19h-.294a2.2 2.2 0 01-1.154-4.073l12.354-7.612A2.118 2.118 0 0120.016 7a2 2 0 011.05.297l12.382 7.63A2.2 2.2 0 0132.294 19H32zm-21 1v-1H9v1h2zm10 10v-3a1 1 0 00-2 0v3h2zm-.983-21a.118.118 0 00-.062.017L7.6 16.63a.2.2 0 00.105.37h24.588a.2.2 0 00.105-.37L20.017 9zM19 13.5a1 1 0 102.001-.001A1 1 0 0019 13.5zm-1 0a2 2 0 114.001.001A2 2 0 0118 13.5z"
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
const MdBanks = withWrapper(Vector);
MdBanks.groupName = "Business";
export default MdBanks;
