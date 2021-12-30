import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M15.586 2a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10.586Zm-.415 2H6v16h12V6.829L15.171 4Zm-3.04 2.75c.412 0 .755.281.81.66l.007.106v.046l.068.009c.477.076.92.208 1.341.396l.25.12.245.132c.324.166.53.436.53.8 0 .515-.444.91-.987.91-.175 0-.348-.047-.515-.139a5.955 5.955 0 0 0-.531-.26l-.257-.1-.198-.064v1.786l.054.013c1.771.447 2.65 1.162 2.784 2.33l.013.162.005.167c0 1.276-.943 2.197-2.417 2.503l-.204.038-.181.026v.093c0 .36-.255.652-.6.74l-.106.02-.11.006c-.416 0-.77-.285-.823-.669l-.007-.097v-.121l-.109-.012c-.665-.1-1.3-.303-1.89-.6l-.29-.157-.284-.173c-.305-.18-.479-.454-.479-.792 0-.516.433-.91.974-.91.21 0 .418.063.571.173.397.261.768.454 1.149.587l.23.073.181.047v-1.865l-.044-.01c-1.773-.46-2.627-1.142-2.754-2.33l-.013-.166-.004-.164c0-1.253.945-2.175 2.393-2.464l.2-.035.169-.023v-.026c0-.362.267-.656.62-.741l.107-.02.103-.005Zm.763 6.357v1.555l.033-.006c.468-.105.722-.333.765-.65l.006-.098c0-.339-.16-.553-.67-.752l-.134-.049Zm-1.539-3.849-.021.005c-.494.108-.742.37-.742.717 0 .328.143.53.642.728l.121.044V9.258Z"
      fill={color}
      fillRule="evenodd"
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
const SmInvoice = withWrapper(Vector);
SmInvoice.groupName = "Payment";
export default SmInvoice;
