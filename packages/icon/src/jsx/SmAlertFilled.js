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
      d="M12 2c5.522 0 10 4.478 10 10 0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10C2 6.478 6.477 2 12 2Zm0 13.014c.79 0 1.387.55 1.455 1.287l.006.173c0 .806-.622 1.428-1.461 1.428-.79 0-1.387-.55-1.455-1.287l-.006-.174c0-.806.622-1.427 1.461-1.427ZM12.823 6c.452 0 .721.369.671.855l-.722 6.312c-.05.454-.352.74-.772.74-.42 0-.722-.286-.772-.74l-.722-6.312c-.05-.486.219-.855.672-.855h1.645Z"
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
const SmAlertFilled = withWrapper(Vector);
SmAlertFilled.groupName = "Actions";
export default SmAlertFilled;
