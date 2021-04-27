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
      d="M20 7c7.18 0 13 5.82 13 13s-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7zm.078 5.5l-.05.003-.05-.003a.789.789 0 00-.786.67l-.008.105v.38c-2.254.18-3.787 1.515-3.787 3.445 0 2.038 1.227 3.029 3.86 3.715v3.531l-.225-.047c-.852-.206-1.591-.595-2.345-1.14a.976.976 0 00-.595-.198l-.055.003-.045-.003c-.52 0-.93.373-.985.875l-.007.117c0 .379.18.668.488.866a7.795 7.795 0 003.696 1.407v.511a.785.785 0 00.845.774.77.77 0 00.819-.668l.007-.106v-.475c2.29-.217 3.84-1.533 3.84-3.517 0-1.866-1.095-2.956-3.645-3.645l-.269-.07v-3.439c.581.15 1.162.41 1.759.768a1.038 1.038 0 00.593.161l.048.002a.992.992 0 001.01-.991c0-.433-.252-.705-.54-.866a6.548 6.548 0 00-2.447-.943l-.35-.05v-.397a.77.77 0 00-.776-.775zm.705 8.69c1.307.425 1.685.908 1.685 1.68 0 .868-.632 1.444-1.787 1.57l.1-.014zm-1.527-5.722l.001 3.148-.1-.033c-1.222-.43-1.533-.89-1.533-1.61 0-.77.545-1.37 1.632-1.505z"
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
const MdGeneralPaymentFilled = withWrapper(Vector);
MdGeneralPaymentFilled.groupName = "Payment";
export default MdGeneralPaymentFilled;
