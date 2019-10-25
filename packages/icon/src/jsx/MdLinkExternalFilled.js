import React from "react";
import PropTypes from "prop-types";

const MdLinkExternalFilled = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      ref={ref}
      ariaHidden={!props.ariaLabel}
      {...props}
    >
      <path
        d="M29 11h-5a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-5zm-3.384 2l-6.321 6.291a1 1 0 0 0 1.41 1.418L27 14.444V26a1 1 0 0 1-1 1H14a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1h11.616z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdLinkExternalFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdLinkExternalFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdLinkExternalFilled.groupName = "Misc";
export default MdLinkExternalFilled;
