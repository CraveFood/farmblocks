import React from "react";
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
      d="M31 20c0-6.074-4.926-11-11-11-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11zm2 0c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-12.897-8C24.577 12 28 15.484 28 20.073c0 3.669-2.252 6.808-5.468 7.914-.413.076-.558-.186-.558-.4l.01-2.032.18.031c.523.078 2.027.199 2.497-.87l.098-.25c.101-.232.379-.803.75-1.05l.104-.058s.663-.466.06-.507l-.112-.003s-.711.06-1.163.722l-.082.132c-.706 1.277-1.89.91-2.351.692-.075-.53-.284-.897-.517-1.115l.583-.073c1.593-.225 3.04-.745 3.04-3.583 0-.91-.245-1.367-.761-1.949l.036-.103c.102-.324.27-1.133-.12-2.143-.674-.215-2.226.893-2.226.893a7.402 7.402 0 00-2.026-.281c-.687 0-1.38.096-2.026.28l-.23-.155c-.459-.298-1.482-.904-1.995-.737-.442 1.148-.168 2.031-.084 2.246-.516.586-.833 1.042-.833 1.949 0 3.192 1.9 3.447 3.704 3.656-.297.26-.549.757-.549 1.535l.01 2.766c0 .215-.148.476-.558.4C14.187 26.88 12 23.742 12 20.073 12 15.483 15.629 12 20.103 12z"
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
const MdGithub = withWrapper(Vector);
MdGithub.groupName = "Social";
export default MdGithub;
