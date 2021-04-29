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
      d="M12 3a1 1 0 01.993.883L13 4v1h7a2 2 0 011.995 1.85L22 7v11a2 2 0 01-1.85 1.995L20 20H4a2 2 0 01-1.995-1.85L2 18V7a2 2 0 011.85-1.995L4 5h7V4a1 1 0 011-1zm-.546 7.684a2 2 0 00-2.463-.108l-.136.107L4 14.83v2.631l6.154-5.257L14.45 16.5l.087.078a1 1 0 001.41-1.398l-.083-.094-.432-.433 2.422-2.42 2.12 2.12.026.022V11.55l-.732-.732-.11-.102a2 2 0 00-2.59-.016l-.129.118-2.421 2.421-2.45-2.45-.114-.105z"
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
const SmPhotoFilled = withWrapper(Vector);
SmPhotoFilled.groupName = "Misc";
export default SmPhotoFilled;
