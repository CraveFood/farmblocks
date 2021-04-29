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
      d="M80 56v-3.447a.5.5 0 111 0v3.52c.158-.056.328-.087.505-.086l2.495.008v-9.983l-2.488.02a1.496 1.496 0 01-.557-.102 1.5 1.5 0 01-.455.07H64.885C62.808 46 61 48.183 61 51s1.808 5 3.885 5H80zM69.724 29l1.371 3.973h2.655a1 1 0 010 2H25.932c-.03 0-.06-.001-.09-.004a1 1 0 01-.358-1.96L40.007 29H23.514C21.56 29 20 30.503 20 32.328v35.344C20 69.497 21.56 71 23.514 71h52.971C78.44 71 80 69.498 80 67.672V59H64.885C61.014 59 58 55.363 58 51c0-4.363 3.014-8 6.885-8H80V32.328C80 30.502 78.44 29 76.485 29h-6.761zm-2.208-6.397L69.246 26h7.24C80.07 26 83 28.82 83 32.328V43.02l2.488-.02A1.5 1.5 0 0187 44.5v13a1.5 1.5 0 01-1.505 1.5L83 58.992v8.68C83 71.18 80.071 74 76.485 74H23.514C19.928 74 17 71.18 17 67.672V32.328C17 28.82 19.928 26 23.514 26H48.31l17.351-4.453a1.5 1.5 0 011.361.324.997.997 0 01.422.526l.071.206zm.013 6.168a1.499 1.499 0 01-.54-.59l-1.745-3.43-16.371 4.202A1.5 1.5 0 0148.5 29h-.978L33.13 32.973h35.85l-1.451-4.202zM40 66a1 1 0 010 2H25.719A2.72 2.72 0 0123 65.282V58.5a1 1 0 012 0v6.782a.72.72 0 00.719.718H40zm6.907 0a1 1 0 110 2h-3a1 1 0 010-2h3zM25 53.723a1 1 0 01-2 0v-8a1 1 0 012 0v8zM69 51a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm2 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm9-2.5a.5.5 0 111 0v1.223a.5.5 0 11-1 0V48.5z"
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
const LgWallet = withWrapper(Vector);
LgWallet.groupName = "Payment";
export default LgWallet;
