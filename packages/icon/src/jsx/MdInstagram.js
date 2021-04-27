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
      d="M31 20c0-6.074-4.926-11-11-11-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11zm2 0c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-11 0c0 1.102-.898 2-2 2-1.102 0-2-.898-2-2 0-1.102.898-2 2-2 1.102 0 2 .898 2 2zm1.078 0A3.074 3.074 0 0020 16.922 3.074 3.074 0 0016.922 20 3.074 3.074 0 0020 23.078 3.074 3.074 0 0023.078 20zm.844-3.203a.717.717 0 00-.719-.719.717.717 0 00-.719.719c0 .398.32.719.72.719.398 0 .718-.32.718-.72zM26 20c0 .828.008 1.648-.039 2.477-.047.96-.266 1.812-.969 2.515-.703.703-1.554.922-2.515.969-.829.047-1.649.039-2.477.039-.828 0-1.648.008-2.477-.04-.96-.046-1.812-.265-2.515-.968-.703-.703-.922-1.555-.969-2.515C13.992 21.648 14 20.828 14 20c0-.828-.008-1.648.04-2.477.046-.96.265-1.812.968-2.515.703-.703 1.555-.922 2.515-.969C18.352 13.992 19.172 14 20 14c.828 0 1.648-.008 2.477.039.96.047 1.812.266 2.515.969.703.703.922 1.554.969 2.515.047.829.039 1.649.039 2.477z"
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
const MdInstagram = withWrapper(Vector);
MdInstagram.groupName = "Social";
export default MdInstagram;
