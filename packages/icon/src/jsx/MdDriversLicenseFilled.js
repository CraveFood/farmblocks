import * as React from "react";
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
      d="M13.12 26.5c.868 0 1.51.487 1.941 1.255.243.43.375.854.43 1.153A.5.5 0 0115 29.5H7a.5.5 0 01-.492-.592c.056-.299.188-.722.43-1.153.433-.768 1.074-1.255 1.941-1.255h4.242zM8 9h25a1 1 0 01.993.883L34 10v18a1 1 0 01-.883.993L33 29H18c0-.18-.016-.364-.05-.549a6.262 6.262 0 00-.71-1.923 5.37 5.37 0 00-1.222-1.497c.565-.72.913-1.648.973-2.795l.007-.117L17 22v-3c0-.096-.005-.192-.013-.286C16.782 15.494 14.26 14 11.053 14c-1.568 0-2.985.345-4.054 1.07L7 10a1 1 0 01.883-.993L8 9h25zm3.053 7.5c2.05 0 3.334.748 3.44 2.415A.503.503 0 0114.5 19v3a.504.504 0 01-.005.07c-.09 1.69-1.366 2.43-3.442 2.43-2.098 0-3.443-.74-3.547-2.41A.61.61 0 017.5 22v-3a.6.6 0 01.01-.106c.122-1.647 1.472-2.394 3.543-2.394zM30 20.75H20a.75.75 0 00-.102 1.493l.102.007h10a.75.75 0 100-1.5zm0-3H20a.75.75 0 00-.102 1.493l.102.007h10a.75.75 0 100-1.5zm0-3H20a.75.75 0 00-.102 1.493l.102.007h10a.75.75 0 100-1.5z"
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
const MdDriversLicenseFilled = withWrapper(Vector);
MdDriversLicenseFilled.groupName = "Docs";
export default MdDriversLicenseFilled;
