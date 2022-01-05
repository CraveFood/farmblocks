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
      d="M81.317 75.01H86.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1 0-3h2.666v-12H14.5a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5h11.166v-12H25.5a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5h33.333a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-.167v12h11.167a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-.167v12h8.651V48.25a23.829 23.829 0 0 1-.889-.911 28.901 28.901 0 0 1-2.805-3.542c-2.571-3.824-4.123-8.048-4.123-12.559 0-5.383 4-9.237 9.235-9.237h.18c5.236 0 9.235 3.854 9.235 9.237 0 4.51-1.552 8.735-4.122 12.559a28.901 28.901 0 0 1-2.806 3.542c-.35.376-.655.685-.904.925V75.01Zm-63.65 0h12.75v-6.833a.75.75 0 1 1 1.5 0v6.833h12.75v-12h-27v12Zm30 0h4.75v-6.833a.75.75 0 1 1 1.5 0v6.833h12.75v-12H47.665v12Zm-1.684-15H46.333v-2H16v2h.149a1.531 1.531 0 0 1 .035 0h29.799Zm3.35 0h19v-2h-19v2Zm-6.417-5h12.75v-12h-27v12h12.75v-6.833a.75.75 0 1 1 1.5 0v6.833ZM58 67.51a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2h-6Zm-5.584-2.251a.75.75 0 1 1 1.5 0v.959a.75.75 0 1 1-1.5 0v-.96ZM27.184 40.01h29.965a1.531 1.531 0 0 1 .035 0h.149v-2H27v2h.149a1.531 1.531 0 0 1 .035 0Zm14.232 5.249a.75.75 0 1 1 1.5 0v.959a.75.75 0 1 1-1.5 0v-.96ZM47 47.51a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2h-6ZM30.416 65.26a.75.75 0 1 1 1.5 0v.959a.75.75 0 1 1-1.5 0v-.96ZM36 67.51a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2h-6Zm44.025-22.215a25.92 25.92 0 0 0 2.513-3.173c2.263-3.367 3.612-7.038 3.612-10.885 0-3.7-2.632-6.237-6.235-6.237h-.18c-3.603 0-6.235 2.536-6.235 6.237 0 3.847 1.349 7.518 3.613 10.885a25.92 25.92 0 0 0 2.712 3.386l.2-.213Zm1.792-13.833a2.082 2.082 0 1 0-4.164 0 2.082 2.082 0 0 0 4.164 0Zm2 0a4.082 4.082 0 1 1-8.164 0 4.082 4.082 0 0 1 8.164 0Z"
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
const LgPickupPoint = withWrapper(Vector);
LgPickupPoint.groupName = "Delivery";
export default LgPickupPoint;
