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
      d="M20.884 23.675c1.155-.126 1.786-.703 1.786-1.57 0-.792-.397-1.28-1.786-1.713v3.283Zm-1.424-8.983c-1.155.11-1.733.722-1.733 1.516 0 .758.343 1.227 1.733 1.677v-3.193Zm1.497-2.182v.397a6.566 6.566 0 0 1 2.796.992c.288.162.54.433.54.866 0 .56-.45.991-1.01.991-.18 0-.36-.053-.54-.162-.632-.378-1.245-.649-1.86-.793v3.464c2.742.684 3.915 1.785 3.915 3.715 0 1.984-1.551 3.3-3.841 3.517v.475a.77.77 0 0 1-.777.775.785.785 0 0 1-.793-.775v-.511a7.795 7.795 0 0 1-3.697-1.407c-.308-.198-.488-.487-.488-.866 0-.56.433-.992.993-.992.217 0 .433.072.594.198.848.613 1.678 1.029 2.67 1.209V20.05c-2.633-.686-3.86-1.677-3.86-3.715 0-1.93 1.534-3.265 3.788-3.445v-.38c0-.433.36-.775.793-.775a.77.77 0 0 1 .777.775ZM30 29.84l1.747-1.998a1 1 0 0 1 1.506 1.318l-3.5 4a1 1 0 0 1-1.506 0l-3.5-4a1 1 0 0 1 1.506-1.318L28 29.84V23.5a1 1 0 0 1 2 0v6.339Zm-7.338.837a1 1 0 0 1 .483 1.94C22.124 32.87 21.07 33 20 33c-7.18 0-13-5.82-13-13S12.82 7 20 7c7.179 0 13 5.821 13 13a1 1 0 0 1-2 0c0-6.074-4.926-11-11-11-6.075 0-11 4.925-11 11s4.925 11 11 11c.907 0 1.799-.11 2.662-.324Z"
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
const MdFee2 = withWrapper(Vector);
MdFee2.groupName = "Payment";
export default MdFee2;
