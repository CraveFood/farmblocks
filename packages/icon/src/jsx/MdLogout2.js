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
      d="M26 8a3 3 0 012.995 2.824L29 11v1.053a1 1 0 01-1.993.117L27 12.053V11a1 1 0 00-.883-.993L26 10H13a1 1 0 00-.993.883L12 11v18a1 1 0 00.883.993L13 30h13a1 1 0 00.993-.883L27 29v-.958a1 1 0 011.993-.117l.007.117V29a3 3 0 01-2.824 2.995L26 32H13a3 3 0 01-2.995-2.824L10 29V11a3 3 0 012.824-2.995L13 8h13zm-1.489 5.14l.102.07.094.083 6 6c.036.035.068.073.097.112l.071.11.054.114.035.105.03.148L31 20l-.003.075-.017.126-.03.111-.044.111-.052.098-.074.104-.073.082-6 6a1 1 0 01-1.497-1.32l.083-.094L27.585 21h-10.57a1 1 0 01-.116-1.993l.116-.007h10.57l-4.292-4.293a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.218-.153z"
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
const MdLogout2 = withWrapper(Vector);
MdLogout2.groupName = "Actions";
export default MdLogout2;
