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
      d="M35 62v-7h-8v7h8Zm0 2h-8v5h2a1 1 0 0 1 1 1v3h2v-3a1 1 0 0 1 1-1h2v-5Zm38-2v-7h-8v7h8Zm0 2h-8v5h2a1 1 0 0 1 1 1v3h2v-3a1 1 0 0 1 1-1h2v-5Zm-31-2h1.783c1.158-2.366 3.486-3.992 6.189-4 2.716-.009 5.063 1.62 6.227 4H58v-7H42v7Zm0 2v5h1.01L43 65.428A7.877 7.877 0 0 1 43.127 64H42Zm14.854 0c.082.45.125.915.126 1.39l.01 3.61H58v-5h-1.146ZM63 62.81v-8.62a1.005 1.005 0 0 1 0-.38V50h-3v19h3v-5.81a1.005 1.005 0 0 1 0-.38ZM35 53v-3h-2a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1h-2v3h8Zm38 0v-3h-2a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1h-2v3h8Zm-31 0h16v-3h-2a1 1 0 0 1-1-1v-3H45v3a1 1 0 0 1-1 1h-2v3Zm15 20h9v-2h-9v2Zm-2 0v-.032l-.02-7.574c-.006-3.002-2.262-5.403-5.002-5.394-2.74.008-4.984 2.421-4.978 5.423l.02 7.574V73H55Zm-12 0v-2h-9v2h9Zm-15 0v-2h-9v2h9Zm-11 0v-3a1 1 0 0 1 1-1h2V50h-2a1 1 0 0 1-1-1v-3l.003-.084A1.5 1.5 0 0 1 16 44.5v-4.373a1.5 1.5 0 0 1 .696-1.266l15.966-10.134a1.5 1.5 0 1 1 1.608 2.533L22.075 39h6.55a1 1 0 0 1 0 2H19v2h62v-2H34.5a1 1 0 0 1 0-2h43.425L50 21.277 39.722 27.8a1.5 1.5 0 0 1-1.608-2.533l11.082-7.033a1.5 1.5 0 0 1 1.608 0l32.5 20.627A1.5 1.5 0 0 1 84 40.127V44.5a1.5 1.5 0 0 1-1.003 1.416L83 46v3a1 1 0 0 1-1 1h-2v11.792a1 1 0 0 1-2 0V50h-3v19h3v-4.182a1 1 0 1 1 2 0V69h2a1 1 0 0 1 1 1v3h1.35a1.5 1.5 0 0 1 .657.152l6.15 3A1.5 1.5 0 0 1 92 77.5v4a1.5 1.5 0 0 1-1.5 1.5h-81A1.5 1.5 0 0 1 8 81.5v-4a1.5 1.5 0 0 1 .842-1.348l6.151-3a1.5 1.5 0 0 1 .658-.152H17Zm64 0v-2h-9v2h9ZM57 46v2h9v-2h-9Zm15 0v2h9v-2h-9ZM40 69V50h-3v19h3Zm-6-23v2h9v-2h-9Zm-9 23V50h-3v19h3Zm-6-23v2h9v-2h-9Zm27.5-15.996C46.5 32.106 48.427 35 50 35s3.5-2.894 3.5-4.996c0-.539-.112-.701-.463-.825-.434-.154-.982-.187-2.447-.176a78.83 78.83 0 0 1-1.18 0c-1.465-.01-2.013.022-2.447.176-.351.124-.463.286-.463.825Zm-2 0c0-1.375.634-2.3 1.797-2.711.746-.264 1.39-.302 3.126-.29a77.254 77.254 0 0 0 1.154 0c1.737-.012 2.38.026 3.126.29 1.163.41 1.797 1.336 1.797 2.711C55.5 33.08 52.89 37 50 37s-5.5-3.92-5.5-6.996ZM15.997 76 11 78.437V80h78v-1.563L84.003 76H15.997Z"
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
const LgBanks = withWrapper(Vector);
LgBanks.groupName = "Business";
export default LgBanks;
