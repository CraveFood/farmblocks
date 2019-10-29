import React from "react";
import PropTypes from "prop-types";

const LgGarlic = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M48.5 73.5h-1.166l-3.359 4.167a1 1 0 1 1-1.557-1.255l2.347-2.912h-15.97c-10.386 0-15.687-9.8-13.204-21.25 2.59-11.936 12.404-21.003 26.236-21.745.566-1.707.542-4.28-.082-7.19a1.5 1.5 0 0 1 1.467-1.815h12.242a1.5 1.5 0 0 1 1.467 1.814c-.605 2.822-.527 5.456.165 7.194.067-.007.135-.01.205-.007 13.994.495 24.1 9.504 26.985 21.54C87.036 63.555 81.924 73.5 71.512 73.5H54.288l2.348 2.912a1 1 0 1 1-1.557 1.255l-3.36-4.167H50.5V78a1 1 0 0 1-2 0v-4.5zm21.518-3h1.494c8.14 0 12.207-7.911 9.846-17.76-2.385-9.956-10.254-17.564-21.372-19.011.007.05.011.1.013.15 6.335 2.638 11.2 8.132 13.653 14.93a1 1 0 0 1-1.881.679c-2.365-6.552-7.124-11.766-13.267-14.049a1.5 1.5 0 0 1-.448-.067c-3.823-1.184-5.068-5.731-4.384-10.872h-8.663c.795 5.353-.23 9.745-4.065 10.933a1.5 1.5 0 0 1-.411.067c-12.279 4.735-18.26 21.759-11.89 30.864a1 1 0 1 1-1.64 1.147C20.017 57.52 26.095 39.573 39 33.967a1.49 1.49 0 0 1 .012-.157c-10.84 1.694-18.366 9.287-20.489 19.076C16.4 62.676 20.633 70.5 28.795 70.5h10.51c-10.243-4.757-10.47-19.813.236-30.457a1 1 0 1 1 1.41 1.419c-5.384 5.352-8.079 12.569-7.165 18.556.933 6.109 5.4 9.918 12.751 9.982h5.612c8.593 0 13.296-5.128 13.048-12.819-.248-7.703-5.452-15.888-13.59-20.35a1 1 0 0 1 .962-1.753c8.748 4.796 14.356 13.617 14.627 22.039.2 6.204-2.518 11.06-7.557 13.383h5.785c6.127-1.739 9.114-7.848 8.062-15.783a1 1 0 0 1 1.983-.263c.926 6.99-1.069 12.88-5.45 16.046zM46.194 35.078a1 1 0 0 1 .96 1.754 27.813 27.813 0 0 0-3.027 1.922 1 1 0 0 1-1.179-1.616 29.813 29.813 0 0 1 3.246-2.06zM57.41 60.98a1 1 0 1 1-1.706 1.043 1 1 0 0 1 1.706-1.043zm4.457-.374a.999.999 0 1 1-1.707 1.041.998.998 0 0 1 .333-1.374.998.998 0 0 1 1.373.333zm-2.373 3.79a1 1 0 1 1-1.708 1.04 1 1 0 0 1 1.707-1.04z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgGarlic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
LgGarlic.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgGarlic.groupName = "Subcategories";
export default LgGarlic;
