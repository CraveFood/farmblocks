import React from "react";
import PropTypes from "prop-types";

const MdCustomBrand = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M29.836 7.5l3.664 3.664 1.086-1.087-3.663-3.663L29.836 7.5zm-1.414 1.415l-9.68 9.68-1.331 4.994 4.995-1.33 9.68-9.681-3.664-3.663zM20.508 14H7.05C6.47 14 6 14.47 6 15.05V17h11.508l3-3zm2-2l7.708-7.708a1 1 0 0 1 1.414 0l5.077 5.078a1 1 0 0 1 0 1.414L30 17.492V27.95A3.05 3.05 0 0 1 26.95 31H7.05A3.05 3.05 0 0 1 4 27.95v-12.9A3.05 3.05 0 0 1 7.05 12h15.458zM28 19.492l-4.37 4.37a1 1 0 0 1-.45.26l-6.923 1.844a1 1 0 0 1-1.223-1.224L16.83 18H6v9.95c0 .58.47 1.05 1.05 1.05h19.9c.58 0 1.05-.47 1.05-1.05v-8.458zM7 15.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdCustomBrand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCustomBrand.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCustomBrand.groupName = "Misc";
export default MdCustomBrand;
