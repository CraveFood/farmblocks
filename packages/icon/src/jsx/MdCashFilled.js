import React from "react";
import PropTypes from "prop-types";

const MdCashFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M30.08 30H9.92a2.92 2.92 0 0 1-2.92-2.92V12.92A2.92 2.92 0 0 1 9.92 10H30.08A2.92 2.92 0 0 1 33 12.92v14.16A2.92 2.92 0 0 1 30.08 30zm.92-5.842A5.008 5.008 0 0 0 27.35 28h1.026A4.009 4.009 0 0 1 31 25.2v-1.042zm0-8.857A4.005 4.005 0 0 1 28.281 12h-1.006A5.005 5.005 0 0 0 31 16.342v-1.041zM12.65 28A5.008 5.008 0 0 0 9 24.158v1.041A4.009 4.009 0 0 1 11.624 28h1.026zM9 16.342A5.005 5.005 0 0 0 12.725 12H11.72A4.005 4.005 0 0 1 9 15.3v1.042zm11.553 4.425c.868.288 1.117.613 1.117 1.14 0 .578-.395.962-1.117 1.046v-2.186zm-.89-1.67c-.87-.3-1.084-.613-1.084-1.117 0-.53.361-.937 1.083-1.01v2.127zm.45-4.097a.507.507 0 0 0-.497.516v.252c-1.409.121-2.368 1.01-2.368 2.296 0 1.358.767 2.018 2.414 2.475v2.366c-.62-.12-1.14-.396-1.67-.805a.588.588 0 0 0-.371-.132c-.35 0-.621.289-.621.661a.67.67 0 0 0 .305.577 4.7 4.7 0 0 0 2.311.937v.34c0 .289.226.517.497.517.27 0 .485-.228.485-.516v-.317C22.03 24.022 23 23.146 23 21.824c0-1.285-.733-2.018-2.447-2.475v-2.306c.384.095.767.276 1.162.528a.62.62 0 0 0 .338.108c.35 0 .631-.288.631-.661a.646.646 0 0 0-.337-.576 3.948 3.948 0 0 0-1.749-.661v-.265c0-.288-.214-.516-.485-.516z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdCashFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCashFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCashFilled.groupName = "Payment";
export default MdCashFilled;
