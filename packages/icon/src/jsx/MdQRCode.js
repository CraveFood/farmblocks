import React from "react";
import PropTypes from "prop-types";

const MdQRCode = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M13.75 26.25H17v-2.375a.875.875 0 0 0-.875-.875H13.75v3.25zm0 1.5V31h2.375a.875.875 0 0 0 .875-.875V27.75h-3.25zM12.25 31v-8H9.875a.875.875 0 0 0-.875.875v.738a1 1 0 1 1-2 0v-.738A2.875 2.875 0 0 1 9.875 21h6.25A2.875 2.875 0 0 1 19 23.875v6.25A2.875 2.875 0 0 1 16.125 33h-6.25A2.875 2.875 0 0 1 7 30.125v-1.286a1 1 0 1 1 2 0v1.286c0 .483.392.875.875.875h2.375zM9.5 9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7zm0-2h7A2.5 2.5 0 0 1 19 9.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 7 16.5v-7A2.5 2.5 0 0 1 9.5 7zm14 16a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7zm0-2h7a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-7a2.5 2.5 0 0 1-2.5-2.5v-7a2.5 2.5 0 0 1 2.5-2.5zm0-12a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7zm0-2h7A2.5 2.5 0 0 1 33 9.5v7a2.5 2.5 0 0 1-2.5 2.5h-7a2.5 2.5 0 0 1-2.5-2.5v-7A2.5 2.5 0 0 1 23.5 7zm-12.3 4h3.6c.11 0 .2.09.2.2v3.6a.2.2 0 0 1-.2.2h-3.6a.2.2 0 0 1-.2-.2v-3.6c0-.11.09-.2.2-.2zm15 15h1.6c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2zm-1.6-16h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6h-4.8a.6.6 0 0 1-.6-.6v-4.8a.6.6 0 0 1 .6-.6z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdQRCode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdQRCode.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdQRCode.groupName = "Actions";
export default MdQRCode;
