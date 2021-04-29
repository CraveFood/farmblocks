import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.132 4.75l-.103.006-.108.019c-.316.077-.564.323-.61.635l-.009.106v.026l-.169.023-.2.035c-1.382.275-2.306 1.128-2.388 2.295l-.005.169.004.164.013.166c.121 1.134.905 1.806 2.518 2.265l.28.075v1.865l-.181-.047-.23-.073a5.213 5.213 0 01-1.149-.587.999.999 0 00-.571-.174c-.541 0-.974.395-.974.911 0 .296.133.543.37.72l.109.072.283.173.291.156c.492.248 1.015.43 1.56.542l.33.059.109.012v.12l.007.098c.047.349.345.616.711.662l.112.007.11-.007.106-.02a.778.778 0 00.593-.634l.007-.105v-.093l.18-.026.205-.038c1.407-.292 2.33-1.145 2.411-2.33l.006-.173-.005-.167-.013-.162c-.128-1.115-.934-1.817-2.548-2.267l-.29-.076V9.366l.198.064.257.1c.172.074.35.16.531.26.167.092.34.139.515.139.543 0 .987-.395.987-.91 0-.323-.163-.573-.427-.74l-.103-.06-.245-.133-.25-.12a5.237 5.237 0 00-1.059-.343l-.282-.052-.068-.009v-.046l-.007-.105c-.05-.345-.338-.61-.699-.654l-.11-.007zm.762 6.357l.134.049c.464.18.638.375.666.663l.004.089-.006.098c-.038.282-.243.493-.617.61l-.148.04-.033.006v-1.555zm-1.539-3.849v1.494l-.121-.044c-.499-.198-.642-.4-.642-.728 0-.312.2-.556.6-.68l.142-.037.021-.005z"
      fill={color}
      fillRule="evenodd"
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
const SmGeneralPaymentFilled = withWrapper(Vector);
SmGeneralPaymentFilled.groupName = "Payment";
export default SmGeneralPaymentFilled;
