import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M17 4c2.131 0 3.887 1.62 3.995 3.675l.005.2V18a1 1 0 01.117 1.993L21 20H3a1 1 0 01-.117-1.993L3 18v-4.286a1 1 0 01.078-.388l.06-.12 2.338-3.97a1 1 0 01.36-.357l.116-.058 4.162-1.743a1 1 0 01.254-.07L10.5 7h.086a1 1 0 01.256.034l.123.04L13 7.91v-.034C13 5.726 14.8 4 17 4zm-6.455 5.065L7.03 10.537 5 13.985V18h2v-1.9c0-1.084.78-2.012 1.825-2.094L8.976 14h3.047c1.069 0 1.899.879 1.972 1.946l.005.153V18h2v-4.031l-1.875-3.436-3.58-1.468zM12.023 16H8.976c.017 0 .024.003.026.012L9 16.099V18h3v-1.9l-.004-.07c0-.015 0-.023.009-.027l.018-.003zM17 6c-1.06 0-1.915.77-1.994 1.73L15 7.876v.855l.213.087a1 1 0 01.424.331l.074.116 2.167 3.97a1 1 0 01.114.354l.008.125V18h1V7.876C19 6.85 18.114 6 17 6zm-6.5 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
      fill={color}
      fillRule="evenodd"
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
const SmPurveyor = withWrapper(Vector);
SmPurveyor.groupName = "Business";
export default SmPurveyor;
