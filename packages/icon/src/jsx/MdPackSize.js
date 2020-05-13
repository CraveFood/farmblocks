import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M20.061 6.91l.05.01a1.004 1.004 0 01.172.054l11.104 4.66.016.007.06.03-.076-.037a.982.982 0 01.599.752.996.996 0 01.01.266l-1.462 15.242a1 1 0 01-.534.921l-9.639 5.07-.037.019a1.004 1.004 0 01-.052.023l.09-.042a1.007 1.007 0 01-.648.099l-.026-.006a.878.878 0 01-.219-.074 1.046 1.046 0 01-.047-.023l-9.43-5.07a1 1 0 01-.526-.911L8.005 12.652a.985.985 0 01.46-.942l.015-.007a.609.609 0 01.113-.06.453.453 0 01.014-.006l10.895-4.66a1.032 1.032 0 01.333-.08h.114a.992.992 0 01.112.013zm9.778 7.276l-9.528 4.35-.041.018a1.006 1.006 0 01-.047.017l.088-.035a1.007 1.007 0 01-.746.034 1.07 1.07 0 01-.091-.037L10.162 14.2l1.257 13.107 8.08 4.344.001-9.41a.5.5 0 111 0v9.31l8.081-4.25 1.258-13.115zM19.9 8.982l-8.446 3.613 8.446 3.93 8.609-3.93-8.61-3.613z"
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
const MdPackSize = withWrapper(Vector);
MdPackSize.groupName = "Actions";
export default MdPackSize;
