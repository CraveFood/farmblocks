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
      d="M18.819 9.244a9 9 0 115.284 12.28c-.289 3.743-3.26 5.435-7.933 5.475h-.214C11.035 26.957 8 25.082 8 20.907v-5.76c0-4.182 3.063-6.105 7.96-6.146h.206c.86.028.806.027-.163-.001h.163c.957.009 1.845.089 2.653.244zM5.016 34.824a9.712 9.712 0 011.003-2.8C7.021 30.172 8.5 29 10.51 29h10.98c2.01 0 3.49 1.17 4.49 3.025a9.712 9.712 0 011.004 2.8A1 1 0 0126 36H6a1 1 0 01-.984-1.176zm26.088-24.68a5 5 0 01-6.869 7.023l6.87-7.024zm-1.447-1.38l-6.833 6.986a5 5 0 016.833-6.987zM34 13a7 7 0 10-14 0 7 7 0 0014 0z"
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
const MdBlockFilled = withWrapper(Vector);
MdBlockFilled.groupName = "Actions";
export default MdBlockFilled;
