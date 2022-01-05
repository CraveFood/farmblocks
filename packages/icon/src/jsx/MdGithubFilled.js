import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    height={size}
    viewBox="4 4 32 32"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M20 7c7.179 0 13 5.821 13 13 0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7zm.103 5C15.63 12 12 15.484 12 20.073c0 3.669 2.187 6.808 5.413 7.907.41.076.558-.185.558-.4l-.01-2.766c0-.778.252-1.274.549-1.535-1.804-.209-3.704-.464-3.704-3.656 0-.907.317-1.363.833-1.949-.084-.215-.358-1.098.084-2.246.513-.167 1.536.439 1.994.737l.231.156a7.402 7.402 0 0 1 2.026-.281c.687 0 1.38.096 2.026.28 0 0 1.552-1.107 2.226-.892.39 1.01.222 1.819.12 2.143l-.036.103c.516.582.761 1.039.761 1.949 0 2.838-1.447 3.358-3.04 3.583l-.583.073c.233.218.442.585.517 1.115.46.218 1.645.585 2.351-.692l.082-.132c.395-.58.99-.697 1.132-.718l.031-.004.113.003c.602.04-.061.507-.061.507l-.104.059c-.371.246-.649.817-.75 1.05l-.098.248c-.47 1.07-1.974.949-2.496.871l-.181-.031-.01 2.031c0 .215.145.477.558.4C25.748 26.882 28 23.743 28 20.074 28 15.483 24.577 12 20.103 12z"
      fill={color}
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
const MdGithubFilled = withWrapper(Vector);
MdGithubFilled.groupName = "Social";
export default MdGithubFilled;
