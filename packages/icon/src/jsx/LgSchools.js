import React from "react";
import PropTypes from "prop-types";

const LgSchools = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M16 80h19V69a1 1 0 0 1 1-1h20a1 1 0 0 1 0 2h-5v10h12V70h-3a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v11h19v-5a1.5 1.5 0 0 1 3 0v5h2c2 0 2 3 0 3H11c-2 0-2-3 0-3h2V51.469c0-3.978 2.7-6.871 6.758-7.335l9.742-.948v-4.91c0-.49.24-.949.64-1.23L49 23.87V12a1 1 0 0 1 1.326-.945l10 3.445c.851.293.911 1.475.094 1.853L51 20.713v3.156l18.86 13.177c.4.281.64.74.64 1.23v4.91l9.768.95C84.299 44.599 87 47.492 87 51.47v19.038a1.5 1.5 0 0 1-3 0V51.469c0-2.423-1.529-4.06-4.048-4.35l-11.097-1.08a1.5 1.5 0 0 1-1.355-1.492v-5.49L50 26.83 32.5 39.058V49c0 2-3 2-3 0v-2.8l-9.426.917C17.529 47.408 16 49.047 16 51.47V80zm21 0h12V70H37v10zm35-4h6v-6h-9v6h1v-3c0-1.333 2-1.333 2 0v3zm0-14h6v-6h-9v6h1v-3c0-1.333 2-1.333 2 0v3zM25 76h6v-6h-9v6h1v-3c0-1.333 2-1.333 2 0v3zm16-14h8v-6H37v6h2v-3c0-1.333 2-1.333 2 0v3zm-16 0h6v-6h-9v6h1v-3c0-1.333 2-1.333 2 0v3zm26 0h12v-6H51v6zm13-8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H36a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h28zM45 39a5 5 0 0 0 10 0 5 5 0 0 0-10 0zm-2 0a7 7 0 0 1 14 0 7 7 0 0 1-14 0zM21 64a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H21zm0 14a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H21zm30-59.49l6.325-2.929L51 13.402v5.107zM41 48h18c1.333 0 1.333 2 0 2H41c-1.333 0-1.333-2 0-2zm9.5-5.222a.5.5 0 1 1-1 0V39a.5.5 0 0 1 .5-.5h2.615a.5.5 0 1 1 0 1H50.5v3.278zM68 64a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H68zm0 14a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H68z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgSchools.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
LgSchools.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgSchools.groupName = "Business";
export default LgSchools;
