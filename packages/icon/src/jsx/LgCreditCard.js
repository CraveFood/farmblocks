import React from "react";
import PropTypes from "prop-types";

const LgCreditCard = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M80 49.037V42H20v7h3v-3.5a1 1 0 0 1 2 0V49h54.667c.114 0 .226.013.333.037zm0 2.926a1.505 1.505 0 0 1-.333.037H25v13.278c0 .399.323.722.722.722h3.945a1 1 0 0 1 0 2h-3.945A2.722 2.722 0 0 1 23 65.278V52h-3v15.672C20 69.497 21.561 71 23.514 71h52.971C78.44 71 80 69.498 80 67.672v-15.71zM80 39v-6.672C80 30.502 78.44 29 76.485 29H23.514C21.56 29 20 30.503 20 32.328V39h60zm-3.515 35H23.514C19.929 74 17 71.18 17 67.672V32.328C17 28.82 19.93 26 23.514 26h52.971C80.071 26 83 28.82 83 32.328v35.344C83 71.18 80.071 74 76.485 74zm-37.318-8a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2h5zm33-32a1 1 0 0 1 0-2h2.48a1 1 0 0 1 0 2h-2.48zm-18 0a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2h-14zm11.896 25a.063.063 0 0 0-.063.063v7.874c0 .035.028.063.063.063h7.874a.064.064 0 0 0 .063-.063v-7.874a.064.064 0 0 0-.063-.063h-7.874zm0-2h7.874c1.138 0 2.063.924 2.063 2.063v7.874C76 68.076 75.075 69 73.937 69h-7.874A2.063 2.063 0 0 1 64 66.937v-7.874c0-1.14.924-2.063 2.063-2.063z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
LgCreditCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgCreditCard.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgCreditCard.groupName = "Payment";
export default LgCreditCard;
