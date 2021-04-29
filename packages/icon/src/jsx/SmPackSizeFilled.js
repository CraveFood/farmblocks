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
      d="M20.923 7.84l-.928 9.755a1 1 0 01-.493.77l-.108.054-5.837 2.501a.4.4 0 01-.557-.368V15l-.007-.117a1 1 0 00-1.986 0L11 15v5.552a.4.4 0 01-.558.368l-5.836-2.5a1 1 0 01-.583-.706l-.018-.12-.929-9.755a.4.4 0 01.577-.395l7.913 3.956.106.045.08.024.1.02.096.01.06.001.103-.006.14-.026.089-.027.107-.047 7.9-3.95a.4.4 0 01.576.395zM12.27 2.536l.13.047 6.256 2.736a.4.4 0 01.019.724l-6.496 3.248a.4.4 0 01-.358 0L5.326 6.044a.4.4 0 01.018-.724L11.6 2.584a1 1 0 01.537-.075l.134.028z"
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
const SmPackSizeFilled = withWrapper(Vector);
SmPackSizeFilled.groupName = "Actions";
export default SmPackSizeFilled;
