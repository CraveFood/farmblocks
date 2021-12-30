import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M28.166 14.995V13.26L27.226 9h-1.53l.611 4.205v1.79h1.859Zm1 0H31v-1.833L29.258 9.06a.102.102 0 0 0-.095-.06h-.912l.903 4.098.012.107v1.79Zm-3.857 0 .003-1.717L24.686 9h-1.504l.226 4.205v1.79h1.9Zm-2.9 0v-1.763L22.18 9H20.5v5.995h1.908Zm-10.562 0h1.855l.004-1.862L14.31 9h-1.524l-.94 4.26v1.735Zm-1 0v-1.79l.011-.107L11.762 9h-.925a.103.103 0 0 0-.096.059L9 13.16v1.834h1.847Zm3.854 0h1.895v-1.817L16.822 9H15.32l-.62 4.205v1.79Zm2.895 0H19.5V9h-1.677l-.227 4.205v1.79ZM21 23v-.8c0-.66.525-1.2 1.181-1.2h2.639c.655 0 1.18.54 1.18 1.2v.8h3v-6.005H11V23h10Zm1 0h3v-.8c0-.114-.084-.2-.18-.2H22.18c-.097 0-.181.086-.181.2v.8ZM9 16.995H8a1 1 0 0 1-1-1v-3.037a1 1 0 0 1 .08-.39L8.9 8.275A2.103 2.103 0 0 1 10.838 7h18.326c.843 0 1.605.502 1.935 1.277l1.822 4.29a1 1 0 0 1 .08.391v3.037a1 1 0 0 1-1 1h-1V23a1 1 0 0 1 0 2v5h1a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h1v-5a1 1 0 0 1 0-2v-6.005ZM29 30v-5H11v5h18Z"
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
const MdFarmersMarkets = withWrapper(Vector);
MdFarmersMarkets.groupName = "Business";
export default MdFarmersMarkets;
