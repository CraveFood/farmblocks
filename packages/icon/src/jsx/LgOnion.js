import React from "react";
import PropTypes from "prop-types";

const LgOnion = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M68.06 74.97c-9.335 5.364-18.368 6.01-26.942 2.86-6.286-2.31-11.64-6.294-16.763-11.568a17.61 17.61 0 0 1-.018-.018c-8.834-8.834-6.414-25.291 5.101-36.806 11.515-11.515 27.97-13.935 36.806-5.1l.047.047c5.26 5.113 9.233 10.459 11.538 16.733 3.13 8.515 2.514 17.483-2.75 26.75l5.176 2.143a1 1 0 0 1-.765 1.848l-6.854-2.838a1 1 0 0 1-.611-1.035 1.495 1.495 0 0 1 .163-1.112C77.27 58.208 77.896 50 75.013 42.152c-.92-2.505-2.142-4.866-3.635-7.13 1.142 8.393-2.488 18.376-10.235 26.122-7.745 7.747-17.728 11.377-26.122 10.234 2.265 1.493 4.626 2.715 7.131 3.636 7.847 2.882 16.056 2.255 24.723-2.825.277-.163.585-.226.883-.2a1 1 0 0 1 1.43.48l2.838 6.853a1 1 0 0 1-1.848.765L68.06 74.97zm-3.98-48.553c-7.517-7.453-22.084-5.295-32.52 5.142-10.444 10.444-12.6 25.023-5.13 32.535l.045.045.015.015c7.514 7.467 22.09 5.311 32.532-5.131 10.43-10.43 12.594-24.986 5.158-32.507a72.403 72.403 0 0 0-.1-.1zM37.476 63.599a1 1 0 0 1-.25 1.984c-3.266-.41-6.128-1.739-8.309-3.92-6.79-6.79-4.828-19.595 4.162-28.584 8.99-8.99 21.796-10.952 28.584-4.162a1 1 0 1 1-1.414 1.414c-5.897-5.897-17.47-4.124-25.756 4.162-8.287 8.286-10.059 19.858-4.162 25.756 1.856 1.856 4.306 2.993 7.145 3.35zm18.613-7.51a1 1 0 0 1 1.414 1.414c-4.237 4.237-9.439 7.024-14.593 7.914a1 1 0 1 1-.34-1.971c4.737-.818 9.568-3.406 13.519-7.357zM37.78 37.781a1 1 0 0 1-1.414-1.415c1.911-1.91 4.087-3.438 6.375-4.496a1 1 0 0 1 .84 1.815c-2.073.959-4.055 2.35-5.8 4.096zm18.243-3.223a1 1 0 0 1 1.414-1.414c4.983 4.981 3.436 14.414-3.222 21.072-6.656 6.658-16.09 8.204-21.071 3.222-3.906-3.907-3.86-10.677-.178-16.754a1 1 0 1 1 1.71 1.036c-3.248 5.362-3.287 11.134-.118 14.304 4.081 4.08 12.286 2.736 18.243-3.222 5.959-5.959 7.304-14.163 3.222-18.244zM45.211 52.391a1 1 0 0 1 .728 1.863c-1.155.452-2.318.711-3.431.763a1 1 0 0 1-.092-1.998c.888-.041 1.837-.253 2.795-.628zM37.56 48.7a1 1 0 1 1-2 .07c-.105-3.025 1.415-6.438 4.093-9.116 4.323-4.325 10.379-5.463 13.558-2.283 3.18 3.179 2.041 9.235-2.283 13.558-.46.46-.943.888-1.445 1.281a1 1 0 0 1-1.233-1.575c.438-.343.861-.717 1.264-1.12 3.632-3.631 4.542-8.471 2.283-10.73-2.259-2.26-7.099-1.35-10.73 2.283-2.305 2.306-3.593 5.196-3.507 7.632zm38.318 25.596a1 1 0 0 1-1.414 1.414l-4.227-4.227a1 1 0 0 1 1.414-1.414l4.227 4.227z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
LgOnion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgOnion.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgOnion.groupName = "Subcategories";
export default LgOnion;
