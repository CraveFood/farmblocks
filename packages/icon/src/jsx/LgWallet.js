import React from "react";
import PropTypes from "prop-types";

const LgWallet = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M80 56v-3.447a.5.5 0 1 1 1 0v3.52c.158-.056.328-.087.505-.086l2.495.008v-9.983l-2.488.02a1.496 1.496 0 0 1-.557-.102 1.5 1.5 0 0 1-.455.07H64.885C62.808 46 61 48.183 61 51s1.808 5 3.885 5H80zM69.724 29l1.371 3.973h2.655a1 1 0 0 1 0 2H25.932c-.03 0-.06-.001-.09-.004a1 1 0 0 1-.358-1.96L40.007 29H23.514C21.56 29 20 30.503 20 32.328v35.344C20 69.497 21.56 71 23.514 71h52.971C78.44 71 80 69.498 80 67.672V59H64.885C61.014 59 58 55.363 58 51c0-4.363 3.014-8 6.885-8H80V32.328C80 30.502 78.44 29 76.485 29h-6.761zm-2.208-6.397L69.246 26h7.24C80.07 26 83 28.82 83 32.328V43.02l2.488-.02A1.5 1.5 0 0 1 87 44.5v13a1.5 1.5 0 0 1-1.505 1.5L83 58.992v8.68C83 71.18 80.071 74 76.485 74H23.514C19.928 74 17 71.18 17 67.672V32.328C17 28.82 19.928 26 23.514 26H48.31l17.351-4.453a1.5 1.5 0 0 1 1.361.324.997.997 0 0 1 .422.526l.071.206zm.013 6.168a1.499 1.499 0 0 1-.54-.59l-1.745-3.43-16.371 4.202A1.5 1.5 0 0 1 48.5 29h-.978L33.13 32.973h35.85l-1.451-4.202zM40 66a1 1 0 0 1 0 2H25.719A2.72 2.72 0 0 1 23 65.282V58.5a1 1 0 0 1 2 0v6.782a.72.72 0 0 0 .719.718H40zm6.907 0a1 1 0 1 1 0 2h-3a1 1 0 0 1 0-2h3zM25 53.723a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0v8zM69 51a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm2 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm9-2.5a.5.5 0 1 1 1 0v1.223a.5.5 0 1 1-1 0V48.5z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgWallet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
LgWallet.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgWallet.groupName = "Payment";
export default LgWallet;
