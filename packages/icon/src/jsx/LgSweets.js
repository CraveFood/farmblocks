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
      d="M45.288 47.982a.695.695 0 00.694-.694V24.712a.695.695 0 00-.694-.694H28.712a.695.695 0 00-.694.694v22.576c0 .383.311.694.694.694h16.576zm0 2.036H28.712a2.73 2.73 0 01-2.73-2.73V24.712a2.73 2.73 0 012.73-2.73h16.576a2.73 2.73 0 012.73 2.73v22.576a2.73 2.73 0 01-2.73 2.73zM71.982 42a1.018 1.018 0 112.036 0v5.288a2.73 2.73 0 01-2.73 2.73H54.712a2.73 2.73 0 01-2.73-2.73V24.712a2.73 2.73 0 012.73-2.73H56a1.018 1.018 0 110 2.036h-1.288a.695.695 0 00-.694.694v22.576c0 .383.311.694.694.694h16.576a.695.695 0 00.694-.694V42zm0-5a1.018 1.018 0 112.036 0v2a1.018 1.018 0 11-2.036 0v-2zM28.018 71a1.018 1.018 0 11-2.036 0V56.712a2.73 2.73 0 012.73-2.73h16.576a2.73 2.73 0 012.73 2.73v22.576a1.018 1.018 0 11-2.036 0V56.712a.695.695 0 00-.694-.694H28.712a.695.695 0 00-.694.694V71zm0 8.288a1.018 1.018 0 11-2.036 0V75a1.018 1.018 0 112.036 0v4.288zM71.982 70a1.018 1.018 0 112.036 0v9.288a1.018 1.018 0 11-2.036 0V70zm-17.964 6a1.018 1.018 0 11-2.036 0V56.712a2.73 2.73 0 012.73-2.73h16.576a2.73 2.73 0 012.73 2.73V66a1.018 1.018 0 11-2.036 0v-9.288a.695.695 0 00-.694-.694H54.712a.695.695 0 00-.694.694V76zM19 69a1.5 1.5 0 013 0v4a1.5 1.5 0 01-3 0v-4zm61.115-34.338A1.5 1.5 0 0181 36.03V73a1.5 1.5 0 01-3 0V36.958a12.497 12.497 0 01-6.334-8.921c-1.016.305-2.08.463-3.166.463-6.028 0-10.864-4.58-10.997-10.5H24.5c-1.556 0-2.5.774-2.5 1.97V64a1.5 1.5 0 01-3 0V19.97c0-2.999 2.404-4.97 5.5-4.97h34.63c1.259 0 1.725 1.188 1.4 2.07-.019.196-.03.463-.03.68 0 4.358 3.52 7.75 8 7.75a7.958 7.958 0 003.794-.956A1.5 1.5 0 0174.5 26.03a9.492 9.492 0 005.615 8.633zM81 84a1.5 1.5 0 01-3 0v-6a1.5 1.5 0 013 0v6z"
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
const LgSweets = withWrapper(Vector);
LgSweets.groupName = "Categories";
export default LgSweets;
