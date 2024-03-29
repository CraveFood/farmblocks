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
      d="M33.206 63.542a1.5 1.5 0 0 1-2.957-.507l.798-4.654a2.5 2.5 0 0 0-.719-2.212l-12.711-12.39a3.5 3.5 0 0 1 1.94-5.97l17.566-2.553a2.5 2.5 0 0 0 1.882-1.368l7.856-15.918a3.5 3.5 0 0 1 6.278 0l7.856 15.918a2.5 2.5 0 0 0 1.882 1.368l17.566 2.552a3.5 3.5 0 0 1 1.94 5.97l-12.711 12.39a2.5 2.5 0 0 0-.72 2.213l3.002 17.496a3.5 3.5 0 0 1-5.079 3.69l-15.712-8.26a2.5 2.5 0 0 0-2.326 0l-15.712 8.26a3.5 3.5 0 0 1-5.079-3.69l1.279-7.455a1.5 1.5 0 1 1 2.957.507l-1.279 7.455a.5.5 0 0 0 .726.527l15.712-8.26a5.5 5.5 0 0 1 5.118 0l15.712 8.26a.5.5 0 0 0 .726-.527l-3-17.495a5.5 5.5 0 0 1 1.58-4.869L80.29 41.63a.5.5 0 0 0-.277-.853l-17.566-2.552a5.5 5.5 0 0 1-4.142-3.01l-7.856-15.917a.5.5 0 0 0-.896 0l-7.856 15.918a5.5 5.5 0 0 1-4.142 3.009l-17.566 2.552a.5.5 0 0 0-.277.853l12.711 12.39a5.5 5.5 0 0 1 1.582 4.869l-.798 4.653Zm27.511-14.894a.5.5 0 1 1 .71.704l-1.072 1.08a.5.5 0 1 1-.71-.704l1.072-1.08Zm4-4a.5.5 0 1 1 .71.704l-1.072 1.08a.5.5 0 1 1-.71-.704l1.072-1.08Zm-3.29 1.08a.5.5 0 1 1-.71.704l-1.072-1.08a.5.5 0 1 1 .71-.704l1.072 1.08Zm4 4a.5.5 0 1 1-.71.704l-1.072-1.08a.5.5 0 1 1 .71-.704l1.072 1.08ZM63 53.5a.5.5 0 1 1-1 0V49a.5.5 0 1 1 1 0v4.5Zm0-8a.5.5 0 1 1-1 0V41a.5.5 0 1 1 1 0v4.5ZM60.5 47a.5.5 0 1 1 0 1H56a.5.5 0 1 1 0-1h4.5Zm8 0a.5.5 0 1 1 0 1H64a.5.5 0 1 1 0-1h4.5Zm-33.326-3.555a1 1 0 0 1-.348-1.969l4.784-.846a5 5 0 0 0 3.634-2.754l3.521-7.31a1 1 0 0 1 1.802.868l-3.521 7.31a7 7 0 0 1-5.088 3.856l-4.784.845Z"
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
const LgFavoriteStar = withWrapper(Vector);
LgFavoriteStar.groupName = "Actions";
export default LgFavoriteStar;
