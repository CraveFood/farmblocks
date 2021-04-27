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
      d="M80 49.037v-2.48a1.5 1.5 0 013 0v21.115C83 71.18 80.071 74 76.485 74H23.514C19.929 74 17 71.18 17 67.672V32.328C17 28.82 19.93 26 23.514 26h39.055a1.5 1.5 0 110 3H23.514C21.56 29 20 30.503 20 32.328V39h52.338A13.974 13.974 0 0167 28c0-7.732 6.268-14 14-14s14 6.268 14 14c0 7.734-6.268 14-14 14-.239 0-.476-.006-.712-.018a1.511 1.511 0 01-.232.018H20v7h3v-3.5a1 1 0 012 0V49h54.667c.114 0 .226.013.333.037zm0 2.926a1.505 1.505 0 01-.333.037H25v13.278c0 .399.323.722.722.722h3.945a1 1 0 010 2h-3.945A2.722 2.722 0 0123 65.278V52h-3v15.672C20 69.497 21.561 71 23.514 71h52.971C78.44 71 80 69.498 80 67.672v-15.71zM39.167 66a1 1 0 010 2h-5a1 1 0 010-2h5zm26.896-7a.063.063 0 00-.063.063v7.874c0 .035.028.063.063.063h7.874a.064.064 0 00.063-.063v-7.874a.064.064 0 00-.063-.063h-7.874zm0-2h7.874c1.138 0 2.063.924 2.063 2.063v7.874C76 68.076 75.075 69 73.937 69h-7.874A2.063 2.063 0 0164 66.937v-7.874c0-1.14.924-2.063 2.063-2.063zM74 30a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4z"
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
const LgCreditCardPending = withWrapper(Vector);
LgCreditCardPending.groupName = "Payment";
export default LgCreditCardPending;
