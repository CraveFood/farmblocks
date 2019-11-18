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
      d="M30 32.018V27a.5.5 0 111 0v5.018h6v-7h-9v7h2zm-9.116-8.343c1.155-.126 1.786-.703 1.786-1.57 0-.792-.397-1.28-1.786-1.713v3.283zm-1.424-8.983c-1.155.11-1.733.722-1.733 1.516 0 .758.343 1.227 1.733 1.677v-3.193zm1.497-2.182v.397a6.566 6.566 0 012.796.992c.288.162.54.433.54.866 0 .56-.45.991-1.01.991-.18 0-.36-.053-.54-.162-.632-.378-1.245-.649-1.86-.793v3.464c2.742.684 3.915 1.785 3.915 3.715 0 1.984-1.551 3.3-3.841 3.517v.475a.77.77 0 01-.777.775.785.785 0 01-.793-.775v-.511a7.795 7.795 0 01-3.697-1.407c-.308-.198-.488-.487-.488-.866 0-.56.433-.992.993-.992.217 0 .433.072.594.198.848.613 1.678 1.029 2.67 1.209V20.05c-2.633-.686-3.86-1.677-3.86-3.715 0-1.93 1.534-3.265 3.788-3.445v-.38c0-.433.36-.775.793-.775a.77.77 0 01.777.775zm1.705 18.166a1 1 0 01.483 1.94C22.124 32.87 21.07 33 20 33c-7.18 0-13-5.82-13-13S12.82 7 20 7c7.179 0 13 5.821 13 13a1 1 0 01-2 0c0-6.074-4.926-11-11-11-6.075 0-11 4.925-11 11s4.925 11 11 11c.907 0 1.799-.11 2.662-.324zM39 24.018v9a1 1 0 01-1 1H27a1 1 0 01-1-1v-9a1 1 0 011-1h11a1 1 0 011 1zM33 28a.5.5 0 110-1h2.444a.5.5 0 110 1H33z"
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
const MdPayOnDelivery2 = withWrapper(Vector);
MdPayOnDelivery2.groupName = "Payment";
export default MdPayOnDelivery2;
