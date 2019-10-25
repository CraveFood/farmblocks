import React from "react";
import PropTypes from "prop-types";

const MdCustomBrandFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M4 18h13.141l-1.817 6.82a.7.7 0 0 0 .856.856l6.923-1.844a.7.7 0 0 0 .315-.182l6.538-6.538a1 1 0 0 1 .044.296V27.95A3.05 3.05 0 0 1 26.95 31H7.05A3.05 3.05 0 0 1 4 27.95V18zm0-1v-1.95A3.05 3.05 0 0 1 7.05 12h15.882l-5 5H4zm2-2.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm23.711-3.123l-.03-.032-4.057-4.057 1.299-1.299 4.087 4.088-1.299 1.3zm-1.413 1.413l-9.737 9.737-5.573 1.485 1.485-5.573 9.737-9.737 4.057 4.058.031.03z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdCustomBrandFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCustomBrandFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCustomBrandFilled.groupName = "Misc";
export default MdCustomBrandFilled;
