import React from "react";
import PropTypes from "prop-types";

const LgInvoice = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M70.5 32.5H61a1.5 1.5 0 0 1-1.5-1.5v-9.5h-30v57h41v-46zm-8-8.683V29.5h6.226L62.5 23.817zM26.5 20a1.5 1.5 0 0 1 1.5-1.5h32.543a1.5 1.5 0 0 1 1.011.392L73.011 29.35a1.5 1.5 0 0 1 .489 1.108V80a1.5 1.5 0 0 1-1.5 1.5H28a1.5 1.5 0 0 1-1.5-1.5V20zm25.246 30.851v5.631c1.98-.216 3.064-1.207 3.064-2.692 0-1.361-.681-2.196-3.064-2.939zm-2.444-4.301v-5.476c-1.981.186-2.97 1.237-2.97 2.599 0 1.3.588 2.104 2.97 2.877zM50.539 36a1.32 1.32 0 0 1 1.331 1.33v.681c1.826.216 3.372.804 4.797 1.702.494.278.927.742.927 1.485 0 .959-.774 1.701-1.733 1.701-.308 0-.619-.092-.927-.278-1.084-.65-2.135-1.114-3.188-1.361v5.94c4.703 1.176 6.714 3.063 6.714 6.374 0 3.403-2.66 5.662-6.59 6.033v1.856c0 .743-.588 1.331-1.331 1.331-.742 0-1.361-.588-1.361-1.331v-1.918c-2.32-.247-4.455-1.083-6.342-2.413-.526-.341-.836-.836-.836-1.485 0-.96.742-1.702 1.702-1.702.371 0 .742.124 1.021.341 1.455 1.051 2.877 1.763 4.579 2.072v-6.095c-4.517-1.176-6.62-2.877-6.62-6.373 0-3.311 2.629-5.601 6.496-5.91v-.65c0-.742.619-1.33 1.361-1.33z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
LgInvoice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgInvoice.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgInvoice.groupName = "Docs";
export default LgInvoice;
