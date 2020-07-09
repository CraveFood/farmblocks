import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M80 48.586v-4.172L68.207 56.207a1 1 0 01-1.414-1.414L80 41.586V30.128H58v40.457l12.793-12.792a1 1 0 011.414 1.414L58.32 73.094H80v-21.68l-3.793 3.793a1 1 0 01-1.414-1.414L80 48.586zM55 37.414l-5.793 5.793a1 1 0 01-1.414-1.414L55 34.585V19.69A4.69 4.69 0 0050.31 15H47.5v2.263a3.238 3.238 0 01-3.237 3.237H30.737a3.238 3.238 0 01-3.237-3.237V15h-2.81A4.69 4.69 0 0020 19.689v59.622A4.69 4.69 0 0024.69 84h25.62C52.9 84 55 81.9 55 79.311V37.414zM58 25v3.128h22v-2.439A4.69 4.69 0 0075.311 21h-17.31v3H67.5a.5.5 0 110 1H58zm0 50.094v4.217A7.655 7.655 0 0156.406 84h18.906A4.69 4.69 0 0080 79.311v-4.217H58zM57.815 18h17.497A7.69 7.69 0 0183 25.689v53.622A7.69 7.69 0 0175.311 87H24.689A7.69 7.69 0 0117 79.311V19.689A7.69 7.69 0 0124.69 12h25.62a7.693 7.693 0 017.504 6zM45.5 15h-16v2.263c0 .683.554 1.237 1.237 1.237h13.526c.683 0 1.237-.554 1.237-1.237V15zM29.614 81.902a.5.5 0 110-1h15.771a.5.5 0 110 1h-15.77zM60 79.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zm-1 0a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM37.793 51.793a1 1 0 011.414 1.414l-14.659 14.66a1 1 0 01-1.414-1.415l14.659-14.66zm7-7a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414-1.414l2-2zm-10 17a1 1 0 011.414 1.414l-3.5 3.5a1 1 0 01-1.414-1.414l3.5-3.5zm17-17a1 1 0 011.414 1.414l-13 13a1 1 0 01-1.414-1.414l13-13zm13 12a1 1 0 011.414 1.414l-1.5 1.5a1 1 0 01-1.414-1.414l1.5-1.5z"
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
const LgMobileDevices = withWrapper(Vector);
LgMobileDevices.groupName = "Misc";
export default LgMobileDevices;
