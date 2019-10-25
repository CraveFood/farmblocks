import React from "react";
import PropTypes from "prop-types";

const MdBidHammer = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M15.967 19.747l-4.328-4.328a1 1 0 0 1 0-1.415l8.711-8.711a1 1 0 0 1 1.415 0l2.367 2.367a1.02 1.02 0 0 1 .018.018l10.286 10.287a1 1 0 0 1 0 1.414l-8.711 8.711a1 1 0 0 1-1.414 0l-4.329-4.328a1.01 1.01 0 0 1-.087.1L9.77 33.987c-1.055 1.056-2.795.96-3.893-.136-1.095-1.096-1.19-2.836-.135-3.89l10.127-10.128a1.01 1.01 0 0 1 .1-.087zm1.402 1.402a1.01 1.01 0 0 1-.087.1L7.155 31.374c-.237.238-.211.716.135 1.063.349.348.826.374 1.064.136l10.127-10.127a1.01 1.01 0 0 1 .1-.087l-1.212-1.211zm12.57-4.854L23.433 9.79l-7.213 7.213a1.01 1.01 0 0 1-.09.08l6.516 6.515a1.01 1.01 0 0 1 .08-.09l7.211-7.213zm1.414 1.415l-7.212 7.212a1.01 1.01 0 0 1-.09.08l.967.967 7.297-7.297-.962-.962zm-9.334-9.334l-.961-.962-7.298 7.297.967.967a1.01 1.01 0 0 1 .08-.09l7.212-7.212z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdBidHammer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdBidHammer.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdBidHammer.groupName = "States";
export default MdBidHammer;
