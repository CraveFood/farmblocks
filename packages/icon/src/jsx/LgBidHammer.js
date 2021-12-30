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
      d="m56.442 27.339-1.414 1.414 9.103 9.104a1 1 0 0 1-1.414 1.414l-9.103-9.103-14.85 14.849 16.971 16.97L73.413 44.31l-16.97-16.971Zm-1.277-1.552-2.911-4.866-19.91 19.908 4.88 2.928c.036-.055.078-.106.126-.155l17.815-17.815Zm-6.147 33.725L26.305 82.225c-2.009 2.009-5.211 1.99-7.42.057a1.85 1.85 0 0 1-.207-.187l-.1-.1a1.87 1.87 0 0 1-.134-.151c-1.944-2.204-1.934-5.38.083-7.397L37.68 55.295a1.018 1.018 0 0 1 .05-.05l3.51-3.51-5.173-5.174-6.912-4.148a1.5 1.5 0 0 1-.29-2.347L51.494 17.44a1.5 1.5 0 0 1 2.348.29l4.117 6.883 5.202 5.202.467-.467c2.014-2.014 5.229-1.99 7.439-.04.05.04.101.085.15.134l.104.102.03.03c.058.058.11.117.156.177 1.925 2.203 1.91 5.364-.102 7.375l-.466.467 5.173 5.173 6.912 4.148a1.5 1.5 0 0 1 .29 2.347L60.683 71.887a1.5 1.5 0 0 1-2.347-.29l-4.147-6.912-5.172-5.173Zm-2.122-2.121-3.535-3.535-2.828 2.828 3.535 3.535 2.828-2.828Zm10.099 6.137 2.926 4.879 19.911-19.91-4.86-2.917L57.148 63.4c-.048.049-.1.09-.154.127Zm11.822-28.057.466-.467c.894-.895.876-2.328-.128-3.381-1.066-1-2.531-1.03-3.407-.155l-.467.467 3.536 3.536ZM39.119 58.098l-18.47 18.47c-.89.89-.877 2.312.11 3.364 1.067 1.017 2.543 1.053 3.424.172l18.47-18.47-3.534-3.536Zm25.72-16.705a1 1 0 0 1 1.415-1.415l1.414 1.414a1 1 0 0 1-1.414 1.415l-1.414-1.414Z"
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
const LgBidHammer = withWrapper(Vector);
LgBidHammer.groupName = "States";
export default LgBidHammer;
