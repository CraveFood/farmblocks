import React from "react";
import PropTypes from "prop-types";

const MdArrowLeftFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M20 33c-7.179 0-13-5.821-13-13 0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13zm-1.676-6.763a1 1 0 1 0 1.352-1.474L15.57 21 26 21a1 1 0 0 0 .993-.883L27 20a1 1 0 0 0-1-1l-10.429.001 4.105-3.764a1 1 0 0 0 .14-1.315l-.079-.098a1 1 0 0 0-1.413-.061l-6 5.5a1 1 0 0 0 0 1.474z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdArrowLeftFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdArrowLeftFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdArrowLeftFilled.groupName = "Actions";
export default MdArrowLeftFilled;
