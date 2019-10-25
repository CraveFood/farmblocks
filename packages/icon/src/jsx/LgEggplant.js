import React from "react";
import PropTypes from "prop-types";

const LgEggplant = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M42.624 19.897c-.05-.313-.063-.62-.064-1.073v-.075c0-.177 0-.253-.003-.341-.066-2.497-2.013-4.882-4.445-5.447a1.5 1.5 0 1 1 .679-2.922c3.762.873 6.663 4.428 6.765 8.29.003.122.004.215.004.418v.072c0 .09.001.167.003.236 2.192-1.48 4.693-2.076 7.524-1.26 1.064.307 1.959.722 3.285 1.457l.658.367c2.986 1.666 4.72 2.148 7.86 1.693a1.5 1.5 0 0 1 1.686 1.773c-.698 3.565-4.008 7.038-7.784 8.342 1.477 3.723 3.355 6.847 7.431 12.87l.65.96c5.827 8.621 8.224 13.302 9.153 19.642 1.132 7.735-1.292 15.706-6.619 20.745a18.558 18.558 0 0 1-3.053 2.332 19.774 19.774 0 0 1-3.448 1.673l-.099.032c-10.121 2.98-20.85-1.194-25.55-10.594-3.225-6.45-3.813-11.471-3.741-23.493.016-2.828.016-4.136-.014-5.842.037-1.293.096-2.612.178-3.967a85.23 85.23 0 0 1 .315-3.812l.224-2.115c-2.044.586-4.112.622-7.81.398-1.244-.076-1.858-1.548-1.037-2.486.882-1.006 1.351-2.43 2.105-5.908l.096-.444c.689-3.168 1.174-4.764 2.112-6.303 2.415-3.963 7.617-6.09 12.939-5.218zm-3.892 17.369a9.515 9.515 0 0 1-1.354 1.136c0 .05-.003.1-.008.149-.089.9-.367 3.502-.39 3.728a82.308 82.308 0 0 0-.305 3.686 125.11 125.11 0 0 0-.174 3.802c.031 1.668.032 2.993.015 5.845-.07 11.563.479 16.243 3.424 22.134 4.02 8.038 13.212 11.627 21.97 9.072a16.767 16.767 0 0 0 2.877-1.4 15.557 15.557 0 0 0 2.559-1.954c4.582-4.335 6.708-11.323 5.712-18.13-.844-5.756-3.085-10.134-8.67-18.398l-.65-.958c-4.395-6.494-6.337-9.762-7.955-14.01a7.725 7.725 0 0 1-2.083-.263c-.285 1.453-.91 2.902-1.977 4.921l-.23.435c-1.215 2.291-1.689 3.413-1.89 4.75-.237 1.587-2.465 1.743-2.92.204-.279-.938-1.257-1.778-2.758-2.415a26.256 26.256 0 0 0-1.442-.548l-.03-.01c-1.744-.628-2.526-.964-3.461-1.59a5.625 5.625 0 0 1-.26-.186zm-1.851-2.416c-.377-.889-.571-1.889-.585-2.941a1.5 1.5 0 0 1 3-.038c.018 1.393.508 2.512 1.368 3.09.66.442 1.29.713 2.805 1.258l.029.01c.776.28 1.146.418 1.597.609.935.396 1.764.871 2.456 1.432.323-.744.743-1.58 1.291-2.614l.229-.432c1.224-2.317 1.74-3.673 1.808-5.123.046-.964-.219-1.957-.716-2.678a1.5 1.5 0 1 1 2.47-1.702c.572.829.957 1.812 1.136 2.838.048.015.096.032.143.052 2.994 1.28 7.15-1.144 8.935-4.134-2.567.002-4.577-.73-7.282-2.24l-.647-.361c-1.144-.634-1.865-.968-2.662-1.198-2.5-.72-4.698.262-6.663 2.255a1.497 1.497 0 0 1-1.383.444 1.497 1.497 0 0 1-.218-.06c-4.777-1.595-9.728.049-11.746 3.36-.703 1.153-1.124 2.54-1.741 5.378l-.096.443c-.48 2.21-.862 3.713-1.334 4.875 2.295.05 3.684-.127 5.132-.67a6.635 6.635 0 0 0 2.674-1.853zm34.003 34.87a1 1 0 0 1-1.998-.1c.061-1.216.003-2.439-.175-3.65-.579-3.952-2.249-7.711-5.311-12.555-.827-1.307-1.522-2.351-3.142-4.745l-.852-1.26c-1.52-2.256-2.548-3.836-3.537-5.48a1 1 0 0 1 1.713-1.031c.968 1.608 1.98 3.163 3.482 5.393l.85 1.257c1.632 2.411 2.334 3.466 3.176 4.798 3.199 5.059 4.973 9.051 5.6 13.333.197 1.34.261 2.694.194 4.04zm-5.18 12.004a1 1 0 1 1-1.375-1.452c1.533-1.451 2.741-3.343 3.532-5.516a1 1 0 0 1 1.88.684c-.895 2.458-2.272 4.614-4.038 6.284z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
LgEggplant.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgEggplant.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgEggplant.groupName = "Subcategories";
export default LgEggplant;
