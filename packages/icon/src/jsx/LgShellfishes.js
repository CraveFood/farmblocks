import React from "react";
import PropTypes from "prop-types";

const LgShellfishes = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M32.581 67.771a26.425 26.425 0 0 1 1.74-3.66l-2.692-1.585a1 1 0 0 1 1.015-1.723l2.742 1.615c.097-.14.195-.279.294-.417 3.403-4.725 8.083-7.588 14.176-7.588.018 0 .037 0 .055.002l.055-.002c6.092 0 10.773 2.863 14.176 7.588a25.587 25.587 0 0 1 3.053 5.653 447.283 447.283 0 0 0 8.25-5.138 461.724 461.724 0 0 0 3.81-2.454l.316-.207c2.996-1.87 4.359-3.223 4.36-4.36 0-.842-.453-1.625-1.233-2.1a3.105 3.105 0 0 1-1.432-1.995 3.047 3.047 0 0 1 .495-2.403c.293-.417.446-.892.446-1.384 0-1.157-.874-2.195-2.097-2.444a3.158 3.158 0 0 1-2.162-1.608 3.037 3.037 0 0 1-.067-2.715c.156-.334.232-.668.232-1 0-1.336-1.128-2.453-2.556-2.505-.107.015-.2.026-.292.033a3.172 3.172 0 0 1-2.51-.916 3.069 3.069 0 0 1-.883-2.55l.026-.194.015-.115c-.03-1.342-1.2-2.45-2.658-2.45-.05 0-.117.007-.303.035l-.037.006-.067.01a3.215 3.215 0 0 1-2.319-.55 3.083 3.083 0 0 1-1.275-2.037c-.196-1.234-1.28-2.136-2.607-2.136-.455 0-.9.12-1.342.37a3.23 3.23 0 0 1-2.51.275 3.143 3.143 0 0 1-1.925-1.64c-.43-.893-1.38-1.481-2.41-1.481-.793 0-1.542.348-2.061.961-1.231 1.45-3.633 1.449-4.862-.001a2.696 2.696 0 0 0-2.058-.96c-1.033 0-1.982.588-2.412 1.482a3.147 3.147 0 0 1-1.932 1.641 3.23 3.23 0 0 1-2.504-.277 2.698 2.698 0 0 0-1.34-.37c-1.33 0-2.415.902-2.61 2.138a3.101 3.101 0 0 1-1.28 2.037c-.67.472-1.499.667-2.324.547L31 31.187a2.303 2.303 0 0 0-.318-.038c-1.459 0-2.63 1.109-2.66 2.45l.013.09.032.243a3.062 3.062 0 0 1-.886 2.525c-.318.317-.532.51-.822.708a2.975 2.975 0 0 1-.88.42 1.46 1.46 0 0 1-.963.329h-.017c-1.594 0-2.678.94-2.678 2.215 0 .277.05.467.23.855.407.867.383 1.8-.065 2.646-.44.835-1.232 1.384-2.166 1.576-1.225.249-2.094 1.274-2.094 2.425 0 .49.15.958.443 1.372.497.7.678 1.57.497 2.405a3.099 3.099 0 0 1-1.43 1.99c-.783.476-1.235 1.257-1.235 2.099 0 1.138 1.363 2.493 4.405 4.39a116.352 116.352 0 0 0 1.077.725 390.8 390.8 0 0 0 2.893 1.916c2.712 1.78 5.49 3.56 8.206 5.243zm1.736 1.068c.543.33 1.078.655 1.605.97 7.046 4.228 12.229 6.8 13.868 6.8 1.467 0 6.826-2.678 14.159-7.01.494-.292.997-.59 1.506-.896a23.421 23.421 0 0 0-.317-.803 23.61 23.61 0 0 0-2.62-4.73c-3.054-4.24-7.167-6.757-12.552-6.757l-.055-.001a1.016 1.016 0 0 1-.055.001c-5.386 0-9.499 2.516-12.553 6.757a23.607 23.607 0 0 0-2.62 4.73 23.16 23.16 0 0 0-.366.939zm25.192 6.753c-4.778 2.61-8.047 4.017-9.72 4.017-1.806 0-5.097-1.395-9.774-3.968H27.491a3.484 3.484 0 0 1-3.484-3.484v-6.23l.001-.055a435.456 435.456 0 0 1-5.002-3.309l-.237-.161c-3.89-2.426-5.77-4.294-5.77-6.905 0-1.904 1.012-3.651 2.679-4.662.035-.022.05-.043.055-.063.002-.008 0-.017-.013-.035a5.35 5.35 0 0 1-.995-3.106c0-2.6 1.895-4.837 4.494-5.364a.42.42 0 0 0 .104-.032c-.347-.751-.503-1.352-.503-2.106 0-2.84 2.2-4.929 5.07-5.188.236-.17.522-.28.903-.278a.496.496 0 0 0-.111.017l-.009.003a3.07 3.07 0 0 0 .39-.35c.018-.02.025-.038.026-.031l-.028-.207c0-.008 0-.008-.004-.031l-.004-.026a2.315 2.315 0 0 1-.033-.386c0-3.048 2.552-5.503 5.66-5.503.258 0 .436.02.777.073l.062.01a.217.217 0 0 0 .152-.03c.03-.022.045-.044.047-.059.429-2.708 2.785-4.666 5.573-4.666.977 0 1.93.258 2.81.754a.226.226 0 0 0 .171.02.147.147 0 0 0 .092-.069c.932-1.94 2.937-3.181 5.115-3.181 1.673 0 3.259.738 4.346 2.02.031.037.255.037.286 0a5.692 5.692 0 0 1 4.349-2.02c2.176 0 4.18 1.241 5.114 3.183a.145.145 0 0 0 .088.066c.057.017.123.01.169-.016a5.684 5.684 0 0 1 2.816-.757c2.786 0 5.14 1.958 5.57 4.668.003.016.015.036.041.054.04.028.096.041.156.033l.054-.009.036-.005c.332-.05.501-.07.75-.07 3.11 0 5.66 2.455 5.66 5.504 0 .142-.01.231-.032.378l-.007.053-.027.201c-.001.011.005.029.026.05.038.037.085.055.155.049.043-.003.09-.01.177-.024a1.5 1.5 0 0 1 .247-.02c3.11 0 5.66 2.456 5.66 5.507 0 .777-.175 1.543-.516 2.273-.006.013-.005.024.003.04.016.03.056.06.11.07 2.6.53 4.497 2.781 4.497 5.384a5.39 5.39 0 0 1-.998 3.117c-.01.014-.013.028-.011.036.005.021.02.044.054.064 1.668 1.012 2.68 2.761 2.68 4.668-.005 2.61-1.882 4.474-5.743 6.884a140.691 140.691 0 0 1-1.128.734 464.715 464.715 0 0 1-4.742 3.033v6.007a3.485 3.485 0 0 1-3.485 3.485h-11.94c-.133 0-.262-.017-.385-.05zm5.186-2.95h7.139a.485.485 0 0 0 .485-.486v-4.128c-1.579.98-3.153 1.945-4.7 2.876a308.094 308.094 0 0 1-2.924 1.737zm-29.884 0a255.768 255.768 0 0 1-2.878-1.745 340.286 340.286 0 0 1-4.926-3.09v4.35c0 .267.217.484.484.484h7.32zm3.208-6.352a1 1 0 1 1 1.015-1.723l9.048 5.329a1 1 0 1 1-1.015 1.723l-9.048-5.33zm-15.313-9.02a1 1 0 1 1 1.015-1.723l4.44 2.615a1 1 0 1 1-1.015 1.723l-4.44-2.615z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgShellfishes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
LgShellfishes.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgShellfishes.groupName = "Categories";
export default LgShellfishes;