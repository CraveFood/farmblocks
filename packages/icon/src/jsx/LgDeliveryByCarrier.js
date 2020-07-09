import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M30.994 45.548c3.866 6.085 10.574 10.188 18.256 10.44V45.702c0-.053.005-.104.016-.154H30.994zm-.874-1.5h39.76A22.402 22.402 0 0072.5 33.5C72.5 21.073 62.427 11 50 11S27.5 21.073 27.5 33.5c0 3.812.948 7.402 2.62 10.548zm38.886 1.5H50.734c.01.05.016.101.016.154v10.286c7.682-.252 14.39-4.355 18.256-10.44zM50.75 58.989v6.674l9.301-8.72a25.39 25.39 0 01-9.301 2.046zm-1.5 0a25.39 25.39 0 01-9.302-2.047l9.302 8.722v-6.675zm2.8 7.511H70a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-.5V92a1.5 1.5 0 01-1.5 1.5H32a1.5 1.5 0 01-1.5-1.5V75.5H30a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h17.949l-14.57-13.66C27.943 48.162 24.5 41.233 24.5 33.5 24.5 19.417 35.917 8 50 8s25.5 11.417 25.5 25.5c0 7.737-3.445 14.668-8.885 19.345L52.05 66.5zm-18.55 9v15h15.75V82a.75.75 0 111.5 0v8.5H66.5v-15h-33zM49.25 78a.75.75 0 111.5 0v1.151a.75.75 0 11-1.5 0V78zm12.928 2.202a.605.605 0 000-1.212h-5.423a.605.605 0 000 1.212h5.423zm0 1.5h-5.423a2.105 2.105 0 010-4.212h5.423a2.105 2.105 0 010 4.212zM31.5 72.5h37v-3h-37v3zm12.722-56.053a1 1 0 11-.641-1.894A19.984 19.984 0 0150 13.5a1 1 0 010 2c-1.99 0-3.934.323-5.779.947zM32 33.5a1 1 0 01-2 0 19.978 19.978 0 018.947-16.67 1 1 0 011.106 1.666A17.979 17.979 0 0032 33.5z"
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
const LgDeliveryByCarrier = withWrapper(Vector);
LgDeliveryByCarrier.groupName = "Delivery";
export default LgDeliveryByCarrier;
