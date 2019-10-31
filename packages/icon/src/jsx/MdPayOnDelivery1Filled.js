import React from "react";
import PropTypes from "prop-types";

const MdPayOnDelivery1Filled = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      ref={ref}
      aria-hidden={!props["aria-label"]}
      {...props}
    >
      <path
        d="M26.995 16a.504.504 0 0 0 .005-.07V11a.5.5 0 1 0-1 0v4.93c0 .024.002.047.005.07H22a1 1 0 0 1-1-1V9h11v6a1 1 0 0 1-1 1h-4.005zM19 10v4.975a3 3 0 0 0 3 3h9v9.105A2.92 2.92 0 0 1 28.079 30H7.92A2.92 2.92 0 0 1 5 27.08V12.92A2.92 2.92 0 0 1 7.92 10H19zm.973-1a1 1 0 0 1 0-2h13a1 1 0 0 1 0 2h-13zm-5.26 11.902c1.12.35 1.44.742 1.44 1.381 0 .7-.51 1.164-1.44 1.265v-2.646zm-1.149-2.02c-1.12-.364-1.397-.742-1.397-1.353 0-.64.466-1.134 1.397-1.222v2.574zm.581-4.959a.633.633 0 0 0-.64.625v.306c-1.817.145-3.053 1.221-3.053 2.777 0 1.643.99 2.442 3.112 2.995v2.864c-.8-.145-1.469-.48-2.153-.974a.787.787 0 0 0-.479-.16c-.45 0-.8.35-.8.8 0 .305.145.538.393.698a6.284 6.284 0 0 0 2.98 1.134v.412c0 .35.291.625.64.625a.621.621 0 0 0 .626-.625v-.383c1.846-.175 3.096-1.236 3.096-2.835 0-1.556-.945-2.443-3.155-2.995v-2.792c.495.116.99.334 1.498.64a.837.837 0 0 0 .436.13.8.8 0 0 0 .814-.799c0-.349-.203-.568-.435-.698a5.293 5.293 0 0 0-2.254-.8v-.32a.621.621 0 0 0-.626-.625z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdPayOnDelivery1Filled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdPayOnDelivery1Filled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdPayOnDelivery1Filled.groupName = "Payment";
export default MdPayOnDelivery1Filled;
