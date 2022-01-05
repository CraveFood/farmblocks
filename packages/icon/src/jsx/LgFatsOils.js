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
      d="m46.524 30.985.055.19c1.881 6.711.48 14.27-6.567 21.304-2.225 2.22-4.966 4.312-8.259 6.258-2.63 1.554-4.77 3.182-6.455 4.869-5.69 5.7-5.945 11.617-2.989 17.248.4.76.827 1.442 1.252 2.033.248.346.434.577.526.68a1.5 1.5 0 0 1 .27.44c-.03-.073-.046-.103-.039-.093.065.09.178.21.35.359.598.514 1.576 1.065 3.022 1.6 4.395 1.63 11.673 2.627 22.466 2.627 10.789 0 18.002-.996 22.287-2.622 1.402-.532 2.334-1.075 2.887-1.578.156-.141.253-.254.307-.335a1.5 1.5 0 0 1 .254-.399c.092-.104.28-.336.529-.683.428-.593.858-1.278 1.26-2.042 2.985-5.674 2.715-11.64-3.067-17.39-1.667-1.658-3.774-3.258-6.351-4.79-3.243-1.926-5.95-3.993-8.155-6.184-7.12-7.078-8.536-14.686-6.633-21.44.274-.973.555-1.685.759-2.099a1.5 1.5 0 0 1 .391-.493c3.994-3.291 4.001-6.068 1.713-8.755a9.38 9.38 0 0 0-1.267-1.23l-.372 1.084-.432.17a11.9 11.9 0 0 1-8.47.023l-.494-.191-.273-.798a9.428 9.428 0 0 0-1.264 1.203c-2.282 2.623-2.312 5.325 1.55 8.543.11.055.433.218.54.263.697.292 1.854.43 4.1.329a1 1 0 0 1 .09 1.997c-1.52.069-2.645.034-3.52-.098ZM36.32 59.4c2.2-1.093 7.224-1.568 13.681-1.568 6.203 0 11.084.439 13.409 1.442a.996.996 0 0 1 .694.166 52.193 52.193 0 0 0 2.761 1.756c5.752 3.418 9.056 7.176 9.73 11.225.404 2.416-.148 4.81-1.3 7.05-.532 1.034-1.067 1.807-1.458 2.275l-.543.614a1 1 0 0 1-.247.202c-1.25.728-2.737 1.305-5.359 1.857-3.802.801-9.064 1.269-16.101 1.29a1 1 0 0 1-.007-2c6.91-.02 12.04-.476 15.696-1.247 2.309-.486 3.588-.965 4.629-1.55l.415-.47c.064-.076.19-.24.357-.481.285-.413.572-.884.84-1.404.972-1.89 1.428-3.874 1.106-5.807-.56-3.362-3.484-6.688-8.78-9.834a56.315 56.315 0 0 1-1.621-1.001c-1.818 1.322-7.165 1.89-14.221 1.89-6.972 0-12.275-.554-14.154-1.843-.546.35-1.108.694-1.684 1.035-5.292 3.128-8.217 6.44-8.782 9.79-.299 1.768.06 3.588.887 5.356.294.631.628 1.21.972 1.721.205.305.375.528.438.603l.283.32c.596.338 1.585.732 3.047 1.127 2.317.626 5.387 1.128 9.311 1.443a1 1 0 0 1-.16 1.994c-7.18-.577-11.365-1.708-13.364-2.93a1 1 0 0 1-.228-.19l-.402-.456c-.459-.543-1.123-1.528-1.71-2.785-.983-2.108-1.42-4.32-1.047-6.535.681-4.038 3.987-7.781 9.738-11.18a51.877 51.877 0 0 0 2.7-1.706c.146-.1.31-.154.474-.169ZM56.965 16.13c.493.391 1.074.932 1.656 1.616 3.25 3.815 3.295 8.414-1.811 12.782l-.043.107a12.75 12.75 0 0 0-.406 1.216c-1.627 5.776-.42 12.255 5.861 18.5 2.024 2.011 4.536 3.928 7.572 5.732 2.781 1.653 5.085 3.402 6.935 5.242 6.82 6.783 7.154 14.169 3.606 20.914-.737 1.4-1.479 2.463-2.038 3.13-.538 1.067-2.003 2.258-4.79 3.315-4.675 1.773-12.23 2.817-23.351 2.817-11.12 0-18.733-1.043-23.509-2.813-2.865-1.062-4.378-2.248-4.948-3.295-.558-.664-1.305-1.733-2.046-3.144-3.516-6.697-3.2-14.028 3.522-20.761 1.87-1.875 4.213-3.655 7.052-5.333 3.082-1.822 5.624-3.76 7.665-5.798 6.213-6.2 7.406-12.636 5.798-18.37a12.693 12.693 0 0 0-.44-1.309c-5.104-4.345-5.035-8.918-1.748-12.695a12.379 12.379 0 0 1 1.488-1.451 1.515 1.515 0 0 1-.055-.179l-1.393-5.767a1.5 1.5 0 0 1 .924-1.754c.465-.177 1.265-.428 2.332-.676 3.656-.849 7.512-.969 11.173.124a16.74 16.74 0 0 1 1.601.567 1.5 1.5 0 0 1 .876 1.777l-1.483 5.506ZM45.3 13.368l1.588 4.637a9.934 9.934 0 0 0 6.224 0l1.128-3.296.952-3.532a14.205 14.205 0 0 0-.079-.023c-3.088-.922-6.444-.818-9.637-.077-.24.056-.47.114-.687.172l.511 2.119Zm.84 72.292a1 1 0 1 1 .054-2c.726.02 1.46.033 2.206.041a1 1 0 1 1-.021 2c-.756-.008-1.502-.022-2.238-.041Zm-5.823-24.427c2.538.363 5.993.572 9.683.572 3.69 0 7.145-.209 9.683-.572a21.427 21.427 0 0 0 2.202-.415 21.432 21.432 0 0 0-2.202-.414c-2.538-.363-5.992-.572-9.683-.572-3.69 0-7.145.21-9.683.572-.876.125-1.619.266-2.202.414.583.15 1.327.29 2.202.415Z"
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
const LgFatsOils = withWrapper(Vector);
LgFatsOils.groupName = "Categories";
export default LgFatsOils;
