import React from "react";
import PropTypes from "prop-types";

const MdBullhorn = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M31 15.15a2.699 2.699 0 0 1 0 5.21V27a1 1 0 0 1-1.583.812 13.572 13.572 0 0 0-.908-.577c-.757-.449-1.622-.899-2.58-1.32-2.237-.982-4.593-1.642-6.992-1.847l2.786 6.54a1 1 0 0 1-.92 1.392h-4.096a1 1 0 0 1-.918-.604L12.6 24h-.844c-1.237 0-2.297-.756-2.584-1.952l-2.145-8.811A1 1 0 0 1 8 12h9.355c2.944 0 5.846-.717 8.574-1.916.958-.42 1.823-.87 2.58-1.32.449-.265.757-.468.908-.576A1 1 0 0 1 31 9v6.15zm0 1.635v1.94a1.197 1.197 0 0 0 0-1.94zm-7-3.84C21.852 13.618 19.624 14 17.355 14H9.273l1.844 7.579c.062.258.29.421.64.421h5.598c2.269 0 4.497.382 6.645 1.055v-10.11zm2-.72v11.55a26.456 26.456 0 0 1 3 1.435V10.79a26.456 26.456 0 0 1-3 1.435zM16.734 24h-1.956l2.587 6h1.925l-2.556-6zM16 16a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1h4zm0 2a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1h4z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdBullhorn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdBullhorn.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdBullhorn.groupName = "Menu";
export default MdBullhorn;
