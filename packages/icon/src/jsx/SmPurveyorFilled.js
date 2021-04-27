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
      d="M3 20a1 1 0 01-.117-1.993L3 18v-4.286a1 1 0 01.078-.388l.06-.12 2.338-3.97a1 1 0 01.36-.357l.116-.058 4.162-1.743a1 1 0 01.254-.07L10.5 7h.086a1 1 0 01.24.03l4.537 1.842.077.04a.5.5 0 01.129.115l.047.074 2.326 4.38.032.075.02.078.006.081V18h1v-4.285l-.007-.146a1.5 1.5 0 00-.106-.424l-.062-.133-2.326-4.38-.077-.13a1.5 1.5 0 00-.547-.493l-.136-.064-2.608-1.058C13.583 5.22 15.151 4 17 4c2.131 0 3.887 1.62 3.995 3.675l.005.2V18a1 1 0 01.117 1.993L21 20H3zm8.5-5h-2a1.5 1.5 0 00-1.493 1.356L8 16.5v1a.5.5 0 00.41.492L8.5 18h4a.5.5 0 00.492-.41L13 17.5v-1a1.5 1.5 0 00-1.5-1.5zm-1-5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
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
const SmPurveyorFilled = withWrapper(Vector);
SmPurveyorFilled.groupName = "Business";
export default SmPurveyorFilled;
