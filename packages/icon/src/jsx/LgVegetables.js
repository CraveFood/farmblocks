import React from "react";
import PropTypes from "prop-types";

const LgVegetables = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M54.303 57.812c.272.793.54 1.603.803 2.428 1.62 5.091 2.805 10.105 3.37 14.82.436 3.639.488 7 .101 10.028a1.5 1.5 0 1 1-2.976-.38c.353-2.762.305-5.881-.104-9.291a65.884 65.884 0 0 0-1.127-6.479c-.192.4-.388.794-.572 1.142-3.364 6.342-11.933 8.271-19.105 4.467-6.968-3.696-9.174-11.083-5.704-17.625l.034-.064c-2.12-1.178-3.813-2.712-5.01-4.52a12.015 12.015 0 0 1-1.997-6.042c-.11-2.139.34-4.313 1.318-6.358.09-.189.183-.373.277-.548 1.607-3.032 4.133-5.236 7.144-6.266a16.718 16.718 0 0 1-.76-2.004c-2.312-7.54 1.35-14.324 8.432-16.497 7.082-2.172 13.919 1.39 16.232 8.929.213.695.381 1.398.503 2.105 3.356-1.284 7.138-1.006 10.563.81 6.451 3.423 8.794 10.62 5.316 17.499l.063.033c6.543 3.47 8.86 10.824 5.164 17.792-3.363 6.34-10.218 9.67-16.248 7.868a1.5 1.5 0 0 1 .86-2.874c4.587 1.371 10.014-1.265 12.738-6.4 2.914-5.495 1.169-11.037-3.92-13.736a11.214 11.214 0 0 0-1.315-.582 1.5 1.5 0 0 1-.733-2.213c.22-.344.415-.674.589-1.001 2.914-5.494 1.168-11.036-3.92-13.735-3.225-1.71-6.76-1.669-9.636.11a1.5 1.5 0 0 1-2.288-1.223 13.762 13.762 0 0 0-.604-3.572c-1.824-5.947-6.977-8.631-12.484-6.942-5.507 1.69-8.268 6.803-6.443 12.748.335 1.09.802 2.126 1.388 3.096a1.5 1.5 0 0 1-1.043 2.257c-2.925.474-5.43 2.341-6.95 5.207-.074.14-.147.284-.219.434-.764 1.6-1.112 3.277-1.028 4.908a9.015 9.015 0 0 0 1.503 4.54c.968 1.463 2.38 2.717 4.204 3.685.33.175.678.34 1.048.498a1.5 1.5 0 0 1 .634 2.245c-.308.435-.554.826-.761 1.218-2.7 5.088-1.036 10.655 4.459 13.57 5.79 3.071 12.513 1.558 15.049-3.223.632-1.193 1.727-3.747 1.957-4.067.041-.057.084-.112.13-.165a100.238 100.238 0 0 0-1.68-5.392 8.442 8.442 0 0 0-1.416-.395c-1.504-.298-3.257-.362-5.047-.106a1.5 1.5 0 1 1-.424-2.97c1.927-.275 3.96-.23 5.66.06-.187-.492-.375-.975-.562-1.448a83.64 83.64 0 0 0-.96-2.32 23.438 23.438 0 0 0-2.78-1.661c-1.965-.997-3.95-1.655-5.825-1.822a1.5 1.5 0 1 1 .267-2.988c2.304.206 4.636.979 6.915 2.134.606.307 1.182.629 1.722.955.308-1.125.628-2.244.947-3.298.196-.648.387-1.253.57-1.81.437-1.32.825-2.333 1.172-3.013a1.5 1.5 0 0 1 2.672 1.364c-.26.51-.603 1.407-.995 2.591-.176.53-.359 1.113-.548 1.737a129.315 129.315 0 0 0-1.324 4.711l.111.26a86.623 86.623 0 0 1 1.235 3.053c.13-.196.263-.39.4-.58 1.073-1.48 2.283-2.608 3.676-3.227a1.5 1.5 0 1 1 1.218 2.741c-.83.37-1.674 1.156-2.464 2.246A14.79 14.79 0 0 0 54.6 57.2a14.68 14.68 0 0 0-.296.612zM40.627 21.793a1 1 0 1 1-.587-1.911 8.37 8.37 0 0 1 2.455-.382 1 1 0 0 1 0 2c-.602 0-1.232.098-1.868.293zm-2.523 9.217a1 1 0 0 1-1.713 1.032 11.387 11.387 0 0 1-1.136-2.534c-.702-2.285-.594-4.431.35-6.179a6.598 6.598 0 0 1 1.294-1.669 1 1 0 1 1 1.368 1.46c-.37.346-.673.737-.903 1.161-.67 1.241-.75 2.838-.197 4.64a9.39 9.39 0 0 0 .937 2.09zm-6.146 9.85a1 1 0 1 1-1.174-1.62 6.585 6.585 0 0 1 2.824-1.18 1 1 0 1 1 .32 1.974 4.585 4.585 0 0 0-1.97.826zm1.58 9.867a1 1 0 0 1-.783 1.84 11.11 11.11 0 0 1-.867-.412c-1.423-.755-2.535-1.714-3.291-2.855a6.53 6.53 0 0 1-1.088-3.29c-.063-1.216.211-2.495.788-3.7a1 1 0 0 1 1.804.863c-.437.913-.64 1.86-.595 2.733.043.825.298 1.592.759 2.29.56.847 1.419 1.587 2.561 2.193.227.12.464.233.711.338zm1.357 12.075a1 1 0 1 1-1.994-.164 8.161 8.161 0 0 1 .948-3.14 1 1 0 1 1 1.766.938 6.17 6.17 0 0 0-.72 2.366zm9.446 5.918a1 1 0 0 1 .564 1.919 9.061 9.061 0 0 1-2.553.352c-1.72 0-3.476-.451-5.082-1.302-1.62-.86-2.799-1.946-3.53-3.219a1 1 0 1 1 1.735-.996c.534.93 1.433 1.759 2.732 2.448 1.322.7 2.757 1.07 4.145 1.07.71 0 1.38-.093 1.989-.272z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
LgVegetables.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgVegetables.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgVegetables.groupName = "Categories";
export default LgVegetables;
