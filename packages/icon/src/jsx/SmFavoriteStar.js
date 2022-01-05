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
      d="m8.691 7.445-5.394.784-.114.023a1 1 0 0 0-.44 1.683l3.902 3.804-.92 5.373-.014.11a1 1 0 0 0 1.464.944L12 17.63l4.825 2.536.1.047a1 1 0 0 0 1.35-1.1l-.921-5.374 3.904-3.804.078-.085a1 1 0 0 0-.633-1.62l-5.395-.785-2.411-4.888a1 1 0 0 0-1.794 0L8.691 7.445ZM12 5.258l1.748 3.544.061.106a1 1 0 0 0 .692.441l3.909.568-2.828 2.757-.083.091a1 1 0 0 0-.205.795l.668 3.893-3.497-1.838-.111-.05a1 1 0 0 0-.82.05l-3.497 1.838.669-3.893.013-.122a1 1 0 0 0-.3-.764l-2.83-2.757 3.91-.568a1 1 0 0 0 .753-.547L12 5.258Z"
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
const SmFavoriteStar = withWrapper(Vector);
SmFavoriteStar.groupName = "Actions";
export default SmFavoriteStar;
