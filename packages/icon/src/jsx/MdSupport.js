import React from "react";
import PropTypes from "prop-types";

const MdSupport = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M11.388 25.3a1 1 0 0 1 .612.922v4.75l5.001-3.835a.996.996 0 0 1 .434-.192.998.998 0 0 1 .344-.032c.713.058 1.453.087 2.22.087C28.098 27 33 23.943 33 18.21 33 12.38 27.92 9 20 9S7 12.38 7 18.21c0 3.221 1.475 5.539 4.267 7.014.043.023.083.048.121.076zM10 26.81c-3.222-1.828-5-4.748-5-8.6C5 11.063 11.107 7 20 7s15 4.062 15 11.21C35 25.298 29.062 29 20 29c-.704 0-1.388-.023-2.053-.068l-6.338 4.861A1 1 0 0 1 10 33v-6.19zm9.515-6.156c.706 0 1.226.52 1.226 1.197v.029c0 .676-.52 1.198-1.226 1.198-.705 0-1.226-.522-1.226-1.198v-.029c0-.677.521-1.197 1.226-1.197zm0-.93c-.408 0-.705-.311-.76-.69l-.142-.96c-.07-.465.197-.79.649-.846 1.225-.154 1.79-.534 1.79-1.225v-.029c0-.633-.48-1-1.297-1-.606 0-1.128.182-1.634.563-.17.127-.395.226-.636.226a.998.998 0 0 1-.985-.986c0-.268.112-.55.365-.762.748-.62 1.693-1.015 2.933-1.015 2.029 0 3.411 1.044 3.411 2.918v.028c0 1.79-1.241 2.523-2.778 2.833l-.042.254c-.057.367-.353.69-.76.69h-.114z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdSupport.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdSupport.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdSupport.groupName = "Misc";
export default MdSupport;
