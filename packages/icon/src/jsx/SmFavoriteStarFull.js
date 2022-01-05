import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M11.103 2.557a1 1 0 0 1 1.73-.11l.064.11 2.411 4.888 5.395.784c.74.108 1.08.939.703 1.525l-.07.096-.078.085-3.904 3.804.922 5.373a1.001 1.001 0 0 1-1.249 1.135l-.102-.034-.1-.047L12 17.63l-4.825 2.536a1.001 1.001 0 0 1-1.465-.831l.001-.113.013-.11.921-5.373-3.903-3.804a1.001 1.001 0 0 1 .329-1.647l.112-.036.114-.023 5.394-.784 2.412-4.888Z"
      fill={color}
      fillRule="evenodd"
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
const SmFavoriteStarFull = withWrapper(Vector);
SmFavoriteStarFull.groupName = "Actions";
export default SmFavoriteStarFull;
