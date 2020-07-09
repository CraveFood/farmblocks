import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M45.762 26.42c-2.852.277-5.733.822-8.697 1.636a1.5 1.5 0 01-.321.051c-.963.05-1.84.08-2.614.098-.468.01-.8.014-.98.014a1.5 1.5 0 01-.755-.203c-1.331-.775-2.849-1.047-4.91-.984-5.466.164-10.094 1.703-18.643 5.733 1.618 1.688 3.89 2.793 7.138 3.712 2.82.798 5.084 1.195 7.239 1.19 2.497-.004 4.78-.582 6.712-1.765a1.5 1.5 0 011.727.112 1.5 1.5 0 011.122 1.466c-.053 6.045 1.166 20.092 2.212 29.197 1.957-2.077 5.913-4.428 10.033-6.227a12.51 12.51 0 015.025-1.05c1.733 0 3.439.356 5.023 1.05 4.12 1.799 8.076 4.15 10.033 6.227 1.046-9.11 2.265-23.166 2.212-29.212a1.5 1.5 0 011.18-1.48 1.5 1.5 0 011.669-.068c1.944 1.19 4.235 1.777 6.713 1.78 2.193.005 4.507-.387 7.239-1.16 3.304-.935 5.543-2 7.138-3.656-8.748-4.151-13.24-5.687-18.643-5.85-2.062-.062-3.579.21-4.911.985a1.5 1.5 0 01-.754.203c-.187 0-.527-.006-1.003-.023-.784-.03-1.67-.082-2.643-.163a1.5 1.5 0 01-.266-.046c-3.295-.89-6.492-1.446-9.665-1.67a25.06 25.06 0 00-.297 2.162 1 1 0 01-1.992-.185c.065-.695.157-1.387.275-2.074a45.178 45.178 0 00-3.537.046c.163.465.345.924.543 1.376a1 1 0 11-1.83.805 21.458 21.458 0 01-.772-2.027zm1.27-3.113c1.674-.109 3.341-.131 5.011-.067a27.424 27.424 0 013.665-7.803 1 1 0 111.653 1.126 25.406 25.406 0 00-3.267 6.8c3.155.256 6.333.82 9.592 1.692a54.387 54.387 0 002.886.159c1.789-.939 3.73-1.254 6.133-1.18 6.193.185 11.104 1.943 20.985 6.684l.558.268a1.5 1.5 0 01.605 2.175c-2.113 3.221-5.151 4.913-9.917 6.263-2.978.842-5.554 1.278-8.062 1.273-2.33-.003-4.554-.44-6.572-1.33-.235 10.496-2.659 33.882-3.569 36.504-.893 2.58-5.996 5.857-11.46 8.245a13.025 13.025 0 01-5.224 1.09c-1.802 0-3.575-.37-5.225-1.09-5.467-2.39-10.567-5.666-11.46-8.244-.91-2.626-3.338-26.044-3.568-36.522-2.01.884-4.231 1.313-6.571 1.317-2.478.005-4.998-.436-8.062-1.303-4.682-1.326-7.797-3.09-9.918-6.323a1.5 1.5 0 01.606-2.175c10.025-4.812 15.169-6.642 21.543-6.833 2.404-.073 4.348.243 6.136 1.183a89.723 89.723 0 002.9-.097c2.922-.793 5.775-1.34 8.601-1.64a21.708 21.708 0 01-.206-6.098 1 1 0 011.988.216c-.206 1.9-.129 3.83.22 5.71zm17.728 46.25a.996.996 0 01-.389-.504c-.56-1.617-5.363-4.703-10.099-6.771a10.516 10.516 0 00-4.222-.881c-1.46 0-2.892.298-4.224.881-4.735 2.068-9.539 5.154-10.1 6.771a.996.996 0 01-.388.504c.351 2.78.66 4.751.862 5.333.492 1.424 5.234 4.47 9.825 6.477 1.27.554 2.634.838 4.024.838 1.39 0 2.754-.284 4.023-.838 4.59-2.006 9.333-5.053 9.827-6.478.201-.581.51-2.552.861-5.332zm-18.858 1.821a1.572 1.572 0 10-3.145-.001 1.572 1.572 0 003.145.001zm2 0a3.572 3.572 0 11-7.145.001 3.572 3.572 0 017.145 0zm9.44 0a1.573 1.573 0 10-3.145 0 1.573 1.573 0 003.146 0zm2 0a3.573 3.573 0 11-7.145 0 3.573 3.573 0 017.146 0zM47.05 49.085a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm11 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM36.847 37.672a1 1 0 11-1.997.12 1 1 0 011.997-.12zm4.115 1.752a1 1 0 11-1.998.12 1 1 0 011.998-.12zm-3.871 2.24a1 1 0 11-1.997.122 1 1 0 011.997-.122z"
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
const LgVeal = withWrapper(Vector);
LgVeal.groupName = "Subcategories";
export default LgVeal;
