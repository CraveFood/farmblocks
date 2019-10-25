import React from "react";
import PropTypes from "prop-types";

const LgSecurity = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M33.134 79a.995.995 0 0 1-.134-.5v-10a1 1 0 0 1 2 0v10a.995.995 0 0 1-.134.5H70V59.075C70 50.746 63.32 44 55.089 44H44.91C36.68 44 30 50.746 30 59.075V79h3.134zM38 42.395a17.657 17.657 0 0 1 3.06-.976A1.5 1.5 0 0 1 41 41v-8.667c0-4.851 4.107-8.833 9-8.833s9 3.982 9 8.833V41a1.5 1.5 0 0 1-.06.419c1.059.234 2.081.562 3.06.976V31.833C62 25.303 56.632 20 50 20s-12 5.302-12 11.833v10.562zm-2.926 1.572A1.499 1.499 0 0 1 35 43.5V31.833C35 23.637 41.72 17 50 17c8.28 0 15 6.637 15 14.833V43.5c0 .163-.026.32-.074.467A18.102 18.102 0 0 1 73 59.075V80.5a1.5 1.5 0 0 1-1.5 1.5h-43a1.5 1.5 0 0 1-1.5-1.5V59.075c0-6.315 3.21-11.875 8.074-15.108zM44 41.023c.302-.015.606-.023.911-.023H55.09c.305 0 .61.008.911.023v-8.69c0-3.173-2.743-5.833-6-5.833s-6 2.66-6 5.833v8.69zM35 63.5a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0v4zm9-7.463C44 52.704 46.685 50 50 50s6 2.704 6 6.037a6.025 6.025 0 0 1-2.932 5.175l2.55 6.419a1 1 0 0 1-.93 1.369h-9.376a1 1 0 0 1-.93-1.37l2.55-6.418A6.025 6.025 0 0 1 44 56.037zm6.869 5.056a1 1 0 0 1 .566-1.3A4.026 4.026 0 0 0 54 56.036C54 53.805 52.208 52 50 52s-4 1.805-4 4.037a4.026 4.026 0 0 0 2.565 3.755 1 1 0 0 1 .566 1.301L46.785 67h6.43l-2.346-5.907z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
LgSecurity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgSecurity.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgSecurity.groupName = "Misc";
export default LgSecurity;
