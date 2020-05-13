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
      d="M27.321 26.578c-.289.148-.592.285-1.007.462l-.119.05c-1.507.637-2.195 1.04-3.363 2.126l-1.17 1.161a2.148 2.148 0 01-3.472-.652 2.15 2.15 0 01-2.416-.423 2.11 2.11 0 01-.62-1.345 2.136 2.136 0 01-1.354-.616 2.109 2.109 0 01-.625-1.431 2.138 2.138 0 01-1.13-.588 2.112 2.112 0 01-.2-2.776 140.443 140.443 0 01-4.768-4.297 148.193 148.193 0 01-1.784-1.71.978.978 0 01-.007-1.389.995.995 0 011.4-.007 146.228 146.228 0 001.754 1.68 138.514 138.514 0 004.08 3.703c.241.208.478.413.713.612l1.077-1.07a2.15 2.15 0 013.024 0c.244.242.419.532.521.843.643-.09 1.32.11 1.816.601.377.375.583.854.62 1.344a2.135 2.135 0 011.974 1.96 2.136 2.136 0 011.912 1.585c.42-.222.881-.433 1.436-.668l.117-.049c.196-.083.362-.156.512-.224a.976.976 0 01.22-.783.995.995 0 011.395-.12c.666.556.862.574 1.668-.103.125-.104.16-.17.166-.237.013-.165-.124-.461-.399-.798a4.428 4.428 0 00-.302-.332 18.71 18.71 0 00-.224-.216c-.494-.486-1.605-1.467-3.278-2.905l-.107-.092c-.285-.244-3.041-2.6-3.497-2.998l-.41.407a3.834 3.834 0 01-.92.685c-1.354.708-2.737.364-3.993-.558a5.968 5.968 0 01-.977-.885.978.978 0 01.054-1.331l2.986-2.965a3.686 3.686 0 00-1.042.087c-.273.058-.5.12-1.017.273l-.038.011c-.81.24-1.215.34-1.738.405-1.293.156-2.892-.428-3.667-1.42a.978.978 0 01.176-1.379.994.994 0 011.388.174c.327.419 1.233.75 1.862.674.378-.047.709-.129 1.415-.338l.037-.01c.566-.168.826-.24 1.166-.312 1.161-.248 2.247-.184 3.13.31.885-.494 1.971-.558 3.131-.31.34.073.602.144 1.167.311l.047.014c.696.206 1.029.289 1.404.334.63.077 1.535-.254 1.862-.673a.994.994 0 011.389-.174c.432.333.51.95.175 1.38-.775.99-2.373 1.575-3.666 1.419-.52-.064-.93-.166-1.729-.402l-.047-.014a12.776 12.776 0 00-1.018-.273c-.781-.167-1.428-.113-1.831.155l-3.408 3.384c.697.501 1.328.652 1.858.374.146-.076.294-.186.444-.336l2.074-2.06a.995.995 0 011.4 0 .978.978 0 010 1.39l-.261.26c.635.55 3.107 2.662 3.39 2.905l.106.092c.647.556 1.21 1.044 1.69 1.464l4.837-4.805a.995.995 0 011.4 0 .978.978 0 010 1.39l-4.769 4.736.218.21c-.02-.02.15.142.236.227.152.153.297.31.435.48.564.69.897 1.407.835 2.189-.048.605-.344 1.151-.863 1.586-1.314 1.101-2.393 1.226-3.48.621zm-13.63-2.122c.034-.04.07-.08.109-.117l2.664-2.645a.646.646 0 00-.18-.583.658.658 0 00-.924 0l-2.267 2.251a.645.645 0 000 .918.656.656 0 00.597.176zm5.98 3.979a.646.646 0 00.017.9.656.656 0 00.924 0l1.957-1.943a.645.645 0 000-.917.658.658 0 00-.924 0l-.286.283-1.688 1.677zm-1.063-1.03l.03-.03 1.672-1.66.284-.283a.645.645 0 000-.917.658.658 0 00-.947.023l-2.824 2.804a.645.645 0 000 .918.657.657 0 00.925 0l.86-.854zm-2.81-1.129l2.822-2.804.02-.018a.646.646 0 00-.02-.9.656.656 0 00-.923 0l-2.848 2.827a.646.646 0 000 .918.658.658 0 00.948-.023z"
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
const MdHandshake = withWrapper(Vector);
MdHandshake.groupName = "Menu";
export default MdHandshake;
