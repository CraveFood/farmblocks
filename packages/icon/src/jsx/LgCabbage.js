import React from "react";
import PropTypes from "prop-types";

const LgCabbage = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M54.55 34.338a25.797 25.797 0 0 1 3.067-4.876 25.3 25.3 0 0 0-7.273-1.06c-.57 0-1.138.019-1.703.056a12.29 12.29 0 0 1 .268 3.849 9.595 9.595 0 0 1 5.64 2.031zm2.202 2.419a9.578 9.578 0 0 1 1.44 4.012 9.581 9.581 0 0 1 4.428-1.08 9.61 9.61 0 0 1 4.038.884 10.567 10.567 0 0 1 3.41-2.471c-.77-.921-1.701-2.06-2.229-2.788-1.911-2.641-3.224-5.287-3.75-8.002a22.921 22.921 0 0 0-7.337 9.445zm16.514.477a10.47 10.47 0 0 1 8.542 3.013 1.5 1.5 0 0 1 .3 1.69c-.027.06-.088.201-.178.425-.157.39-.333.861-.524 1.417-.552 1.607-1.107 3.555-1.627 5.846a87.432 87.432 0 0 0-1.366 7.688C76.62 71.357 64.627 81.996 50.344 81.996c-15.616 0-28.277-12.65-28.297-28.261v-.036c0-5.949-.73-10.436-1.93-13.661-.404-1.088-.829-1.937-1.242-2.572-.222-.341-.37-.52-.415-.563a1.5 1.5 0 0 1-.02-2.142c3.537-3.538 8.854-4.213 13.071-2.024 2.735-3.262 3.95-7.771 3.223-11.966a1.5 1.5 0 0 1 1.396-1.754c3.696-.202 7.427 1.377 9.854 4.17a11.919 11.919 0 0 1 1.587 2.349c.918-.09 1.843-.134 2.773-.134 3.268 0 6.462.555 9.478 1.626a25.53 25.53 0 0 1 4.744-3.645 1.5 1.5 0 0 1 2.267 1.29c0 2.91 1.248 5.857 3.437 8.882.687.95 2.224 2.777 2.996 3.679zm-27.432-4.521c.274-1.616.086-3.31-.501-4.846a1.49 1.49 0 0 1-.125-.311 9.03 9.03 0 0 0-1.49-2.402c-1.466-1.688-3.592-2.794-5.813-3.08.286 4.428-1.13 8.949-3.935 12.396a11.4 11.4 0 0 1 1.079 1.153c1.124-1.363 2.09-3.02 2.847-4.848a1 1 0 0 1 1.848.765c-.914 2.207-2.114 4.201-3.542 5.81a11.168 11.168 0 0 1 1.334 4.997c.493.013.982.06 1.465.137a9.641 9.641 0 0 1 6.833-9.771zm-3.718 10.754a11.152 11.152 0 0 1 3.006 2.145 11.141 11.141 0 0 1 3.265 7.586c2.063.057 4.073.68 5.808 1.818a10.425 10.425 0 0 1 2.713-4.706c1.9-1.9 4.404-2.958 7.006-3.057a10.467 10.467 0 0 1 1.027-4.148 6.625 6.625 0 0 0-2.32-.416 6.614 6.614 0 0 0-4.997 2.278c-1.041 1.191-2.978.168-2.58-1.363.145-.562.22-1.114.22-1.663a6.638 6.638 0 0 0-13.278 0c0 .406.036.807.107 1.199.02.11.028.22.023.327zm33.32 13.47l.003-.019a90.433 90.433 0 0 1 1.415-7.957c.544-2.396 1.128-4.448 1.715-6.157.141-.411.271-.77.388-1.078a7.492 7.492 0 0 0-9.865.642 7.462 7.462 0 0 0-2.122 6.26 1.5 1.5 0 0 1-1.68 1.68 7.466 7.466 0 0 0-8.442 7.138 11.183 11.183 0 0 1 2.192 9.105 1.5 1.5 0 1 1-2.944-.58 8.181 8.181 0 0 0-9.094-9.709 1.5 1.5 0 0 1-1.68-1.68A8.165 8.165 0 0 0 43 47.733a8.163 8.163 0 0 0-6.848-2.322 1.5 1.5 0 0 1-1.68-1.68 8.168 8.168 0 0 0-2.322-6.849 8.198 8.198 0 0 0-10.62-.83c.486.786.96 1.76 1.4 2.94 1.327 3.57 2.114 8.399 2.117 14.672v.035c0 13.97 11.326 25.297 25.297 25.297 12.767 0 23.489-9.51 25.092-22.059zM36.38 71.974a1 1 0 0 1 1.2-1.6 20.872 20.872 0 0 0 2.586 1.655 1 1 0 0 1-.952 1.76 22.872 22.872 0 0 1-2.834-1.815zm-9.18-18.52a1 1 0 0 1 2 0c0 5.358 1.92 10.32 5.348 14.144a1 1 0 0 1-1.489 1.335c-3.755-4.188-5.86-9.626-5.86-15.479zm28.776 18.839a1.5 1.5 0 0 1-2.125-2.118 8.47 8.47 0 0 0 .703-.799 1.5 1.5 0 0 1 2.373 1.835 11.47 11.47 0 0 1-.951 1.082zM45.695 42.05a1 1 0 0 1-2 0c0-1.761.91-3.368 2.376-4.286a1 1 0 0 1 1.062 1.694 3.053 3.053 0 0 0-1.437 2.592z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
LgCabbage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgCabbage.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgCabbage.groupName = "Subcategories";
export default LgCabbage;
