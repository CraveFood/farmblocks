import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M19.5 6.009V20.5a.51.51 0 000 .01v9.99a.51.51 0 000 .01v1.99a.51.51 0 000 .01v1.481C12 33.728 6 27.565 6 20c0-7.565 6-13.728 13.5-13.991zm1 27.982V33l4.704.001a13.942 13.942 0 01-4.703.99zm6.714-1.99L20.5 32v-1h8.16c-.46.363-.942.698-1.446 1.001zm2.584-2L20.5 30v-1h10.224c-.293.349-.602.682-.926 1zM31.49 28H20.5v-1h11.627c-.198.343-.41.676-.636 1zm1.162-2H20.5v-1h12.58c-.13.34-.272.674-.427 1zm.767-2H20.5v-1h13.178c-.074.339-.16.672-.258 1zm.438-2H20.5v-1h13.465c-.024.337-.06.67-.107 1zM20.501 6.01C28 6.272 34 12.435 34 20H20.5V6.009z"
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
const MdData2Filled = withWrapper(Vector);
MdData2Filled.groupName = "Misc";
export default MdData2Filled;
