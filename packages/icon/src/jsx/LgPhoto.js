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
      d="M49 26v-4a1 1 0 0 1 2 0v4h27.938c2.8 0 5.062 2.297 5.062 5.118v44.764C84 78.703 81.738 81 78.938 81H21.062C18.262 81 16 78.703 16 75.882V31.118C16 28.297 18.262 26 21.062 26H49Zm28 24.566V33.393c0-.222-.167-.393-.36-.393H67a1 1 0 0 1 0-2h9.64c1.309 0 2.36 1.077 2.36 2.393v40.214C79 74.923 77.949 76 76.64 76H23.36C22.051 76 21 74.923 21 73.607V33.393C21 32.077 22.051 31 23.36 31H51a1 1 0 0 1 0 2H23.36c-.193 0-.36.17-.36.393v31.818l15.21-15.888a4.286 4.286 0 0 1 6.013-.177l13.449 12.487 11.784-12.31a4.286 4.286 0 0 1 6.014-.177l1.53 1.42Zm0 2.729-2.89-2.684a2.286 2.286 0 0 0-3.209.094L59.137 62.994l1.462 1.358a1 1 0 0 1-1.36 1.465L42.862 50.611a2.286 2.286 0 0 0-3.208.095L23 68.103v5.504c0 .222.167.393.36.393h53.28c.193 0 .36-.17.36-.393V53.295ZM78.938 78C80.07 78 81 77.057 81 75.882V31.118C81 29.943 80.071 29 78.938 29H21.062C19.93 29 19 29.943 19 31.118v44.764c0 1.175.929 2.118 2.062 2.118h57.876ZM59 33a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-4Zm3.32 34.733a1 1 0 1 1 1.36-1.466l2.793 2.593a1 1 0 1 1-1.36 1.466l-2.793-2.593ZM27 41a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm-2 0a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"
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
const LgPhoto = withWrapper(Vector);
LgPhoto.groupName = "Actions";
export default LgPhoto;
