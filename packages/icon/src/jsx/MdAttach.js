import React from "react";
import PropTypes from "prop-types";

const MdAttach = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M14.602 21.166a.535.535 0 0 0-.087.075l10.62-10.62c1.099-1.098 2.773-1.098 3.931.06l2.925 2.925c1.165 1.165 1.312 2.99.215 4.087l-12.47 12.47c-.705.706-1.722 1-2.757.826l-4.078-.696c-1.595-.271-2.923-1.6-3.195-3.195l-.694-4.077c-.176-1.034.119-2.051.824-2.757L22.121 7.98a1 1 0 1 1 1.415 1.414L11.25 21.678c-.233.233-.338.594-.267 1.008l.693 4.076c.13.758.802 1.43 1.56 1.56l4.078.695c.413.07.774-.035 1.007-.268l12.47-12.47c.26-.26.215-.829-.215-1.259l-2.925-2.924c-.378-.378-.785-.378-1.103-.06L15.952 22.633l.123 1.243 1.398.066 8.11-8.11a1 1 0 0 1 1.414 1.414l-8.252 8.252c-.312.313-.74.468-1.187.45l-1.763-.083c-.869-.04-1.605-.744-1.693-1.61l-.187-1.893c-.036-.361.09-.699.335-.944.12-.12.183-.16.343-.247l.01-.005z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdAttach.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdAttach.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdAttach.groupName = "Actions";
export default MdAttach;
