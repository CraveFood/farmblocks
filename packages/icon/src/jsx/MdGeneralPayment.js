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
      d="M20 7c7.18 0 13 5.82 13 13s-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7zm0 2C13.925 9 9 13.925 9 20s4.925 11 11 11 11-4.925 11-11S26.075 9 20 9zm.078 3.5a.77.77 0 01.777.775v.397a6.566 6.566 0 012.796.993c.288.16.54.433.54.866 0 .559-.451.99-1.01.99-.18 0-.36-.053-.541-.162-.632-.378-1.245-.649-1.859-.793v3.464c2.742.685 3.914 1.785 3.914 3.715 0 1.984-1.55 3.3-3.84 3.517v.475a.77.77 0 01-.777.775.785.785 0 01-.794-.775v-.51a7.795 7.795 0 01-3.696-1.408c-.308-.198-.488-.487-.488-.866 0-.559.433-.992.992-.992.217 0 .433.072.595.199.848.612 1.678 1.028 2.67 1.208v-3.553c-2.633-.686-3.86-1.677-3.86-3.715 0-1.93 1.533-3.265 3.787-3.445v-.38c0-.433.361-.775.794-.775zm.703 8.657v3.283c1.155-.126 1.787-.702 1.787-1.57 0-.792-.397-1.28-1.787-1.713zm-1.424-5.7c-1.155.11-1.733.722-1.733 1.516 0 .758.344 1.227 1.733 1.677v-3.193z"
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
const MdGeneralPayment = withWrapper(Vector);
MdGeneralPayment.groupName = "Payment";
export default MdGeneralPayment;
