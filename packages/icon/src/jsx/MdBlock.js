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
      d="M10.51 31c-1.154 0-2.044.704-2.731 1.975a8.16 8.16 0 00-.625 1.53c-.093.313-.148.55-.17.67a1 1 0 11-1.968-.35 9.712 9.712 0 011.003-2.8C7.021 30.17 8.5 29 10.51 29h10.98c2.01 0 3.49 1.17 4.49 3.025a9.712 9.712 0 011.004 2.8 1 1 0 01-1.968.35 6.688 6.688 0 00-.17-.67 8.16 8.16 0 00-.625-1.53C23.534 31.705 22.644 31 21.49 31H10.51zm5.613-22a1 1 0 010 2C12.093 11 10 12.283 10 15.147v5.76C10 23.755 12.065 25 16.124 25c2.69 0 4.453-.585 5.271-1.782a1 1 0 011.651 1.129C21.768 26.217 19.408 27 16.127 27h-.003C11.104 27 8 25.13 8 20.907v-5.76C8 10.92 11.13 9 16.123 9zM27 4a9 9 0 110 18 9 9 0 010-18zm0 2a7 7 0 100 14 7 7 0 000-14zm4.104 4.144a5 5 0 01-6.866 7.025zM27 8c.976 0 1.887.28 2.657.763l-6.831 6.99A5 5 0 0127 8z"
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
const MdBlock = withWrapper(Vector);
MdBlock.groupName = "Actions";
export default MdBlock;
