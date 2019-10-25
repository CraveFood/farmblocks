import React from "react";
import PropTypes from "prop-types";

const LgAgriculturalSupplies = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M47.261 33.794c1.377-4.39 4.084-8.044 8.44-10.883l1.458-.953.807-.529c6.481-4.24 9.873-6.287 14.048-8.282a1.5 1.5 0 0 1 2.03.776c1.684 4.032 1.664 11.04-.942 16.624-3.596 7.702-11.438 12.482-23.924 13.07.05 1.09.139 2.283.263 3.63 10.235.324 21.088 4.224 20.633 9.822-.06.74-.159 1.67-.32 3.043-.05.425-.365 3.062-.46 3.877a215.844 215.844 0 0 0-.397 3.648c-.59 5.952-.566 9.935.08 10.836 1.726 2.404.913 5.224-2.374 7.026-3.299 1.808-9.177 2.829-17.879 2.915a1.52 1.52 0 0 1-.135.006h-1.09a1.52 1.52 0 0 1-.135-.006c-8.702-.086-14.58-1.107-17.88-2.915-3.286-1.802-4.1-4.622-2.374-7.026.647-.901.672-4.884.081-10.836-.11-1.113-.239-2.282-.398-3.648-.094-.815-.41-3.452-.46-3.877a89.055 89.055 0 0 1-.32-3.043c-.45-5.558 10.246-9.442 20.416-9.814a80.006 80.006 0 0 1-.246-3.444c-8.515-.503-13.933-3.87-16.444-9.25-1.853-3.969-1.867-8.933-.658-11.83a1.5 1.5 0 0 1 2.03-.775c2.895 1.383 5.254 2.806 9.703 5.716a3424.208 3424.208 0 0 1 1.591 1.04c2.16 1.41 3.755 3.108 4.856 5.082zm-.557 16.456c-8.532.319-17.939 3.634-17.7 6.576.056.697.152 1.597.31 2.937.048.42.364 3.058.46 3.88.16 1.381.29 2.565.402 3.698.696 7.005.67 11.07-.628 12.881-.626.872-.395 1.674 1.379 2.646 2.85 1.562 8.507 2.513 17.117 2.551 8.61-.038 14.268-.99 17.117-2.551 1.774-.972 2.005-1.774 1.38-2.646-1.3-1.81-1.325-5.876-.63-12.881.113-1.133.243-2.317.404-3.699.095-.82.41-3.46.46-3.879a86.8 86.8 0 0 0 .309-2.937c.236-2.904-8.926-6.172-17.369-6.562.067.835.077 1.209.079 1.833a1.5 1.5 0 1 1-3 .007 18.9 18.9 0 0 0-.09-1.854zm5.826 8.697a1 1 0 1 1 .095 1.998c-1.603.076-3.23.114-4.869.114-4.62 0-9.088-.303-13.123-.878a1 1 0 0 1 .282-1.98c3.94.561 8.314.858 12.841.858 1.608 0 3.203-.037 4.774-.112zm9.735-1.003a1 1 0 1 1 .33 1.973c-1.44.24-2.959.446-4.542.615a1 1 0 1 1-.213-1.989 75.67 75.67 0 0 0 4.425-.599zm8.118-28.666c1.927-4.128 2.21-9.236 1.384-12.666-3.39 1.718-6.615 3.701-12.158 7.328l-.807.528-1.463.956c-4.482 2.922-6.882 6.75-7.78 11.548a24.555 24.555 0 0 0-.404 3.642c11.345-.557 18.138-4.716 21.228-11.336zM46 40.455c0-.483-.033-.981-.09-1.461a12.852 12.852 0 0 0-.075-.55c-.656-2.98-2.227-5.366-5.067-7.218l-.985-.644-.61-.4c-3.48-2.276-5.632-3.609-7.759-4.722-.385 2.234-.131 5.314 1.044 7.833 1.994 4.272 6.32 7.007 13.581 7.503a1.504 1.504 0 0 1-.039-.34zM35.423 66.392a1 1 0 1 1-2 .001 1 1 0 0 1 2 0zm4 2a1 1 0 1 1-2 .001 1 1 0 0 1 2 0zm-4 2a1 1 0 1 1-2 .001 1 1 0 0 1 2 0z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
LgAgriculturalSupplies.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgAgriculturalSupplies.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgAgriculturalSupplies.groupName = "Categories";
export default LgAgriculturalSupplies;
