import React from "react";
import PropTypes from "prop-types";

const MdQuestion = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M31 20c0-6.074-4.926-11-11-11-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11zm2 0c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-13.505 4.408c1.05 0 1.827.776 1.827 1.785v.042c0 1.01-.776 1.787-1.827 1.787s-1.829-.778-1.829-1.787v-.042c0-1.009.778-1.785 1.829-1.785zm0-1.387c-.61 0-1.051-.462-1.134-1.028l-.212-1.43c-.103-.693.295-1.177.967-1.26 1.827-.23 2.67-.798 2.67-1.828v-.042c0-.944-.717-1.49-1.934-1.49-.904 0-1.682.271-2.437.839-.252.189-.588.336-.947.336A1.487 1.487 0 0 1 15 15.648c0-.399.166-.82.545-1.135C16.659 13.59 18.067 13 19.915 13 22.94 13 25 14.555 25 17.35v.041c0 2.668-1.85 3.761-4.14 4.223l-.064.379c-.084.546-.525 1.028-1.133 1.028h-.168z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdQuestion.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdQuestion.groupName = "States";
export default MdQuestion;
