import React from "react";
import PropTypes from "prop-types";

const MdSettingsFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M32.823 23.787l-1.03 2.484c-.187.586-.621 1.035-1.263 1.311-.544.189-1.11.194-1.567.002l-.976-.32a10.87 10.87 0 0 1-.67.675l.317.958c.466 1.092-.073 2.368-1.193 2.856l-2.554 1.049c-1.122.491-2.428-.038-2.884-1.09l-.48-.906c-.334.02-.664.024-.994.008l-.439.855c-.238.569-.65 1-1.228 1.2-.33.116-.722.158-1.08.112l-.046-.006a1.86 1.86 0 0 1-.509-.13l-2.517-1.033c-.584-.188-1.033-.622-1.31-1.263-.188-.544-.194-1.113.004-1.583l.334-.964c-.23-.21-.452-.43-.667-.663l-.952.314c-.526.207-1.113.215-1.571.02-.585-.187-1.036-.623-1.29-1.21l-1.052-2.556c-.487-1.122.041-2.425 1.092-2.881l.906-.48a9.06 9.06 0 0 1-.007-.994l-.856-.439c-.567-.237-.998-.65-1.201-1.229-.189-.544-.194-1.11.023-1.635l1.049-2.555c.418-1.136 1.698-1.672 2.818-1.271l.974.32c.212-.233.436-.46.672-.677l-.315-.951c-.208-.528-.215-1.116-.02-1.572.187-.583.62-1.031 1.21-1.29l2.555-1.05c1.123-.49 2.429.04 2.882 1.091l.48.905c.331-.02.657-.023.983-.007l.421-.856c.46-1.105 1.69-1.6 2.87-1.178l2.493 1.04c1.136.417 1.673 1.696 1.272 2.815l-.32.976c.232.211.458.435.676.67l.958-.316c1.092-.466 2.368.072 2.856 1.192l1.05 2.556c.243.557.263 1.16.06 1.636a2.05 2.05 0 0 1-1.122 1.25l-.905.48c.02.334.023.663.007.994l.854.437c.535.223.95.637 1.189 1.17.258.54.245 1.172.013 1.73zm-7.865-3.142a5 5 0 1 0-9.916-1.288 5 5 0 1 0 9.916 1.288z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdSettingsFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdSettingsFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdSettingsFilled.groupName = "Menu";
export default MdSettingsFilled;
