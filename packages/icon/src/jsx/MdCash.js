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
      d="M12.65 28h14.7A5.008 5.008 0 0 1 31 24.158v-7.816A5.005 5.005 0 0 1 27.275 12h-14.55A5.005 5.005 0 0 1 9 16.342v7.816A5.008 5.008 0 0 1 12.65 28Zm-1.026 0A4.009 4.009 0 0 0 9 25.2v1.88c0 .508.412.92.921.92h1.703Zm16.752 0h1.703a.92.92 0 0 0 .921-.92V25.2a4.009 4.009 0 0 0-2.624 2.8ZM9 15.3A4.005 4.005 0 0 0 11.72 12H9.921a.92.92 0 0 0-.92.92v2.38Zm22 0v-2.38a.92.92 0 0 0-.92-.92H28.28a4.005 4.005 0 0 0 2.72 3.3ZM30.08 30H9.92a2.92 2.92 0 0 1-2.92-2.92V12.92A2.92 2.92 0 0 1 9.92 10H30.08A2.92 2.92 0 0 1 33 12.92v14.16A2.92 2.92 0 0 1 30.08 30Zm-9.527-9.233v2.186c.722-.084 1.117-.468 1.117-1.045 0-.528-.249-.853-1.117-1.141Zm-.89-1.67V16.97c-.723.073-1.084.48-1.084 1.01 0 .504.214.817 1.083 1.117Zm.45-4.097c.27 0 .485.228.485.516v.265c.666.084 1.23.312 1.749.66.18.108.337.29.337.577 0 .373-.281.66-.631.66a.62.62 0 0 1-.338-.107c-.395-.252-.778-.433-1.162-.528v2.306c1.714.457 2.447 1.19 2.447 2.475 0 1.322-.97 2.198-2.402 2.343v.317c0 .288-.214.516-.485.516a.507.507 0 0 1-.497-.516v-.34a4.7 4.7 0 0 1-2.311-.938.67.67 0 0 1-.305-.577c0-.372.27-.66.62-.66.136 0 .27.047.372.131.53.409 1.05.685 1.67.805V20.54c-1.647-.457-2.414-1.117-2.414-2.475 0-1.286.959-2.175 2.368-2.296v-.252c0-.288.226-.516.497-.516Z"
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
const MdCash = withWrapper(Vector);
MdCash.groupName = "Payment";
export default MdCash;
