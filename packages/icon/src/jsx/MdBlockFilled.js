import React from "react";
import PropTypes from "prop-types";

const MdBlockFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M18.819 9.244a9 9 0 1 1 5.284 12.28c-.289 3.743-3.26 5.435-7.933 5.475h-.214C11.035 26.957 8 25.082 8 20.907v-5.76c0-4.182 3.063-6.105 7.96-6.146h.206c.86.028.806.027-.163-.001h.163c.957.009 1.845.089 2.653.244zM5.016 34.824a9.712 9.712 0 0 1 1.003-2.8C7.021 30.172 8.5 29 10.51 29h10.98c2.01 0 3.49 1.17 4.49 3.025a9.712 9.712 0 0 1 1.004 2.8A1 1 0 0 1 26 36H6a1 1 0 0 1-.984-1.176zm26.088-24.68a5 5 0 0 1-6.869 7.023l6.87-7.024zm-1.447-1.38l-6.833 6.986a5 5 0 0 1 6.833-6.987zM34 13a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdBlockFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdBlockFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdBlockFilled.groupName = "Actions";
export default MdBlockFilled;
