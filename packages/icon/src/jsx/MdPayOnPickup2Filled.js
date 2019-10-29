import React from "react";
import PropTypes from "prop-types";

const MdPayOnPickup2Filled = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      ref={ref}
      aria-hidden={!props["aria-label"]}
      {...props}
    >
      <path
        d="M32.792 22.33c-.878-.686-1.996-1.08-3.24-1.08h-.103c-2.954 0-5.199 2.22-5.199 5.318 0 1.931.477 3.661 1.313 5.185A12.95 12.95 0 0 1 20 33c-7.18 0-13-5.82-13-13S12.82 7 20 7s13 5.82 13 13c0 .796-.071 1.574-.208 2.33zm-11.908 1.345v-3.283c1.39.433 1.786.92 1.786 1.713 0 .867-.631 1.444-1.786 1.57zm-1.424-8.983v3.193c-1.39-.45-1.733-.92-1.733-1.677 0-.794.578-1.407 1.733-1.516zm1.497-2.182a.77.77 0 0 0-.777-.775.785.785 0 0 0-.793.775v.38c-2.254.18-3.788 1.514-3.788 3.445 0 2.038 1.227 3.029 3.86 3.715v3.553c-.992-.18-1.822-.596-2.67-1.209a.976.976 0 0 0-.594-.198.978.978 0 0 0-.993.992c0 .379.18.668.488.866a7.795 7.795 0 0 0 3.697 1.407v.51c0 .434.36.776.793.776a.77.77 0 0 0 .777-.775v-.475c2.29-.217 3.84-1.533 3.84-3.517 0-1.93-1.172-3.03-3.913-3.715V14.8c.614.144 1.227.415 1.858.793.181.11.361.162.541.162a.992.992 0 0 0 1.01-.99c0-.434-.252-.705-.54-.867a6.566 6.566 0 0 0-2.796-.992v-.397zm8.808 21.391a9.199 9.199 0 0 1-.265.214 10.149 10.149 0 0 1-1.688-1.682c-1.29-1.629-2.062-3.58-2.062-5.865 0-2.266 1.57-3.818 3.699-3.818h.103c2.13 0 3.699 1.552 3.698 3.817 0 2.287-.771 4.237-2.062 5.866-.453.572-.939 1.062-1.423 1.468zM31 26.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdPayOnPickup2Filled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdPayOnPickup2Filled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdPayOnPickup2Filled.groupName = "Payment";
export default MdPayOnPickup2Filled;
