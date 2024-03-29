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
      d="M20.5 9.436a1 1 0 0 1 .08.05l6.986 4.791a1 1 0 0 1 .434.825v1.302l2.917.29A3.084 3.084 0 0 1 34 19.78V30c1.333 0 1.333 2 0 2H6c-1.333 0-1.333-2 0-2V19.779c0-1.703 1.38-3.084 2.985-3.08L12 16.404v-1.301a1 1 0 0 1 .434-.825l6.986-4.792a1 1 0 0 1 .08-.05V5.5a.5.5 0 0 1 .653-.476l3.734 1.197a.5.5 0 0 1 .045.935L20.5 8.634v.802ZM20.5 27v3H24v-3h-3.5Zm-1 0H16v3h3.5v-3Zm0-4v-1H16v1h3.5Zm1 0H24v-1h-3.5v1ZM15 30v-3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V30h7V19.779c0-.599-.485-1.084-1.18-1.089l-3.918-.385A1 1 0 0 1 26 17.31v-1.681l-6-4.116-6 4.116v1.68a1 1 0 0 1-.902.996l-4.015.39c-.598 0-1.083.485-1.083 1.084V30h7Zm10-9v3H15v-3h10Zm-6.5-4.69a1.5 1.5 0 1 0 3.001-.002 1.5 1.5 0 0 0-3.001.002Zm-1 0a2.5 2.5 0 1 1 5.001.001 2.5 2.5 0 0 1-5.001-.001ZM11 23h2v-1h-2v1Zm-1 1v-3h4v3h-4Zm1 4h2v-1h-2v1Zm-1 1v-3h4v3h-4Zm17-6h2v-1h-2v1Zm-1 1v-3h4v3h-4Zm1 4h2v-1h-2v1Zm-1 1v-3h4v3h-4ZM22.31 6.765l-1.81-.58v1.36l1.81-.78Z"
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
const MdSchools = withWrapper(Vector);
MdSchools.groupName = "Business";
export default MdSchools;
