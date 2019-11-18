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
      d="M20 7c7.179 0 13 5.821 13 13 0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7zm.62 7h-1.24c-.619 0-1.235.004-1.857.039-.96.047-1.812.266-2.515.969-.703.703-.922 1.554-.969 2.515C13.992 18.352 14 19.172 14 20c0 .828-.008 1.648.04 2.477.046.96.265 1.812.968 2.515.703.703 1.555.922 2.515.969.829.047 1.649.039 2.477.039h.62c.619 0 1.235-.004 1.857-.04.96-.046 1.812-.265 2.515-.968.703-.703.922-1.555.969-2.515.047-.829.039-1.649.039-2.477v-.62c0-.619-.004-1.235-.039-1.857-.047-.96-.266-1.812-.969-2.515-.703-.703-1.554-.922-2.515-.969C21.648 13.992 20.828 14 20 14zm-4.16 1.32c.79-.312 2.665-.242 3.54-.242s2.75-.07 3.54.242c.273.11.476.242.687.453.21.211.343.414.453.688.312.789.242 2.664.242 3.539s.07 2.75-.242 3.54c-.11.272-.242.476-.453.687-.211.21-.414.343-.688.453-.789.312-2.664.242-3.539.242s-2.75.07-3.54-.242a1.918 1.918 0 01-.687-.453 1.918 1.918 0 01-.453-.688c-.312-.789-.242-2.664-.242-3.539s-.07-2.75.242-3.54c.11-.273.243-.476.453-.687.211-.21.415-.343.688-.453zM20 16.922A3.074 3.074 0 0016.922 20 3.074 3.074 0 0020 23.078 3.074 3.074 0 0023.078 20 3.074 3.074 0 0020 16.922zM20 18c1.102 0 2 .898 2 2 0 1.102-.898 2-2 2-1.102 0-2-.898-2-2 0-1.102.898-2 2-2zm3.203-1.922a.717.717 0 00-.719.719c0 .398.32.719.72.719.398 0 .718-.32.718-.72a.717.717 0 00-.719-.718z"
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
const MdInstagramFilled = withWrapper(Vector);
MdInstagramFilled.groupName = "Social";
export default MdInstagramFilled;
