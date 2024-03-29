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
      d="m20.73 13 3.414 3.414c.39.39.902.586 1.414.586.512 0 1.023-.195 1.414-.586.39-.39.586-.902.586-1.414 0-.512-.195-1.024-.586-1.414L26.386 13H29.5a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h10.23Zm-4.14 7.767c.924.288 1.188.613 1.188 1.141 0 .577-.42.961-1.189 1.046v-2.187Zm-.95-1.67c-.926-.3-1.154-.613-1.154-1.117 0-.53.384-.937 1.154-1.01v2.127ZM16.12 15a.523.523 0 0 0-.528.516v.252c-1.502.121-2.524 1.01-2.524 2.296 0 1.358.818 2.018 2.572 2.475v2.367c-.661-.12-1.213-.397-1.779-.805a.654.654 0 0 0-.396-.132.652.652 0 0 0-.661.66c0 .253.12.445.325.577a5.19 5.19 0 0 0 2.463.937v.34c0 .29.24.517.529.517a.513.513 0 0 0 .516-.516v-.317c1.526-.144 2.558-1.02 2.558-2.342 0-1.286-.78-2.019-2.606-2.476v-2.306c.408.096.817.276 1.237.528.12.072.24.108.361.108a.66.66 0 0 0 .672-.661c0-.288-.168-.469-.36-.576a4.374 4.374 0 0 0-1.862-.661v-.265a.513.513 0 0 0-.516-.516Zm7.852-3 2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L23.972 10H30.079a2.92 2.92 0 0 1 2.92 2.92v14.16A2.92 2.92 0 0 1 30.08 30H9.919A2.92 2.92 0 0 1 7 27.08V12.92A2.92 2.92 0 0 1 9.92 10h6.639a1 1 0 0 1 0 2H9.92a.92.92 0 0 0-.92.92v14.16c0 .508.412.92.92.92h20.159a.92.92 0 0 0 .92-.92V12.92a.92.92 0 0 0-.92-.92H23.972Z"
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
const MdRefundFilled = withWrapper(Vector);
MdRefundFilled.groupName = "Payment";
export default MdRefundFilled;
