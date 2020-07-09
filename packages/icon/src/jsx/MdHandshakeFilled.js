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
      d="M22.765 14.988l6.471 6.471c.051.054.1.102.147.147l.178.177a.76.76 0 00.047.044l.04.042c.12.123.233.25.341.389.72.92.982 1.964.342 2.992a2.918 2.918 0 01-.605.687c-1.603 1.354-2.565 1.466-3.784.488l-2.484 1.103a2.157 2.157 0 00-1.98-2.453 2.15 2.15 0 00-.628-1.368 2.15 2.15 0 00-1.367-.626 2.16 2.16 0 00-2.743-1.92 2.161 2.161 0 00-3.603-.924l-1.976 1.977a2.161 2.161 0 00-.34.44 142.257 142.257 0 01-4.688-4.26 150.184 150.184 0 01-1.803-1.74 1 1 0 01.066-1.48l5.976-4.944a1 1 0 011.428.157c.33.426 1.245.762 1.88.685.383-.047.717-.13 1.43-.343l.038-.011c.571-.17.834-.243 1.178-.317.841-.18 1.643-.199 2.36-.01-.15.177-.302.367-.46.571-.35.458-.686.937-1.198 1.697-1.275 1.89-1.576 2.31-2.07 2.802a.75.75 0 00-.04 1.016c.192.227.515.544.945.862 1.2.887 2.504 1.214 3.769.547.306-.162.597-.38.87-.652l2.263-2.246zm.834-1.883a.75.75 0 00-1.06-.005l-3.096 3.07a2.142 2.142 0 01-.51.389c-.648.341-1.391.155-2.178-.426a5.153 5.153 0 01-.221-.173c.373-.453.808-1.084 1.737-2.462.497-.736.82-1.196 1.147-1.623.73-.955 1.312-1.478 1.707-1.565.086-.018.164-.036.234-.053.416-.002.849.049 1.293.144.344.074.608.147 1.179.317l.047.014c.704.21 1.04.293 1.42.34.635.077 1.55-.26 1.88-.685a1 1 0 011.466-.124l5.377 4.936a1 1 0 01.03 1.444l-3.754 3.755-6.521-6.52a.75.75 0 00-.177-.773zm-3.81 11.663a.66.66 0 010 .934l-2.875 2.877a.66.66 0 01-.934-.933l2.876-2.878a.661.661 0 01.934 0zm-4.87 1.816a.661.661 0 01-.934-.934l2.877-2.876a.66.66 0 11.933.935l-2.876 2.875zm4.889 3.09a.66.66 0 11-.934-.935l1.977-1.976a.661.661 0 01.934.933l-1.977 1.977zm-6.652-5.465a.66.66 0 11-.934-.934l1.977-1.977a.661.661 0 01.934.934l-1.977 1.977z"
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
const MdHandshakeFilled = withWrapper(Vector);
MdHandshakeFilled.groupName = "Menu";
export default MdHandshakeFilled;
