import React from "react";
import PropTypes from "prop-types";

const MdInternalNotesFilled = React.forwardRef(
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
        d="M19.68 32H10a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h13.313a1 1 0 0 1 .666.254l4.687 4.183a1 1 0 0 1 .334.746v8.627c-.2.111-.39.252-.56.422l-7.193 7.193a2.5 2.5 0 0 0-.647 1.124L19.68 32zm-5.94-16.5h10.52c.408 0 .74-.336.74-.75a.745.745 0 0 0-.74-.75H13.74c-.408 0-.74.336-.74.75s.332.75.74.75zm0 3h10.52c.408 0 .74-.336.74-.75a.745.745 0 0 0-.74-.75H13.74c-.408 0-.74.336-.74.75s.332.75.74.75zm18.571 8.043l-3.65-4.056 1.016-1.017a.75.75 0 0 1 1.061 0l2.792 2.793a.75.75 0 0 1 0 1.06l-1.219 1.22zm-.708.708l-5.265 5.265a.75.75 0 0 1-.337.194l-3.808 1.015a.75.75 0 0 1-.918-.918L22.291 29a.75.75 0 0 1 .194-.337l5.467-5.468 3.65 4.056z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdInternalNotesFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdInternalNotesFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdInternalNotesFilled.groupName = "Docs";
export default MdInternalNotesFilled;
