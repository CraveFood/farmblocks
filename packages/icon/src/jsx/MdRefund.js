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
      d="M23.972 10h6.107a2.92 2.92 0 0 1 2.92 2.92v14.16A2.92 2.92 0 0 1 30.08 30H9.919A2.92 2.92 0 0 1 7 27.08V12.92A2.92 2.92 0 0 1 9.92 10h6.639a1 1 0 0 1 0 2H9.92a.92.92 0 0 0-.92.92v14.16c0 .508.412.92.92.92h20.159a.92.92 0 0 0 .92-.92V12.92a.92.92 0 0 0-.92-.92h-6.107l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L23.972 10Zm-7.259 10.928v2.646c.931-.102 1.44-.567 1.44-1.265 0-.639-.32-1.032-1.44-1.38Zm-1.149-2.02v-2.575c-.93.088-1.396.582-1.396 1.222 0 .61.276.99 1.396 1.352Zm.582-4.959a.62.62 0 0 1 .625.625v.32a5.293 5.293 0 0 1 2.254.8c.232.13.435.35.435.697a.8.8 0 0 1-.813.8.837.837 0 0 1-.437-.13c-.509-.306-1.003-.524-1.497-.64v2.791c2.21.553 3.154 1.44 3.154 2.996 0 1.6-1.25 2.66-3.096 2.835v.383a.62.62 0 0 1-.625.625.632.632 0 0 1-.64-.625v-.412a6.28 6.28 0 0 1-2.98-1.134c-.248-.16-.394-.393-.394-.698 0-.45.35-.8.8-.8.175 0 .35.058.48.16.684.494 1.352.83 2.152.974v-2.864c-2.122-.553-3.112-1.352-3.112-2.995 0-1.556 1.237-2.632 3.054-2.778v-.305c0-.349.29-.625.64-.625Z"
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
const MdRefund = withWrapper(Vector);
MdRefund.groupName = "Payment";
export default MdRefund;
