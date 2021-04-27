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
      d="M29.836 7.5l3.664 3.664 1.086-1.087-3.663-3.663L29.836 7.5zm-1.414 1.415l-9.68 9.68-1.331 4.994 4.995-1.33 9.68-9.681-3.664-3.663zM20.508 14H7.05C6.47 14 6 14.47 6 15.05V17h11.508l3-3zm2-2l7.708-7.708a1 1 0 011.414 0l5.077 5.078a1 1 0 010 1.414L30 17.492V27.95A3.05 3.05 0 0126.95 31H7.05A3.05 3.05 0 014 27.95v-12.9A3.05 3.05 0 017.05 12h15.458zM28 19.492l-4.37 4.37a1 1 0 01-.45.26l-6.923 1.844a1 1 0 01-1.223-1.224L16.83 18H6v9.95c0 .58.47 1.05 1.05 1.05h19.9c.58 0 1.05-.47 1.05-1.05v-8.458zM7 15.5a.5.5 0 111 0 .5.5 0 01-1 0zm2 0a.5.5 0 111 0 .5.5 0 01-1 0zm2 0a.5.5 0 111 0 .5.5 0 01-1 0z"
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
const MdCustomBrand = withWrapper(Vector);
MdCustomBrand.groupName = "Misc";
export default MdCustomBrand;
