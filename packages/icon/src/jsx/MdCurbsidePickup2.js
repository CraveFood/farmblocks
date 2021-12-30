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
      d="M21.139 32H24v-3a1 1 0 0 1 1-1h3v-7.514a13.948 13.948 0 0 1-1.847-2.197C24.812 16.34 24 14.18 24 11.865 24 9.03 26.156 7 28.954 7h.092C31.845 7 34 9.03 34 11.865c0 2.314-.812 4.474-2.153 6.424-.66.96-1.323 1.702-1.847 2.197V28h2.238a1 1 0 0 1 0 2H26v3a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2H7.14v-2.226A3.375 3.375 0 0 1 5 26.626v-8.5C5 14.745 7.713 12 11.064 12h5.872C20.287 12 23 14.746 23 18.125v8.5a3.378 3.378 0 0 1-1.861 3.025V32Zm-2 0v-2h-10v2h10ZM21 20H7v6.626C7 27.387 7.605 28 8.346 28h11.308c.74 0 1.346-.613 1.346-1.374V20Zm0-1v-.875C21 15.845 19.177 14 16.936 14h-5.872C8.823 14 7 15.845 7 18.125V19h14Zm9.2-1.844c1.129-1.643 1.8-3.429 1.8-5.291C32 10.162 30.766 9 29.046 9h-.092C27.234 9 26 10.162 26 11.865c0 1.862.671 3.648 1.8 5.29.383.556.791 1.056 1.2 1.492.409-.436.817-.936 1.2-1.491ZM9 27a.5.5 0 1 1 0-1h10a.5.5 0 1 1 0 1H9Zm2-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11-11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
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
const MdCurbsidePickup2 = withWrapper(Vector);
MdCurbsidePickup2.groupName = "Delivery";
export default MdCurbsidePickup2;
