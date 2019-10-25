import React from "react";
import PropTypes from "prop-types";

const LgPureesSaucesSoups = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M73.603 49.391a1.5 1.5 0 0 1-.05-2.017l15.381-17.816-.32-2.756c-.217-1.86-.9-2.354-2.94-2.118L83 24.995l-17.337 29.12a1.5 1.5 0 0 1-2.717-1.227c-4.992-.553-10.636-.849-16.496-.849-12.055 0-22.946 1.265-28.847 3.212 5.734 1.864 16.639 3.185 28.847 3.185 12.21 0 23.11-1.32 28.85-3.186a38.72 38.72 0 0 0-3.638-.977 1 1 0 0 1 .434-1.952c2.348.522 4.292 1.114 5.77 1.763.037.017.073.035.108.055.556-.31.975-.631 1.245-.958.149-.178.205-.318.205-.44 0-.245-.27-.616-.922-1.06-.903-.607-2.353-1.208-4.273-1.76a.998.998 0 0 1-.626-.53zm4.008-2.127c2.202.65 3.925 1.376 5.12 2.177a1.5 1.5 0 0 1 .56.697 24.445 24.445 0 0 1 1.073 3.443c.338 1.468.519 2.975.543 4.512.028.115.043.235.043.358 0 16.004-17.296 28.77-38.45 28.77h-.05C25.296 87.22 8 74.455 8 58.45v-.032c.002-1.65.185-3.268.543-4.825.26-1.174.622-2.334 1.081-3.469a1.5 1.5 0 0 1 .554-.683c4.907-3.297 19.488-5.486 36.272-5.486 7.593 0 14.852.45 21.008 1.28l13.344-22.413a1.5 1.5 0 0 1 1.115-.722l3.41-.396c3.63-.422 5.85 1.183 6.266 4.75l.397 3.411a1.5 1.5 0 0 1-.354 1.154L77.61 47.264zm-11.932.96c-5.581-.765-12.24-1.185-19.229-1.185-14.979 0-28.056 1.963-32.037 4.64-.657.447-.928.818-.928 1.063 0 .122.057.261.21.446.268.325.685.644 1.237.953a1.01 1.01 0 0 1 .11-.057c5.598-2.457 17.776-4.045 31.408-4.045 6.27 0 12.3.335 17.577.96l1.652-2.774zm15.594 5.36c-.112.308-.287.601-.516.875-2.93 3.553-17.25 5.977-34.307 5.977-17.052 0-31.378-2.425-34.294-5.972a2.976 2.976 0 0 1-.522-.888 18.59 18.59 0 0 0-.164.679 18.646 18.646 0 0 0-.47 4.196v.03c.022 14.102 15.803 25.74 35.45 25.74h.05c19.505 0 35.2-11.472 35.447-25.437a1.505 1.505 0 0 1-.037-.333 18.65 18.65 0 0 0-.637-4.867zM21.128 71.877a1 1 0 0 1 1.343-1.482c5.696 5.164 14.57 8.326 23.979 8.326a1 1 0 0 1 0 2c-9.889 0-19.243-3.334-25.322-8.844zm-5.942-8.91a1 1 0 1 1 1.912-.585c.464 1.515 1.197 2.995 2.18 4.412a1 1 0 0 1-1.643 1.14c-1.098-1.583-1.923-3.248-2.45-4.966zM37.82 15a1 1 0 0 1 2 0c0 1.467-.446 2.24-1.6 3.44-.826.86-1.04 1.231-1.04 2.054 0 .824.214 1.196 1.041 2.057 1.153 1.201 1.599 1.975 1.599 3.443s-.446 2.242-1.598 3.443c-.828.863-1.042 1.235-1.042 2.06 0 .824.214 1.196 1.041 2.058 1.153 1.202 1.599 1.977 1.599 3.445a1 1 0 0 1-2 0c0-.825-.214-1.197-1.042-2.06-1.152-1.2-1.598-1.975-1.598-3.443s.446-2.243 1.598-3.444c.828-.863 1.042-1.235 1.042-2.059 0-.824-.214-1.196-1.042-2.057-1.152-1.201-1.598-1.975-1.598-3.443 0-1.467.446-2.24 1.599-3.44.827-.86 1.04-1.231 1.04-2.054zm9 0a1 1 0 0 1 2 0c0 1.467-.446 2.24-1.6 3.44-.826.86-1.04 1.231-1.04 2.054 0 .824.214 1.196 1.041 2.057 1.153 1.201 1.599 1.975 1.599 3.443s-.446 2.242-1.598 3.443c-.828.863-1.042 1.235-1.042 2.06 0 .824.214 1.196 1.041 2.058 1.153 1.202 1.599 1.977 1.599 3.445a1 1 0 0 1-2 0c0-.825-.214-1.197-1.042-2.06-1.152-1.2-1.598-1.975-1.598-3.443s.446-2.243 1.598-3.444c.828-.863 1.042-1.235 1.042-2.059 0-.824-.214-1.196-1.042-2.057-1.152-1.201-1.598-1.975-1.598-3.443 0-1.467.446-2.24 1.599-3.44.827-.86 1.04-1.231 1.04-2.054zm9 0a1 1 0 0 1 2 0c0 1.467-.446 2.24-1.6 3.44-.826.86-1.04 1.231-1.04 2.054 0 .824.214 1.196 1.041 2.057 1.153 1.201 1.599 1.975 1.599 3.443s-.446 2.242-1.598 3.443c-.828.863-1.042 1.235-1.042 2.06 0 .824.214 1.196 1.041 2.058 1.153 1.202 1.599 1.977 1.599 3.445a1 1 0 0 1-2 0c0-.825-.214-1.197-1.042-2.06-1.152-1.2-1.598-1.975-1.598-3.443s.446-2.243 1.598-3.444c.828-.863 1.042-1.235 1.042-2.059 0-.824-.214-1.196-1.042-2.057-1.152-1.201-1.598-1.975-1.598-3.443 0-1.467.446-2.24 1.599-3.44.827-.86 1.04-1.231 1.04-2.054z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
LgPureesSaucesSoups.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgPureesSaucesSoups.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgPureesSaucesSoups.groupName = "Categories";
export default LgPureesSaucesSoups;
