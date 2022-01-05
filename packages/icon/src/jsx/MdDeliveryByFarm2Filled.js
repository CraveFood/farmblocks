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
      d="M15.37 27h-2.517a3.002 3.002 0 0 1-5.577-.009 1.01 1.01 0 0 1-.133.009C5.393 27 4 25.522 4 23.728V16a1 1 0 0 1 1-1h.476c.445-2.513 4.032-4 8.524-4 4.494 0 8.081 1.487 8.527 4h.473a1 1 0 0 1 1 1v3H4v1h20v6a1 1 0 0 1-1 1h-2.055a3.002 3.002 0 0 1-5.574 0Zm17.867 0a3.002 3.002 0 0 1-5.574 0H26a1 1 0 0 1-1-1v-6h11v6a1 1 0 0 1-1 1h-1.763ZM7.584 15h12.833c-.632-1.082-3.126-2-6.418-2-3.29 0-5.783.918-6.415 2ZM25 19v-7a1 1 0 0 1 1-1h2.895C32.836 11 36 14.396 36 18.552V19h-5v-2.484a.508.508 0 0 0-.5-.516c-.276 0-.5.231-.5.516V19h-5Zm-13.934 6.888a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm8.092 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm12.292 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
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
const MdDeliveryByFarm2Filled = withWrapper(Vector);
MdDeliveryByFarm2Filled.groupName = "Delivery";
export default MdDeliveryByFarm2Filled;
