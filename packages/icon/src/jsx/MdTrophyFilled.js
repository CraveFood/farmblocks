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
      d="M32 12v4.396c0 3.316-1.734 5.652-4.54 7.106-.953.494-1.964.85-2.975 1.095-.16.039-.31.073-.451.102.222 2.622 1.533 3.816 3.827 4.227 1.659.298 2.873 1.706 2.873 3.368V33a1 1 0 0 1-1 1H10.266a1 1 0 0 1-1-1v-.706c0-1.662 1.214-3.07 2.873-3.368 2.294-.411 3.605-1.605 3.827-4.227-.14-.03-.292-.063-.451-.102a13.238 13.238 0 0 1-2.975-1.095C9.734 22.048 8 19.712 8 16.396V12h24Zm-12 1.362-1.125 2.296-2.517.368 1.822 1.787-.431 2.523L20 19.146l2.251 1.19-.431-2.523 1.822-1.787-2.517-.368L20 13.362ZM31 7a1 1 0 0 1 1 1v3H8V8a1 1 0 0 1 1-1h22Z"
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
const MdTrophyFilled = withWrapper(Vector);
MdTrophyFilled.groupName = "Misc";
export default MdTrophyFilled;
