import React from "react";
import PropTypes from "prop-types";

const LgData = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M32.707 24l-2.853 2.854a.5.5 0 0 1-.708-.708L31.293 24H16.006C14.894 24 14 24.881 14 25.958V72h72V30.707l-9.483 9.483A11.948 11.948 0 0 1 79 47.5c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-1.714.36-3.378 1.048-4.91a1 1 0 1 1 1.824.82A9.953 9.953 0 0 0 57 47.5c0 5.523 4.477 10 10 10 5.355 0 9.727-4.21 9.988-9.5H68v8a1 1 0 0 1-2 0v-9a1 1 0 0 1 1-1h9.888a9.947 9.947 0 0 0-1.8-4.381l-2.234 2.235a.5.5 0 0 1-.708-.708l2.31-2.31A9.975 9.975 0 0 0 67 37.5a9.97 9.97 0 0 0-7.316 3.182 1 1 0 0 1-1.462-1.364A11.97 11.97 0 0 1 67 35.5c3.515 0 6.678 1.512 8.873 3.92L86 29.293v-3.335c0-.357-.098-.692-.27-.981l-2.876 2.877a.5.5 0 0 1-.708-.708l2.873-2.872c-.3-.174-.65-.274-1.025-.274H32.707zM11 72V25.958C11 23.215 13.246 21 16.006 21h67.988C86.754 21 89 23.215 89 25.958V72h4.5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-87A1.5 1.5 0 0 1 5 78.5v-5A1.5 1.5 0 0 1 6.5 72H11zm-3 5h84v-2H8v2zm15-31v6a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v6h4V46h-4zm10-6v13a1 1 0 0 1-2 0V39a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v23a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v4h4V40h-4zm10 4a1 1 0 0 1-2 0v-1a1 1 0 0 1 2 0v1zm0-10v6a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v29a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V48a1 1 0 0 1 2 0v13h4V34h-4zm37.146-4.854a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708-.708l2-2zm-54 0a.5.5 0 0 1 .708.708l-12 12a.5.5 0 0 1-.708-.708l12-12zM73 61a1 1 0 0 1 0 2H61a1 1 0 0 1 0-2h12z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgData.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgData.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgData.groupName = "Misc";
export default LgData;
