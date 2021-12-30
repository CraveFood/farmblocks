import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M16 80h19V69a1 1 0 0 1 1-1h20a1 1 0 0 1 0 2h-5v10h12V70h-3a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v11h19v-5a1.5 1.5 0 0 1 3 0v5h2c2 0 2 3 0 3H11c-2 0-2-3 0-3h2V51.469c0-3.978 2.7-6.871 6.758-7.335l9.742-.948v-4.91c0-.49.24-.949.64-1.23L49 23.87V12a1 1 0 0 1 1.326-.945l10 3.445c.851.293.911 1.475.094 1.853L51 20.713v3.156l18.86 13.177c.4.281.64.74.64 1.23v4.91l9.768.95C84.299 44.599 87 47.492 87 51.47v19.038a1.5 1.5 0 0 1-3 0V51.469c0-2.423-1.529-4.06-4.048-4.35l-11.097-1.08a1.5 1.5 0 0 1-1.355-1.492v-5.49L50 26.83 32.5 39.058V49c0 2-3 2-3 0v-2.8l-9.426.917C17.529 47.408 16 49.047 16 51.47V80Zm21 0h12V70H37v10Zm35-4h6v-6h-9v6h1v-3c0-1.333 2-1.333 2 0v3Zm0-14h6v-6h-9v6h1v-3c0-1.333 2-1.333 2 0v3ZM25 76h6v-6h-9v6h1v-3c0-1.333 2-1.333 2 0v3Zm16-14h8v-6H37v6h2v-3c0-1.333 2-1.333 2 0v3Zm-16 0h6v-6h-9v6h1v-3c0-1.333 2-1.333 2 0v3Zm26 0h12v-6H51v6Zm13-8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H36a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h28ZM45 39a5 5 0 0 0 10 0 5 5 0 0 0-10 0Zm-2 0a7 7 0 0 1 14 0 7 7 0 0 1-14 0ZM21 64a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H21Zm0 14a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H21Zm30-59.49 6.325-2.929L51 13.402v5.107ZM41 48h18c1.333 0 1.333 2 0 2H41c-1.333 0-1.333-2 0-2Zm9.5-5.222a.5.5 0 1 1-1 0V39a.5.5 0 0 1 .5-.5h2.615a.5.5 0 1 1 0 1H50.5v3.278ZM68 64a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H68Zm0 14a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H68Z"
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
const LgSchools = withWrapper(Vector);
LgSchools.groupName = "Business";
export default LgSchools;
