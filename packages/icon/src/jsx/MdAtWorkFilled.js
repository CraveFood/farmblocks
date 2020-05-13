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
      d="M6.857 31.625A.866.866 0 016 30.75c0-.483.384-.875.857-.875h3.545c-.15-.218 1.622 2.14 1.307 1.75H6.857zm.857 0a.866.866 0 01-.857-.875V8.875c0-.483.384-.875.857-.875h9.429c.473 0 .857.392.857.875V11.5h4.286c.473 0 .857.392.857.875v19.25H7.714zM8.571 11.5h7.715V9.75H8.57v1.75zm6.006 14.875h-4.291a.866.866 0 00-.857.875c0 .483.383.875.857.875h4.291v-1.75zm.858 0v1.75h4.28a.866.866 0 00.856-.875.866.866 0 00-.857-.875h-4.28zm-.858-5.25h-4.291a.866.866 0 00-.857.875c0 .483.383.875.857.875h4.291v-1.75zm.858 0v1.75h4.28A.866.866 0 0020.57 22a.866.866 0 00-.857-.875h-4.28zm-.858-5.25h-4.291a.866.866 0 00-.857.875c0 .483.383.875.857.875h4.291v-1.75zm.858 0v1.75h4.28a.866.866 0 00.856-.875.866.866 0 00-.857-.875h-4.28zm15.2 6.344h1.211c.332 0 .61.257.64.595l.65 7.061h.154c.474 0 .858.392.858.875a.866.866 0 01-.858.875H20.571a.866.866 0 01-.857-.875c0-.483.384-.875.857-.875h2.007l.65-7.061a.648.648 0 01.64-.595h1.212c.109-1.469 1.31-2.625 2.777-2.625s2.668 1.156 2.778 2.625zm-1.293 0a1.51 1.51 0 00-1.485-1.313c-.756 0-1.38.57-1.485 1.313h2.97z"
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
const MdAtWorkFilled = withWrapper(Vector);
MdAtWorkFilled.groupName = "Delivery";
export default MdAtWorkFilled;
