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
      d="M31 20c0-6.074-4.926-11-11-11-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11zm2 0c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-16.273-3.117v7.742h-2.579v-7.742h2.579zm.164-2.39c.007.741-.555 1.335-1.453 1.335h-.016c-.867 0-1.422-.594-1.422-1.336 0-.758.578-1.336 1.453-1.336.883 0 1.43.578 1.438 1.336zm3.828 3.49c.339-.53.95-1.28 2.32-1.28 1.695 0 2.961 1.11 2.961 3.484v4.438h-2.57v-4.14c0-1.04-.375-1.75-1.305-1.75-.71 0-1.133.476-1.32.937a1.938 1.938 0 00-.086.633v4.32h-2.57c.03-7.016 0-7.742 0-7.742h2.57v1.1z"
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
const MdLinkedIn = withWrapper(Vector);
MdLinkedIn.groupName = "Social";
export default MdLinkedIn;
