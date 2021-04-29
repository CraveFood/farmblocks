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
      d="M30.707 18.293l5 5a1 1 0 01-1.414 1.414l-5-5a1.009 1.009 0 01-.093-.106 6.963 6.963 0 01-3.468 1.361l-1.464 4.357a1 1 0 01-.948.681H12.416a1 1 0 01-.943-.667L7.465 14H5a1 1 0 010-2h3.173a1 1 0 01.942.667L9.587 14H18a7 7 0 1112.6 4.2c.038.028.073.06.107.093zM25.021 19A4.999 4.999 0 0030 14a5 5 0 10-10 0 5 5 0 005.021 5zM14 31a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4z"
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
const MdMarketplacesFilled = withWrapper(Vector);
MdMarketplacesFilled.groupName = "Menu";
export default MdMarketplacesFilled;
