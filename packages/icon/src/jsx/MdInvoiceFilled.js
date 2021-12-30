import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M23.213 32H10a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h13.313a1 1 0 0 1 .666.254l4.687 4.183a1 1 0 0 1 .334.746v10.519a2.158 2.158 0 0 0-.915-.202c-.776 0-1.455.406-1.836 1.018-1.784.528-2.982 1.919-2.982 3.787 0 1.104.32 1.962.949 2.631A2.339 2.339 0 0 0 23 31.004c0 .358.075.694.213.996ZM13.74 15.5h10.518c.41 0 .741-.336.741-.75a.745.745 0 0 0-.74-.75H13.74c-.408 0-.74.336-.74.75s.332.75.74.75Zm0 3h10.518c.41 0 .741-.336.741-.75a.745.745 0 0 0-.74-.75H13.74c-.408 0-.74.336-.74.75s.332.75.74.75ZM28.68 29.32v1.76c.596-.09.899-.367.899-.823 0-.418-.215-.697-.899-.937Zm-1.19-2.216v-1.71c-.608.089-.874.392-.874.798 0 .392.177.658.874.912ZM28.085 23c.367 0 .658.29.658.658v.178a5.308 5.308 0 0 1 1.836.608c.242.139.456.38.456.76a.843.843 0 0 1-.861.848.918.918 0 0 1-.442-.114 4.898 4.898 0 0 0-1.052-.431v1.926c1.925.519 2.748 1.304 2.748 2.722 0 1.419-1.089 2.33-2.685 2.508v.672a.653.653 0 0 1-.658.658.654.654 0 0 1-.659-.658v-.684a6.339 6.339 0 0 1-2.495-.887.858.858 0 0 1-.431-.76c0-.494.381-.861.874-.861.165 0 .342.063.494.165.533.342 1.04.582 1.622.709v-2.014c-1.824-.494-2.723-1.19-2.723-2.698 0-1.393 1.063-2.33 2.659-2.494v-.153c0-.367.292-.658.659-.658Z"
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
const MdInvoiceFilled = withWrapper(Vector);
MdInvoiceFilled.groupName = "Docs";
export default MdInvoiceFilled;
