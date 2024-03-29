import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M26.846 59.264h-5.125a1.5 1.5 0 0 1-1.471-1.204l-4.221-21a1.5 1.5 0 0 1 1.47-1.796h26.64v-1.563a1.5 1.5 0 0 1 1.5-1.5c7.982 0 15.83-1.867 23.197-4.982.756-.32 1.492-.646 2.205-.978.253-.27.606-.448 1-.474a63.119 63.119 0 0 0 3.756-1.975 47.219 47.219 0 0 0 1.868-1.12c.313-.198.521-.337.62-.405.995-.688 2.354.024 2.354 1.233v18.105c.029-.002.059-.003.088-.003 2.97 0 4.411 2.23 4.411 5.411 0 3.182-1.441 5.411-4.41 5.411-.03 0-.06 0-.09-.002v18.106c0 1.21-1.358 1.921-2.353 1.233-.099-.068-.307-.207-.62-.405a47.217 47.217 0 0 0-1.868-1.12 65.796 65.796 0 0 0-6.961-3.428c-7.367-3.116-15.215-4.984-23.197-4.984a1.5 1.5 0 0 1-1.5-1.5v-1.06h-3.195l4.648 18.128a1.5 1.5 0 0 1-1.453 1.872h-11a1.5 1.5 0 0 1-1.453-1.127l-4.84-18.873Zm3.098 0 4.359 17h7.902l-4.359-17h-7.902Zm43.695-30.938V65.7a65.832 65.832 0 0 1 4 2.133v-41.64a65.836 65.836 0 0 1-4 2.132Zm-3 1.385-.635.272c-7.253 3.066-14.965 4.981-22.865 5.198v23.664c7.9.217 15.612 2.132 22.865 5.2.213.09.425.18.635.271V29.711Zm10 19.716c.029-.002.059-.003.088-.003.97 0 1.411-.683 1.411-2.41 0-1.729-.441-2.412-1.41-2.412-.03 0-.06 0-.09-.002v4.827Zm-36.5 6.837v-18H19.33l3.618 18h21.19Zm5.5-19a1 1 0 0 1 2 0v10a1 1 0 0 1-2 0v-10Zm0 14a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2Zm-24-7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2h-10Zm0 4a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2h-10Zm0 4a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2h-10Z"
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
const LgBullhorn = withWrapper(Vector);
LgBullhorn.groupName = "Menu";
export default LgBullhorn;
