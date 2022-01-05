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
      d="M30.01 19a.503.503 0 0 1-.01-.095V17a.5.5 0 1 1 1 0v1.905a.503.503 0 0 1-.01.095H34v-.448C34 15.47 31.699 13 28.895 13H27v6h3.01ZM34 20h-7v5h.584a3.001 3.001 0 0 1 5.732 0H34v-5Zm-12 0H6v3.728C6 24.442 6.524 25 7.142 25c.019 0 .038 0 .056.002A3 3 0 0 1 12.933 25h2.358a3 3 0 0 1 5.733 0H22v-5Zm0-1v-2H6v2h16Zm.526-4h.473a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2.054a3.002 3.002 0 0 1-5.574 0h-2.518a3.002 3.002 0 0 1-5.577-.009 1.01 1.01 0 0 1-.133.009C5.393 27 4 25.522 4 23.728V16a1 1 0 0 1 1-1h.476c.445-2.513 4.032-4 8.524-4 4.494 0 8.081 1.487 8.527 4Zm-2.11 0c-.631-1.082-3.125-2-6.417-2-3.29 0-5.783.918-6.415 2h12.833Zm12.82 12a3.002 3.002 0 0 1-5.573 0H26a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h2.895C32.836 11 36 14.396 36 18.552V26a1 1 0 0 1-1 1h-1.763Zm-22.17-1.112a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm8.092 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm12.292 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
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
const MdDeliveryByFarm2 = withWrapper(Vector);
MdDeliveryByFarm2.groupName = "Delivery";
export default MdDeliveryByFarm2;
