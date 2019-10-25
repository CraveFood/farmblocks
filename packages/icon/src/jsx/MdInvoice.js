import React from "react";
import PropTypes from "prop-types";

const MdInvoice = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M27 12h-4V8.06L22.932 8H11v22h10a1 1 0 0 1 0 2H10a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h13.313a1 1 0 0 1 .666.254l4.687 4.183a1 1 0 0 1 .334.746V20a1 1 0 0 1-2 0v-8zm1.68 19.08c.596-.09.899-.367.899-.823 0-.418-.215-.697-.899-.937v1.76zm-1.19-5.686c-.608.089-.874.392-.874.798 0 .392.177.658.874.912v-1.71zm1.253-1.736v.178a5.308 5.308 0 0 1 1.836.608c.242.139.456.38.456.76a.843.843 0 0 1-.861.848.918.918 0 0 1-.442-.114 4.898 4.898 0 0 0-1.052-.431v1.926c1.925.519 2.748 1.304 2.748 2.722 0 1.419-1.089 2.33-2.685 2.508v.672a.653.653 0 0 1-.658.658.654.654 0 0 1-.659-.658v-.684a6.339 6.339 0 0 1-2.495-.887.858.858 0 0 1-.431-.76c0-.494.381-.861.874-.861.165 0 .342.063.494.165.533.342 1.04.582 1.622.709v-2.014c-1.824-.494-2.723-1.19-2.723-2.698 0-1.393 1.063-2.33 2.659-2.494v-.153c0-.367.292-.658.659-.658.367 0 .658.29.658.658zM14 16.25a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H14zm0 3a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H14zm0 3a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H14z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdInvoice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdInvoice.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdInvoice.groupName = "Docs";
export default MdInvoice;
