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
      d="M16.207 3.793a1 1 0 01.083 1.32l-.083.094-.793.793H20a2 2 0 011.994 1.85L22 8v10a2 2 0 01-1.85 1.995L20 20H4a2 2 0 01-1.995-1.85L2 18V8a2 2 0 011.85-1.995L4 6h5.03a1 1 0 01.117 1.993L9.031 8H4v10h16V8h-4.585l.792.793a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-2.5-2.5a1 1 0 01-.083-1.32l.083-.094 2.5-2.5a1 1 0 011.414 0zM8.587 9c.275 0 .504.214.54.503l.005.081v.035l.045.007c.318.057.614.158.894.3l.167.092.163.102a.678.678 0 01.353.609c0 .392-.295.693-.657.693a.64.64 0 01-.343-.106 3.784 3.784 0 00-.355-.197l-.171-.077-.132-.049v1.36l.036.011c1.18.34 1.766.885 1.856 1.775l.009.123.003.128c0 .972-.628 1.673-1.611 1.907l-.136.029-.121.02v.07c0 .274-.17.497-.4.564l-.07.015-.074.005a.564.564 0 01-.549-.51l-.004-.074v-.092l-.073-.01a3.804 3.804 0 01-1.26-.457l-.194-.119-.189-.131A.703.703 0 016 15.003c0-.393.288-.694.65-.694a.61.61 0 01.38.132c.264.2.512.346.766.448l.153.056.121.035v-1.42l-.03-.009c-1.182-.35-1.75-.87-1.836-1.775l-.008-.126-.003-.125c0-.955.63-1.658 1.596-1.877l.133-.027.113-.018v-.019c0-.276.178-.5.413-.565l.071-.015L8.588 9zm.509 4.843v1.185l.022-.004c.312-.08.481-.254.51-.496l.004-.074c0-.258-.106-.422-.447-.574l-.089-.037zM8.07 12.05v-1.138l-.014.003c-.33.083-.495.282-.495.547 0 .25.096.404.428.554l.081.034z"
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
const SmRefund = withWrapper(Vector);
SmRefund.groupName = "Payment";
export default SmRefund;
