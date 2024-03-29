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
      d="M66.362 20c11.044 0 18.293 6.003 19.469 16.161a1.5 1.5 0 0 1-2.98.345C81.855 27.91 75.927 23 66.36 23c-4.946 0-10.156 3.153-14.81 7.726a1.5 1.5 0 0 1-2.103 0C44.794 26.153 39.585 23 34.638 23 24.109 23 18 28.948 18 39.172c0 3.624 1.466 7.33 3.945 10.903 1.539 2.219 3.237 4.05 4.246 4.932l8.777 8.426a1.5 1.5 0 0 1-2.078 2.164l-8.724-8.377c-.31-.27-.921-.866-1.594-1.592a35.14 35.14 0 0 1-3.092-3.843C16.683 47.755 15 43.499 15 39.172 15 27.273 22.469 20 34.639 20c5.549 0 10.962 3.05 15.86 7.584C55.399 23.05 60.813 20 66.363 20ZM41.245 69.459a1.5 1.5 0 1 1-2.078 2.164l-2.112-2.028a1.5 1.5 0 1 1 2.078-2.164l2.112 2.028Zm41.428-27.281a1.5 1.5 0 0 1 2.935.625c-.677 3.18-2.17 6.261-4.231 9.19a35.924 35.924 0 0 1-4.058 4.799c-.186.184-.478.463-.47.455L53.226 79.884A3.86 3.86 0 0 1 50.5 81a3.85 3.85 0 0 1-2.71-1.098l-4.302-4.132a1.5 1.5 0 0 1 2.078-2.164l4.32 4.149c.159.158.378.245.614.245a.879.879 0 0 0 .632-.263l23.62-22.635a30.069 30.069 0 0 0 1.408-1.425 32.949 32.949 0 0 0 2.763-3.411c1.846-2.622 3.168-5.35 3.75-8.088ZM23.5 39.172a1 1 0 0 1-2 0c0-6.21 2.54-10.271 7.526-11.885a1 1 0 1 1 .616 1.902c-4.101 1.328-6.142 4.59-6.142 9.983Zm49.145 1.476a.5.5 0 1 1 .71.704l-1.072 1.08a.5.5 0 1 1-.71-.704l1.072-1.08Zm4.072-4a.5.5 0 1 1 .71.704l-1.072 1.08a.5.5 0 1 1-.71-.704l1.072-1.08Zm-3.362 1.08a.5.5 0 1 1-.71.704l-1.072-1.08a.5.5 0 1 1 .71-.704l1.072 1.08Zm4.072 4a.5.5 0 1 1-.71.704l-1.072-1.08a.5.5 0 1 1 .71-.704l1.072 1.08ZM75 46a.5.5 0 1 1-1 0v-4.5a.5.5 0 1 1 1 0V46Zm0-8.5a.5.5 0 1 1-1 0V33a.5.5 0 1 1 1 0v4.5ZM72.5 39a.5.5 0 1 1 0 1H68a.5.5 0 1 1 0-1h4.5Zm8.5 0a.5.5 0 1 1 0 1h-4.5a.5.5 0 1 1 0-1H81Z"
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
const LgFavoriteHeart = withWrapper(Vector);
LgFavoriteHeart.groupName = "Actions";
export default LgFavoriteHeart;
