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
      d="M29 23v-6.005H11V23h10v-1.3c0-.387.38-.7.851-.7h3.299c.47 0 .85.313.85.7V23h3zm2 0a1 1 0 010 2v7H9v-7a1 1 0 010-2v-6.005H8a1 1 0 01-1-1v-3.037a1 1 0 01.08-.39L8.9 8.275A2.103 2.103 0 0110.838 7h18.326c.843 0 1.605.502 1.935 1.277l1.822 4.29a1 1 0 01.08.391v3.037a1 1 0 01-1 1h-1V23zm-10.5-8V9h-1v6h1zm-3.904 0h1v-1.795L17.823 9h-1.001l-.226 4.178V15zM14.7 15v-1.795L15.32 9h-1.01l-.605 4.133L13.702 15h.999zm-2.854 0v-1.74L12.786 9h-1.024l-.904 4.098-.011.107V15h1zm10.561 0h1v-1.795L23.182 9H22.18l.229 4.232V15zm2.9 0h.999v-1.795L25.697 9h-1.01l.625 4.278L25.31 15zm3.858 0v-1.795l-.012-.107L28.251 9h-1.024l.939 4.26V15h1zM8 32a1 1 0 010-2h24a1 1 0 010 2H8z"
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
const MdFarmersMarketsFilled = withWrapper(Vector);
MdFarmersMarketsFilled.groupName = "Business";
export default MdFarmersMarketsFilled;
