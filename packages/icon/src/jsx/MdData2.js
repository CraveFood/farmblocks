import React from "react";
import PropTypes from "prop-types";

const MdData2 = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M26.636 30c.457-.304.892-.638 1.302-1H21v1h5.636zm-1.832 1H21v.959A11.929 11.929 0 0 0 24.804 31zm4.14-3c.286-.318.554-.652.804-1H21v1h7.945zm1.45-2c.188-.324.36-.658.518-1H21v1h9.395zm.923-2c.116-.327.218-.66.305-1H21v1h10.317zm.517-2c.055-.329.097-.663.125-1H21v1h10.834zM32 20c0-6.291-4.84-11.45-11-11.959V20h11zM19 8.041C12.84 8.55 8 13.71 8 20c0 6.291 4.84 11.45 11 11.959V8.04zM34 20c0 7.732-6.268 14-14 14S6 27.732 6 20 12.268 6 20 6s14 6.268 14 14z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdData2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdData2.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdData2.groupName = "Misc";
export default MdData2;
