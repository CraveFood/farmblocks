import React from "react";
import PropTypes from "prop-types";

const LgGrains = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M78.568 67.952a32.03 32.03 0 0 1-3.618 1.956c-3.51 1.619-7.196 2.592-10.894 2.592a1 1 0 0 1 0-2c3.376 0 6.789-.902 10.057-2.408a30.04 30.04 0 0 0 3.345-1.804c.013-.087.033-.175.062-.262.602-1.805.839-3.911.743-6.26-.124-3.046-.793-6.343-1.831-9.667a50.746 50.746 0 0 0-1.362-3.82 22.56 22.56 0 0 1-1.525.737 1.5 1.5 0 0 1-1.205-2.748c3.628-1.591 5.733-3.698 6.467-5.933.53-1.613.233-3.133-.422-3.715-.563-.502-1.986-.843-3.93-.92-.82-.034-1.686-.021-2.562.027a138.814 138.814 0 0 1 2.092 1.595c.096.076.18.16.253.253a65.684 65.684 0 0 0 1.469-.512 1 1 0 1 1 .7 1.874 74.401 74.401 0 0 1-2.696.913c-.131.064-.27.107-.412.13a99.991 99.991 0 0 1-5.262 1.49c-5.443 1.382-10.852 2.287-15.92 2.488a51.82 51.82 0 0 1-4.125 0c-5.067-.202-10.474-1.107-15.915-2.489a100.01 100.01 0 0 1-5.262-1.489 1.503 1.503 0 0 1-.413-.13 74.418 74.418 0 0 1-2.076-.691c-.3-.105-.509-.18-.62-.222a1 1 0 1 1 .7-1.874 65.7 65.7 0 0 0 1.469.512c.073-.092.157-.177.253-.253a139.107 139.107 0 0 1 2.12-1.617 33.222 33.222 0 0 0-2.17-.011c-2.252.067-3.893.418-4.464.926-.654.582-.951 2.102-.421 3.715.734 2.235 2.839 4.342 6.467 5.933a1.5 1.5 0 0 1-1.205 2.748 22.56 22.56 0 0 1-1.525-.737l-.08.2a50.746 50.746 0 0 0-1.282 3.62c-1.038 3.324-1.707 6.62-1.83 9.666-.096 2.35.14 4.456.742 6.26.036.109.059.217.07.326l.114.068c.933.546 2.21 1.102 3.88 1.627 2.747.863 6.254 1.544 10.61 1.97a1 1 0 1 1-.195 1.991c-4.488-.439-8.13-1.147-11.014-2.053-1.81-.569-3.226-1.185-4.292-1.81-.103-.06-.2-.119-.29-.176a15.067 15.067 0 0 0-3.244 1.03c-2.03.92-2.913 1.956-2.61 3.125C16.172 74.68 29.603 75.998 50 76c20.397-.002 33.828-1.32 34.491-3.876.303-1.17-.58-2.206-2.61-3.125-.698-.317-1.46-.58-2.222-.788a13.013 13.013 0 0 0-.987-.236 1.532 1.532 0 0 1-.104-.023zM49.938 79c-23.886-.004-36.057-1.204-37.333-6.124-.775-2.99 1.078-5.161 4.276-6.61a17.63 17.63 0 0 1 2.32-.85c-.402-1.774-.545-3.706-.461-5.773.136-3.341.854-6.884 1.965-10.438a53.73 53.73 0 0 1 1.657-4.568c-2.024-1.561-3.37-3.388-4.02-5.366-.88-2.68-.337-5.455 1.277-6.89 1.273-1.136 3.437-1.599 6.37-1.686a41.328 41.328 0 0 1 4.644.15 45.343 45.343 0 0 1 1.375.138 134.572 134.572 0 0 1 3.286-2.236 98.384 98.384 0 0 1 3.79-2.38C43.778 23.576 47.472 22 50.057 22c2.584 0 6.279 1.576 10.973 4.367a98.384 98.384 0 0 1 3.789 2.38c1.173.772 2.346 1.573 3.502 2.388a1.5 1.5 0 0 1 .403-.119 36.137 36.137 0 0 1 1.46-.169c1.473-.14 2.974-.202 4.39-.145 2.594.103 4.572.577 5.807 1.678 1.614 1.436 2.156 4.212 1.276 6.89-.65 1.979-1.995 3.806-4.019 5.367a53.73 53.73 0 0 1 1.657 4.567c1.111 3.555 1.83 7.098 1.965 10.44.085 2.066-.06 3.998-.46 5.772.788.23 1.572.512 2.32.85 3.197 1.449 5.05 3.62 4.275 6.61-1.276 4.92-13.447 6.12-37.333 6.124h-.124zm20.85-42.351c-.405-.307-.84-.632-1.303-.974a142.763 142.763 0 0 0-6.316-4.422 95.415 95.415 0 0 0-3.672-2.307C55.262 26.428 51.915 25 50.057 25c-1.858 0-5.206 1.428-9.44 3.946a95.415 95.415 0 0 0-3.673 2.307 142.763 142.763 0 0 0-7.618 5.396c1.036.3 2.12.597 3.243.882 5.317 1.35 10.592 2.233 15.503 2.429a49.822 49.822 0 0 0 3.965 0c4.912-.196 10.19-1.079 15.508-2.43a99.556 99.556 0 0 0 3.243-.881zM42.01 72.366a1 1 0 0 1 .093-1.998c.554.026 1.7.09 1.765.093.574.028 1.124.039 2.188.039a1 1 0 1 1 0 2c-1.094 0-1.675-.012-2.285-.041-.076-.004-1.22-.068-1.76-.093zM27.43 59.502a1 1 0 0 1-2-.004c.005-3.338.794-6.632 2.195-9.444a1 1 0 0 1 1.79.892c-1.264 2.538-1.98 5.528-1.985 8.556zm.595 4.748a1 1 0 1 1-1.937.5 20.527 20.527 0 0 1-.426-2.103 1 1 0 0 1 1.978-.294c.094.634.223 1.268.385 1.897zm31.35-31.875a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-4 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgGrains.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
LgGrains.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgGrains.groupName = "Categories";
export default LgGrains;
