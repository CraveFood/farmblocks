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
      d="M12.65 28h14.7A5.008 5.008 0 0131 24.158v-7.816A5.005 5.005 0 0127.275 12h-14.55A5.005 5.005 0 019 16.342v7.816A5.008 5.008 0 0112.65 28zm-1.026 0A4.009 4.009 0 009 25.2v1.88c0 .508.412.92.921.92h1.703zm16.752 0h1.703a.92.92 0 00.921-.92V25.2a4.009 4.009 0 00-2.624 2.8zM9 15.3A4.005 4.005 0 0011.72 12H9.921a.92.92 0 00-.92.92v2.38zm22 0v-2.38a.92.92 0 00-.92-.92H28.28a4.005 4.005 0 002.72 3.3zM30.08 30H9.92a2.92 2.92 0 01-2.92-2.92V12.92A2.92 2.92 0 019.92 10H30.08A2.92 2.92 0 0133 12.92v14.16A2.92 2.92 0 0130.08 30zm-9.527-9.233v2.186c.722-.084 1.117-.468 1.117-1.045 0-.528-.249-.853-1.117-1.141zm-.89-1.67V16.97c-.723.073-1.084.48-1.084 1.01 0 .504.214.817 1.083 1.117zm.45-4.097c.27 0 .485.228.485.516v.265c.666.084 1.23.312 1.749.66.18.108.337.29.337.577 0 .373-.281.66-.631.66a.62.62 0 01-.338-.107c-.395-.252-.778-.433-1.162-.528v2.306c1.714.457 2.447 1.19 2.447 2.475 0 1.322-.97 2.198-2.402 2.343v.317c0 .288-.214.516-.485.516a.507.507 0 01-.497-.516v-.34a4.7 4.7 0 01-2.311-.938.67.67 0 01-.305-.577c0-.372.27-.66.62-.66.136 0 .27.047.372.131.53.409 1.05.685 1.67.805V20.54c-1.647-.457-2.414-1.117-2.414-2.475 0-1.286.959-2.175 2.368-2.296v-.252c0-.288.226-.516.497-.516z"
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
