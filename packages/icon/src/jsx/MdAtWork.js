import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M28.296 20.269c1.562 0 2.843 1.223 2.96 2.777h1.291c.354 0 .65.273.682.63l.693 7.472h.164a.92.92 0 01.914.926.92.92 0 01-.914.926H5.914A.92.92 0 015 32.074a.92.92 0 01.914-.926h16.755l.693-7.472a.689.689 0 01.682-.63h1.291c.117-1.554 1.398-2.777 2.96-2.777zm1.582 2.777a1.606 1.606 0 00-1.582-1.389c-.806 0-1.472.604-1.583 1.39h3.165zm-4.551 1.39h-.66l-.622 6.712h8.501l-.623-6.713h-.658v.232a.69.69 0 01-.686.694.69.69 0 01-.685-.694v-.232h-3.197v.232a.69.69 0 01-.685.694.69.69 0 01-.685-.694v-.232zM5.914 32.073V8.926A.92.92 0 016.827 8h10.05a.92.92 0 01.913.926v2.778h4.567a.92.92 0 01.914.926v19.444a.92.92 0 01-.914.926.92.92 0 01-.913-.926V13.556H7.74v18.518a.92.92 0 01-.914.926.92.92 0 01-.913-.926zm1.827-20.37h8.222V9.852H7.74v1.852zm6.4 17.592v-1.852H9.569v1.852h4.574zm.914 0h4.562v-1.852h-4.562v1.852zm-.913-5.555v-1.852H9.568v1.852h4.574zm.913 0h4.562v-1.852h-4.562v1.852zm-.913-5.556v-1.852H9.568v1.852h4.574zm.913 0h4.562v-1.852h-4.562v1.852zm-5.487-2.778h10.049a.92.92 0 01.913.926v1.852a.92.92 0 01-.913.926H9.567a.92.92 0 01-.913-.926v-1.852a.92.92 0 01.914-.926zm0 5.556h10.049a.92.92 0 01.913.926v1.852a.92.92 0 01-.913.926H9.567a.92.92 0 01-.913-.926v-1.852a.92.92 0 01.914-.926zm0 5.556h10.049a.92.92 0 01.913.925v1.852a.92.92 0 01-.913.926H9.567a.92.92 0 01-.913-.926v-1.852a.92.92 0 01.914-.925z"
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
const MdAtWork = withWrapper(Vector);
MdAtWork.groupName = "Delivery";
export default MdAtWork;
