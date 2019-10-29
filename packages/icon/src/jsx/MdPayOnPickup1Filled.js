import React from "react";
import PropTypes from "prop-types";

const MdPayOnPickup1Filled = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      ref={ref}
      aria-hidden={!props["aria-label"]}
      {...props}
    >
      <path
        d="M31 20.958v6.122A2.92 2.92 0 0 1 28.08 30H7.921A2.92 2.92 0 0 1 5 27.08V12.921A2.92 2.92 0 0 1 7.921 10h16.265c-.122.474-.186.98-.186 1.509 0 2.655.9 5.139 2.391 7.386.517.78 1.07 1.476 1.626 2.08.338.37.606.63.77.775a1 1 0 0 0 .662.25h.103a1 1 0 0 0 .661-.25 11.035 11.035 0 0 0 .787-.792zm-12.288-.182c1.12.349 1.44.741 1.44 1.38 0 .699-.509 1.164-1.44 1.266v-2.646zm-1.148-2.021c-1.12-.363-1.397-.742-1.397-1.352 0-.64.466-1.134 1.397-1.223v2.575zm.581-4.958a.633.633 0 0 0-.64.624v.306c-1.817.146-3.053 1.221-3.053 2.777 0 1.643.99 2.442 3.112 2.995v2.864c-.8-.145-1.469-.48-2.153-.973a.789.789 0 0 0-.479-.16c-.45 0-.8.348-.8.8 0 .304.145.537.393.697a6.284 6.284 0 0 0 2.98 1.134v.412c0 .35.291.625.64.625a.621.621 0 0 0 .626-.625v-.383c1.846-.175 3.096-1.236 3.096-2.835 0-1.555-.945-2.442-3.155-2.995v-2.791c.495.116.99.334 1.498.639a.837.837 0 0 0 .436.13.8.8 0 0 0 .814-.8c0-.348-.203-.566-.435-.697a5.293 5.293 0 0 0-2.254-.8v-.32a.621.621 0 0 0-.626-.624zm11.365 5.827l-.01.01-.01-.01a14.954 14.954 0 0 1-1.432-1.834C26.768 15.845 26 13.726 26 11.509 26 9.419 27.454 8 29.449 8h.103c1.995 0 3.449 1.42 3.448 3.509 0 2.217-.768 4.336-2.057 6.28a14.954 14.954 0 0 1-1.433 1.835zM31 11.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdPayOnPickup1Filled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdPayOnPickup1Filled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdPayOnPickup1Filled.groupName = "Payment";
export default MdPayOnPickup1Filled;
