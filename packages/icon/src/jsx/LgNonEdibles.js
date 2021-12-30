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
      d="M35.413 71.5H19.5a1 1 0 0 1 0-2h15.996l.906-21.751a24.23 24.23 0 0 1-2.416-1.808c-1.771-1.514-2.983-3.043-3.374-4.655a4.675 4.675 0 0 1-.071-.352c-.237-1.46.028-6.65.655-14.874.08-1.05.165-2.135.254-3.249a1103.268 1103.268 0 0 1 .994-11.588 1.5 1.5 0 1 1 2.987.275l-.085.936a1068.287 1068.287 0 0 0-.905 10.617c-.09 1.11-.174 2.19-.254 3.237-.589 7.734-.862 13.073-.685 14.165.007.041.015.083.026.126.204.844 1.076 1.944 2.408 3.082a21.281 21.281 0 0 0 1.91 1.445c.39.263.689.45.849.543a1.5 1.5 0 0 1 .739 1.407L37.67 89.405a1.5 1.5 0 1 1-2.998-.125l.74-17.78Zm20.087-2v-59A1.5 1.5 0 0 1 57 9c.548 0 1.37.15 2.368.573 1.57.667 3.11 1.845 4.515 3.633 5.49 6.996 7.631 21.3 4.773 45.193a1.5 1.5 0 0 1-.402.856l-1.712 1.8.582 8.445H80.5a1 1 0 0 1 0 2H67.262l1.234 17.897a1.5 1.5 0 1 1-2.992.206l-1.878-27.23-1.464 1.293a1 1 0 1 1-1.324-1.498l3.166-2.797 1.732-1.822c2.685-22.878.65-36.295-4.213-42.49-.991-1.263-2.016-2.092-3.023-2.585V82.5a1.5 1.5 0 0 1-3 0v-11h-8.181l.394 11.007a1.5 1.5 0 0 1-2.998.108l-1.276-35.618a1.5 1.5 0 0 1 .871-1.417 21.284 21.284 0 0 0 2.645-1.92c1.332-1.137 2.205-2.237 2.409-3.08.01-.044.019-.086.025-.127.178-1.092-.096-6.43-.685-14.165a1100.147 1100.147 0 0 0-1.245-14.79 1.5 1.5 0 1 1 2.988-.275l.085.941a1071.103 1071.103 0 0 1 .909 10.648c.09 1.113.174 2.198.254 3.248.627 8.225.893 13.414.656 14.874-.02.117-.043.234-.071.352-.391 1.612-1.603 3.14-3.375 4.655a24.234 24.234 0 0 1-2.437 1.821l.779 21.738H55.5ZM39.217 32.978a1 1 0 1 1-1.999-.067l.72-21.585a1 1 0 1 1 2 .067l-.72 21.585Zm6.455-.067a1 1 0 1 1-1.999.067l-.72-21.585a1 1 0 1 1 2-.067l.72 21.585Z"
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
const LgNonEdibles = withWrapper(Vector);
LgNonEdibles.groupName = "Categories";
export default LgNonEdibles;
