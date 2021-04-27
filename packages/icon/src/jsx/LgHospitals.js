import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M37 44v-4.408a1.5 1.5 0 013 0V80.24a1.5 1.5 0 01-3 0V75h-8a1 1 0 01-1-1v-6.968a1.018 1.018 0 010-.064V60a1 1 0 011-1h8v-5H23v22.5a1.5 1.5 0 01-3 0v-24a1.5 1.5 0 011.5-1.5H27v-5.5a1.5 1.5 0 011.5-1.5H37zm0 3h-7v4h7v-4zm9.074-22h24.991v-.02L70.962 21H45.974l.1 3.904V25zm-2.998 0v-.02L42.973 21h-4.472a1.5 1.5 0 110-3H78.5a1.5 1.5 0 010 3h-4.537l.1 3.904c.002.032.001.064 0 .096h4.438a1.5 1.5 0 011.5 1.5v46a1.5 1.5 0 01-3 0V28H40v7.044a1.5 1.5 0 01-3 0V26.5a1.5 1.5 0 011.5-1.5h4.575zM59 73v7.24a.5.5 0 11-1 0V73H46v7a1 1 0 01-2 0v-8a1 1 0 011-1h27a1 1 0 011 1v8a1 1 0 01-2 0v-7H59zm-9-8h8v-5H46v5h2v-1.881a1 1 0 012 0V65zm9 0h12v-5H59v5zm-9-13h8v-5H46v5h2v-1.881a1 1 0 012 0V52zm9 0h12v-5H59v5zM37 66v-5h-7v5h7zm0 2h-7v5h7v-5zm43 12.24a1.5 1.5 0 01-3 0v-3.121a1.5 1.5 0 013 0v3.12zM45 45h27a1 1 0 011 1v7a1 1 0 01-1 1H45a1 1 0 01-1-1v-7a1 1 0 011-1zm0 13h27a1 1 0 011 1v7a1 1 0 01-1 1H45a1 1 0 01-1-1v-7a1 1 0 011-1zm9.743-22.667c-.582 0-1.078.385-1.143.849a1 1 0 00.99 1.151h1.299c.889 0 1.61.722 1.61 1.611v1.3c0 .608.535 1.076 1.152.99.465-.066.849-.56.849-1.144v-1.146c0-.89.721-1.61 1.61-1.61h1.3a1 1 0 00.99-1.153c-.066-.463-.56-.848-1.142-.848H61.11a1.61 1.61 0 01-1.611-1.61v-1.3c0-.608-.535-1.076-1.152-.99-.464.066-.848.56-.848 1.143v1.146a1.61 1.61 0 01-1.611 1.611h-1.146zm-.153 4a3 3 0 01-2.97-3.43c.211-1.501 1.588-2.57 3.123-2.57h.757v-.757c0-1.536 1.069-2.913 2.57-3.123a3.001 3.001 0 013.43 2.97v.91h.758c1.534 0 2.912 1.069 3.122 2.57a3 3 0 01-2.97 3.43h-.91v.757c0 1.536-1.068 2.913-2.57 3.125a3.002 3.002 0 01-3.43-2.97v-.912h-.91z"
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
const LgHospitals = withWrapper(Vector);
LgHospitals.groupName = "Business";
export default LgHospitals;
