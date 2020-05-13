import * as React from "react";
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
      d="M32.695 29.799c10.565-5.132 14.965-3.774 19.036 3.12a113.709 113.709 0 01.648 1.108c.26.447.456.777.653 1.098 1.848 3.023 3.544 4.745 6.202 5.834 3.506 1.436 8.485 1.507 15.522-.113 2.402-.552 4.378 1.819 2.482 3.822C61.944 60.845 56.218 62.8 50.495 56.782l-.715-.759c-1.803-1.907-2.93-2.68-4.649-2.907-2.264-.298-5.339.586-9.568 3.028L37.8 76.68a1.5 1.5 0 01-2.982.324l-2.338-21.469a1.493 1.493 0 01-.005-.053L29.154 25h-2.982l4.556 41.838a1.5 1.5 0 11-2.982.324l-4.737-43.5A1.5 1.5 0 0124.5 22h6a1.5 1.5 0 011.491 1.338l.704 6.46zm.346 3.177l2.169 19.922c8.124-4.44 12.358-3.582 16.75 1.064l.709.753c2.076 2.183 3.204 2.668 5.541 1.87 3.28-1.121 8.172-4.976 15.35-12.41-12.615 2.545-18.611-.163-23.088-7.485a65.096 65.096 0 01-.684-1.15 567.092 567.092 0 01-.64-1.095c-1.713-2.901-2.826-4.061-4.635-4.504-2.379-.582-6.006.28-11.472 3.035zm3.204 8.132a1 1 0 011.988-.216l.871 8a1 1 0 01-1.988.216l-.871-8zm-.653-6a1 1 0 011.988-.217l.218 2.001a1 1 0 11-1.988.217l-.218-2.001zM31.8 76.679a1.5 1.5 0 01-2.983.325l-.527-4.842a1.5 1.5 0 012.983-.325l.527 4.842z"
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
const LgNewBid = withWrapper(Vector);
LgNewBid.groupName = "States";
export default LgNewBid;
