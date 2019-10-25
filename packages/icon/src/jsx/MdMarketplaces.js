import React from "react";
import PropTypes from "prop-types";

const MdMarketplaces = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M14 27a2 2 0 1 1 .001 3.999A2 2 0 0 1 14 27zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm3-20a7 7 0 0 1 5.6 11.201.893.893 0 0 1 .107.092l5 5a1 1 0 0 1-1.414 1.414l-5-5a1.009 1.009 0 0 1-.093-.107 6.954 6.954 0 0 1-3.469 1.362l-1.463 4.357a1 1 0 0 1-.948.681H12.416a1 1 0 0 1-.943-.667L7.465 14H5a1 1 0 0 1 0-2h3.173a1 1 0 0 1 .942.667L9.587 14H18a7 7 0 0 1 7-7zm-6.71 9h-7.996l2.83 8H22.6l1.053-3.13A7.01 7.01 0 0 1 18.29 16zM25 9a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdMarketplaces.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdMarketplaces.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdMarketplaces.groupName = "Menu";
export default MdMarketplaces;
