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
      d="M16.199 4C19.744 4 22 6.146 22 9.57c0 1.29-.508 2.523-1.34 3.677a9.855 9.855 0 0 1-.633.789l-.218.237-.283.287-6.387 5.981c-.308.3-.718.459-1.139.459-.368 0-.729-.122-1.01-.345l-.116-.101-6.232-5.847c-.335-.285-.863-.842-1.342-1.517C2.492 12.053 2 10.838 2 9.57 2 6.146 4.256 4 7.801 4c1.398 0 2.72.608 3.94 1.56l.259.208.26-.209c1.056-.824 2.19-1.39 3.384-1.527l.276-.024L16.2 4Z"
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
const SmFavoriteHeartFull = withWrapper(Vector);
SmFavoriteHeartFull.groupName = "Actions";
export default SmFavoriteHeartFull;
