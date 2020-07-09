import React from "react";
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
      d="M31.528 17.337L30.512 27.94a1 1 0 01-.516.782l-9.43 5.155-.066-.122v-9.514a.5.5 0 10-1 0v9.481l-.084.155-9.43-5.155a1 1 0 01-.515-.782L8.05 13.13l11.417 5.4a1 1 0 00.451.096l.091-.002a1 1 0 00.404-.096l4.547-2.15a5.981 5.981 0 01-1.262-1.616l-3.76 1.779-10.826-5.12 10.39-4.444a1 1 0 01.393-.08h.19a1 1 0 01.394.08L24.09 8.52a5.96 5.96 0 117.437 8.816zm-3.234-4.116l-.987-1.35a1 1 0 10-1.614 1.18l1.857 2.54a1 1 0 001.653-.059l3.144-5a1 1 0 10-1.694-1.064l-2.359 3.753z"
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
const MdDeliveredFilled = withWrapper(Vector);
MdDeliveredFilled.groupName = "States";
export default MdDeliveredFilled;
