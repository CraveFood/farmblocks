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
      d="M22.58 10.51a2.923 2.923 0 0 0-5.162 0L9.3 25.717a2.945 2.945 0 0 0-.347 1.387 2.933 2.933 0 0 0 2.928 2.938h16.24c.482 0 .956-.12 1.382-.349a2.943 2.943 0 0 0 1.198-3.976L22.58 10.51Zm1.721-.925 8.12 15.207a4.904 4.904 0 0 1-1.997 6.628c-.71.38-1.5.58-2.305.58H11.88C9.186 32 7 29.808 7 27.104c0-.807.199-1.601.578-2.312l8.12-15.207a4.872 4.872 0 0 1 8.603 0ZM20 25.164c1.091 0 1.9.811 1.9 1.863v.043c0 1.053-.809 1.864-1.9 1.864-1.092 0-1.902-.811-1.902-1.864v-.043c0-1.052.81-1.863 1.902-1.863Zm-1.945-10.652c-.065-.636.285-1.117.874-1.117h2.142c.588 0 .938.481.873 1.117l-.94 8.24c-.065.593-.458.965-1.004.965-.547 0-.94-.372-1.005-.965l-.94-8.24Z"
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
const MdCaution = withWrapper(Vector);
MdCaution.groupName = "States";
export default MdCaution;
