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
      d="M21.1 30.97l2.364.955a.984.984 0 001.239-.456l1.204-2.27c.36-.678.964-1.19 1.686-1.431l2.417-.807c.478-.16.762-.656.66-1.155l-.52-2.522a3.035 3.035 0 01.383-2.194l1.34-2.19a1.01 1.01 0 00-.23-1.314l-1.998-1.594a3.013 3.013 0 01-1.1-1.93l-.366-2.549a.993.993 0 00-1.01-.857l-2.543.079c-.76.023-1.5-.25-2.068-.762l-1.899-1.715a.98.98 0 00-1.318 0l-1.899 1.715a2.948 2.948 0 01-2.068.762l-2.544-.079a.993.993 0 00-1.01.857l-.364 2.55a3.013 3.013 0 01-1.1 1.929l-2 1.594a1.01 1.01 0 00-.228 1.314l1.339 2.19c.4.655.537 1.44.382 2.194l-.518 2.522c-.103.499.18.996.659 1.155l2.417.807a2.978 2.978 0 011.686 1.431l1.204 2.27a.984.984 0 001.239.456l2.364-.955a2.936 2.936 0 012.2 0zm-3.83 2.815a2.953 2.953 0 01-3.716-1.368l-1.205-2.27a.993.993 0 00-.562-.477l-2.417-.806c-1.434-.479-2.285-1.97-1.977-3.466l.519-2.522a1.012 1.012 0 00-.128-.731l-1.34-2.19a3.03 3.03 0 01.687-3.942l2-1.594c.198-.16.33-.39.366-.643l.365-2.55c.216-1.512 1.52-2.62 3.029-2.572l2.544.079c.253.008.5-.083.69-.254l1.898-1.716a2.942 2.942 0 013.954 0l1.899 1.716c.189.17.436.262.69.254l2.543-.08c1.51-.046 2.813 1.06 3.03 2.573l.364 2.55c.036.254.168.484.367.643l1.999 1.594a3.03 3.03 0 01.686 3.941l-1.34 2.19c-.133.219-.178.48-.127.732l.519 2.522c.308 1.496-.543 2.987-1.977 3.466l-2.417.806a.993.993 0 00-.562.477l-1.205 2.27a2.953 2.953 0 01-3.715 1.368l-2.364-.954a.979.979 0 00-.734 0l-2.364.954zm1.59-15.682a1.98 1.98 0 01-1.829 1.237c-1.092-.001-1.978-.898-1.979-2.003 0-.81.482-1.541 1.222-1.85a1.96 1.96 0 012.157.434c.565.572.735 1.433.43 2.182zm5.938 6.01a1.98 1.98 0 01-1.83 1.237c-1.092-.002-1.977-.898-1.978-2.004 0-.81.482-1.54 1.222-1.85a1.96 1.96 0 012.157.434c.565.573.734 1.434.429 2.183zm-9.025 1.336a.72.72 0 01-.666-.451.733.733 0 01.157-.794l8.645-8.75a.714.714 0 011.025-.007.739.739 0 01-.007 1.038l-8.644 8.75a.712.712 0 01-.51.214z"
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
const MdCoupon = withWrapper(Vector);
MdCoupon.groupName = "Misc";
export default MdCoupon;
