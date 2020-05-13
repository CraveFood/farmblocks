import * as React from "react";
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
      d="M86.38 36.445c0-1.618-.12-2.963-.395-4.604A2.215 2.215 0 0083.801 30H16.585c-1.083 0-2.01.785-2.186 1.85a27.396 27.396 0 00-.4 4.702c0 18.858 16.16 34.107 36.192 34.107 20.003 0 36.189-15.342 36.189-34.214zm3 0c0 20.566-17.564 37.214-39.19 37.214C28.54 73.659 11 57.107 11 36.552c0-1.798.137-3.36.439-5.19A5.216 5.216 0 0116.585 27H83.8a5.215 5.215 0 015.143 4.345c.302 1.8.436 3.31.436 5.1zm-70.938 2.962a1 1 0 01-1.99.2c-.089-.883-.134-1.768-.134-2.657 0-.203 0-.368-.003-.732-.013-1.914.019-2.753.209-3.813a1 1 0 011.969.353c-.161.898-.19 1.657-.178 3.446l.003.746c0 .821.042 1.64.124 2.457zm51.38 19.346a1 1 0 111.125 1.654c-5.896 4.01-13.137 6.22-20.757 6.22-14.985 0-28.082-8.6-32.4-20.993a1 1 0 111.89-.658c4.027 11.561 16.349 19.652 30.51 19.652 7.22 0 14.07-2.091 19.632-5.875zM81.69 32.758a1 1 0 011.968-.353c.267 1.489.404 3.01.404 4.546 0 7.81-3.455 15.134-9.514 20.626a1 1 0 11-1.343-1.482c5.653-5.123 8.857-11.917 8.857-19.144 0-1.416-.126-2.82-.372-4.193zm-4.453 5.108a1.412 1.412 0 11-2.702-.818 1.412 1.412 0 012.702.818zm-1.924 6.366a1.412 1.412 0 11-2.703-.818 1.412 1.412 0 012.704.818zm-6.06-4.353a1.413 1.413 0 11.819-2.705 1.413 1.413 0 01-.819 2.705z"
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
const LgWatermelon = withWrapper(Vector);
LgWatermelon.groupName = "Subcategories";
export default LgWatermelon;
