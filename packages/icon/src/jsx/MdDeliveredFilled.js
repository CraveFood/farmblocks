import React from "react";
import PropTypes from "prop-types";

const MdDeliveredFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M31.528 17.337L30.512 27.94a1 1 0 0 1-.516.782l-9.43 5.155-.066-.122v-9.514a.5.5 0 1 0-1 0v9.481l-.084.155-9.43-5.155a1 1 0 0 1-.515-.782L8.05 13.13l11.417 5.4a1 1 0 0 0 .451.096l.091-.002a1 1 0 0 0 .404-.096l4.547-2.15a5.981 5.981 0 0 1-1.262-1.616l-3.76 1.779-10.826-5.12 10.39-4.444a1 1 0 0 1 .393-.08h.19a1 1 0 0 1 .394.08L24.09 8.52a5.96 5.96 0 1 1 7.437 8.816zm-3.234-4.116l-.987-1.35a1 1 0 1 0-1.614 1.18l1.857 2.54a1 1 0 0 0 1.653-.059l3.144-5a1 1 0 1 0-1.694-1.064l-2.359 3.753z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdDeliveredFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdDeliveredFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdDeliveredFilled.groupName = "States";
export default MdDeliveredFilled;
