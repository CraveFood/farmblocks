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
      d="M20 7c7.179 0 13 5.821 13 13 0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7zm-3.273 9.883h-2.579v7.742h2.579v-7.742zm6.312-.18c-1.37 0-1.981.75-2.32 1.28v-1.1h-2.57s.03.726 0 7.742h2.57v-4.32c0-.235.023-.461.086-.633.187-.461.61-.938 1.32-.938.93 0 1.305.711 1.305 1.75v4.141H26v-4.438c0-2.375-1.266-3.484-2.96-3.484zm-7.586-3.547c-.875 0-1.453.578-1.453 1.336 0 .742.555 1.336 1.422 1.336h.016c.898 0 1.46-.594 1.453-1.336-.008-.758-.555-1.336-1.438-1.336z"
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
const MdLinkedInFilled = withWrapper(Vector);
MdLinkedInFilled.groupName = "Social";
export default MdLinkedInFilled;
