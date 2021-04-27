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
      d="M12 3a1 1 0 01.993.883L13 4v1h7a2 2 0 011.995 1.85L22 7v11a2 2 0 01-1.85 1.995L20 20H4a2 2 0 01-1.995-1.85L2 18V7a2 2 0 011.85-1.995L4 5h7V4a1 1 0 011-1zm5.854 9.232l-2.422 2.421.432.433a1 1 0 01-1.327 1.492l-.087-.078-4.242-4.243-5.657 5.657a1.01 1.01 0 01-.098.086H20v-3.624l-.025-.022-2.121-2.122zM20 7H4v8.635l4.793-4.792a2 2 0 012.72-.102l.109.102 2.395 2.396 2.422-2.421a2 2 0 012.72-.102l.109.102.732.733V7z"
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
const SmPhoto = withWrapper(Vector);
SmPhoto.groupName = "Misc";
export default SmPhoto;
