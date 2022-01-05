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
      d="M46.299 23.296c-.05-2.564.754-5.138 2.431-7.365 1.03-1.37 2.538-2.232 4.184-1.84 1.598.38 2.37 1.708 2.452 3.255.089 1.695-.181 3.03-.992 5.414 3.28-3.233 6.962-4.768 10.966-3.71 3.42.904 3.64 4.628.846 7.526l-.044.045a9.428 9.428 0 0 1 4.463 2.729c1.994 2.162 1.108 4.683-1.411 6.061 4.219 3.786 6.624 9.233 6.624 16.135 0 16.542-12.294 35.174-25.659 35.174-13.364 0-25.659-18.632-25.659-35.174 0-6.902 2.406-12.349 6.625-16.135-2.52-1.378-3.406-3.899-1.413-6.061a9.424 9.424 0 0 1 4.333-2.691 10.28 10.28 0 0 1-.08-.083c-2.794-2.898-2.574-6.622.845-7.526 4.113-1.087 7.933.59 11.334 4.086l.155.16Zm16.207 5.91c-.867.44-1.822.84-2.86 1.193 2.483.68 4.734 1.646 6.714 2.885 2.11-.416 2.627-1.264 2.04-1.9-1.456-1.58-3.434-2.26-5.894-2.178Zm-23.847-2.85c.046.021.091.045.135.072 2.014 1.065 4.716 1.896 8.025 2.366a25.926 25.926 0 0 0-1.79-2.419 20.88 20.88 0 0 0-1.035-1.147c-2.723-2.8-5.543-4.037-8.417-3.277-.806.213-.857 1.086.547 2.543.648.672 1.497 1.298 2.535 1.861ZM37.636 29.2c-2.378-.044-4.297.641-5.718 2.182-.587.637-.07 1.485 2.04 1.9 1.956-1.223 4.175-2.18 6.623-2.858a21.895 21.895 0 0 1-2.945-1.224Zm35.182 22.345c0-12.443-8.82-19.334-22.659-19.334-13.838 0-22.659 6.891-22.659 19.334 0 15.083 11.277 32.174 22.66 32.174 11.381 0 22.658-17.09 22.658-32.174ZM32.031 55.48a1 1 0 0 1-1.978.296 28.7 28.7 0 0 1-.328-4.23c0-8.858 4.732-13.988 12.39-16.088a1 1 0 1 1 .528 1.928c-6.851 1.88-10.918 6.288-10.918 14.16 0 1.257.103 2.576.306 3.934Zm2.68 9.178a1 1 0 1 1-1.835.793 42.13 42.13 0 0 1-1.643-4.48 1 1 0 1 1 1.914-.58 40.13 40.13 0 0 0 1.565 4.267Zm29.315-40.164c1.405-1.457 1.353-2.33.548-2.543-3.264-.863-6.464.858-9.453 4.425a25.948 25.948 0 0 0-1.79 2.418c5.116-.727 8.782-2.316 10.695-4.3Zm-14.008 2.029c.228-1.034.483-1.818 1.125-3.613.992-2.771 1.301-3.992 1.228-5.406-.02-.362-.088-.48-.152-.495-.24-.057-.701.206-1.092.726-1.993 2.647-2.35 5.909-1.11 8.796v-.008Zm11.345 13.404a1.34 1.34 0 1 1-2.567-.773 1.34 1.34 0 0 1 2.567.773Zm4.356 4.116a1.34 1.34 0 1 1-2.567-.776 1.34 1.34 0 0 1 2.567.776Zm-7.577 1.911a1.34 1.34 0 1 1 .774-2.566 1.34 1.34 0 0 1-.774 2.566Zm5.924 3.566a1.34 1.34 0 1 1-2.567-.772 1.34 1.34 0 0 1 2.567.772Zm4.357 4.117a1.341 1.341 0 1 1-2.567-.778 1.341 1.341 0 0 1 2.567.778Zm-1.826 6.042a1.34 1.34 0 1 1-2.566-.773 1.34 1.34 0 0 1 2.566.773Zm3.299-11.356a1.34 1.34 0 1 1-2.566-.774 1.34 1.34 0 0 1 2.566.774Zm-9.051 7.224a1.34 1.34 0 1 1 .777-2.567 1.34 1.34 0 0 1-.777 2.567Z"
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
const LgStrawberries = withWrapper(Vector);
LgStrawberries.groupName = "Subcategories";
export default LgStrawberries;
