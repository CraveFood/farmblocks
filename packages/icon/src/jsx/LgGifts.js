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
      d="M30 55v4.712a1 1 0 01-2 0V55h-6v8h22v-8H30zm0-2h14v-7.261c-.24.165-.532.261-.846.261H22v7h6v-4.28a1 1 0 012 0V53zm0 24h14V65H29.581a.999.999 0 01.419.814V77zm-2 0V65.814c0-.336.165-.633.419-.814H22v12h6zm-9-43h-3v9h27.154c.314 0 .605.096.846.261V34H21v4.72a1 1 0 01-2 0V34zm35 0h-8v43h8V34zm2 0v9.002l.086-.002H84v-9H56zm0 11.998V53h22v-7H56.086c-.03 0-.058 0-.086-.002zM56 55v8h22v-8H56zm0 10v12h22V65H56zm8.688-34H85.5a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H81v32.5a1.5 1.5 0 01-1.5 1.5h-59a1.5 1.5 0 01-1.5-1.5V46h-4.5a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h20.777c-2.523-1.163-4.442-2.739-5.71-4.657-2.556-3.867-1.932-8.661 1.269-11.244 3.09-2.495 7.097-.723 11.375 3.753 2.843 2.974 5.746 7.142 7.771 10.975 2.026-3.833 4.929-8 7.772-10.975 4.278-4.476 8.284-6.248 11.375-3.753 3.2 2.583 3.824 7.377 1.268 11.244-1.268 1.918-3.187 3.494-5.71 4.657zM52 43a1 1 0 010 2h-4a1 1 0 010-2h4zM40.042 20.925c-3.307-3.46-5.926-4.619-7.322-3.492-1.972 1.592-2.37 4.653-.65 7.255 2.167 3.28 7.14 5.432 14.748 5.6-1.862-3.327-4.36-6.836-6.776-9.363zm27.853 3.763c1.72-2.602 1.321-5.663-.65-7.255-1.397-1.127-4.015.032-7.322 3.492-2.417 2.527-4.915 6.036-6.777 9.363 7.609-.168 12.581-2.32 14.749-5.6z"
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
const LgGifts = withWrapper(Vector);
LgGifts.groupName = "Categories";
export default LgGifts;
