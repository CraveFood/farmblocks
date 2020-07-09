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
      d="M75.794 24.449l-.104-.095c-7.518-7.518-18.496-7.415-27.934 2.022a38.535 38.535 0 00-5.351 6.7c-2.772 4.392-4.55 9.104-5.525 13.833a39.598 39.598 0 00-.687 4.686 22.693 22.693 0 00-.093 1.963v.023c.004.317-.04.75-.172 1.262a6.25 6.25 0 01-1.16 2.328c-1.175 1.486-3.027 2.528-5.605 2.973a1.5 1.5 0 01-.255.022h-.287a1.5 1.5 0 010-3h.155c1.802-.33 2.954-.99 3.637-1.855.308-.39.503-.804.61-1.215.06-.236.078-.406.077-.474v-.035c-.005-.494.021-1.254.104-2.241.128-1.543.366-3.237.738-5.043 1.044-5.063 2.948-10.11 5.926-14.829a41.533 41.533 0 015.766-7.219c10.58-10.58 23.429-10.72 32.127-2.072l.052.043.104.094c8.708 8.708 8.61 21.572-1.983 32.167a41.705 41.705 0 01-7.173 5.742c-4.736 3.004-9.8 4.924-14.88 5.98-1.808.376-3.502.615-5.042.746-.98.083-1.728.11-2.207.106l-.053-.001h.014c-.068 0-.234.015-.458.068-.383.09-.765.258-1.122.52-.901.66-1.551 1.835-1.791 3.766l-.04-.005c-.218.757-.222.756-.27.752l-.082.103-.007.009-.086.1a1.5 1.5 0 01-2.438-1.72c.39-2.519 1.426-4.315 2.941-5.426.7-.512 1.449-.84 2.203-1.018a4.988 4.988 0 011.206-.148 22.36 22.36 0 001.937-.095 39.545 39.545 0 004.684-.694c4.745-.987 9.475-2.78 13.884-5.576a38.707 38.707 0 006.658-5.33c9.41-9.41 9.513-20.348 2.032-27.876l-.05-.041zM52.01 27.157a1 1 0 011.282 1.536 27.641 27.641 0 00-1.823 1.671c-3.995 3.996-6.725 8.632-8.318 13.503a1 1 0 01-1.901-.622c1.687-5.158 4.577-10.067 8.804-14.295a29.64 29.64 0 011.956-1.793zm10.332-4.427a1 1 0 01.07 2c-1.654.057-3.347.484-5.065 1.306a1 1 0 11-.863-1.804c1.962-.939 3.925-1.433 5.858-1.502zm13.365 15.436a1.486 1.486 0 11-.779-2.87 1.488 1.488 0 11.779 2.87zm-1.31 6.52a1.487 1.487 0 11-.78-2.869 1.487 1.487 0 01.78 2.87zm-4.43-4.96a1.487 1.487 0 11-.779-2.87 1.487 1.487 0 01.779 2.87zM21.42 78.586l-4.784-1.196a1.5 1.5 0 01-1.091-1.82l1.414-5.656a1.5 1.5 0 011.543-1.134l5.339.315 9.422-9.424a1.5 1.5 0 112.122 2.121l-9.9 9.9a1.5 1.5 0 01-1.148.437l-4.77-.28-.748 2.994 4.191 1.048a1.5 1.5 0 011.102 1.094l1.05 4.202 2.996-.749-.28-4.77a1.5 1.5 0 01.436-1.148l9.9-9.899a1.5 1.5 0 012.12 2.121l-9.422 9.423.313 5.339a1.5 1.5 0 01-1.133 1.543l-5.657 1.414a1.5 1.5 0 01-1.82-1.091l-1.195-4.785z"
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
const LgPoultry = withWrapper(Vector);
LgPoultry.groupName = "Categories";
export default LgPoultry;
