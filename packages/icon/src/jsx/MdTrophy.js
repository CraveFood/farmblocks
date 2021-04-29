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
      d="M30 11V9H10v2h20zm0 1H10v4.396c0 2.488 1.266 4.193 3.46 5.33.797.414 1.66.718 2.525.927.516.125.91.19 1.118.211a1 1 0 01.897.995c0 4.239-2.078 6.42-5.507 7.036-.613.11-1.073.554-1.195 1.105h17.404c-.122-.55-.582-.995-1.195-1.105-3.43-.616-5.507-2.797-5.507-7.036a1 1 0 01.897-.995 9.28 9.28 0 001.118-.21 11.27 11.27 0 002.525-.927c2.194-1.138 3.46-2.843 3.46-5.331V12zM15.515 24.597a13.238 13.238 0 01-2.975-1.095C9.734 22.048 8 19.712 8 16.396V8a1 1 0 011-1h22a1 1 0 011 1v8.396c0 3.316-1.734 5.652-4.54 7.106-.953.494-1.964.85-2.975 1.095-.16.039-.31.073-.451.102.222 2.622 1.533 3.816 3.827 4.227 1.659.298 2.873 1.706 2.873 3.368V33a1 1 0 01-1 1H10.266a1 1 0 01-1-1v-.706c0-1.662 1.214-3.07 2.873-3.368 2.294-.411 3.605-1.605 3.827-4.227-.14-.03-.292-.063-.451-.102zM20 14.5l-.676 1.38a.5.5 0 01-.377.274l-1.52.222 1.103 1.081a.5.5 0 01.143.441l-.26 1.522 1.353-.716a.5.5 0 01.468 0l1.353.716-.26-1.522a.5.5 0 01.143-.44l1.102-1.082-1.52-.222a.5.5 0 01-.376-.275L20 14.498zm-.449-1.357a.5.5 0 01.898 0l1.01 2.06 2.255.33a.5.5 0 01.278.851l-1.635 1.604.387 2.265a.5.5 0 01-.727.526L20 19.711l-2.017 1.067a.5.5 0 01-.727-.526l.387-2.265-1.635-1.604a.5.5 0 01.278-.851l2.256-.33 1.009-2.06z"
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
const MdTrophy = withWrapper(Vector);
MdTrophy.groupName = "Misc";
export default MdTrophy;
