import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M31 20c0-6.074-4.926-11-11-11-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11Zm2 0c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13Zm-9.423.616a.5.5 0 0 0 0-.832l-4.599-3.065a.5.5 0 0 0-.777.416v6.131a.5.5 0 0 0 .777.416l4.599-3.066Zm1.11 1.665-4.6 3.065a2.5 2.5 0 0 1-3.886-2.08v-6.131a2.5 2.5 0 0 1 3.886-2.08l4.6 3.065a2.5 2.5 0 0 1 0 4.16Z"
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
const MdVideoPlay = withWrapper(Vector);
MdVideoPlay.groupName = "Actions";
export default MdVideoPlay;
