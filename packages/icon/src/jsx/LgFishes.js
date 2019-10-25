import React from "react";
import PropTypes from "prop-types";

const LgFishes = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M81.781 65.209a1.5 1.5 0 0 1 1.661 1.491c0 4.38 3.74 8.357 9.364 9.884a1.5 1.5 0 1 1-.786 2.895c-4.669-1.267-8.366-4.029-10.237-7.527-2.62 4.898-8.797 8.271-15.914 8.271-7.306 0-13.624-3.556-16.116-8.668-1.785 3.658-5.54 6.566-10.336 7.896a1.5 1.5 0 0 1-.801-2.891c5.577-1.546 9.274-5.504 9.274-9.86a1.5 1.5 0 0 1 1.865-1.455 1.503 1.503 0 0 1 1.864 1.455c0 5.71 6.305 10.523 14.25 10.523 4.026 0 7.63-1.235 10.207-3.197a1.499 1.499 0 0 1-.15-.446 26.194 26.194 0 0 0-.098-.536c-.087-.453-.195-.98-.326-1.574a90.409 90.409 0 0 0-1.446-5.664C72.362 59.942 70.1 54.08 67.2 48.62 58.933 33.056 47.3 23.879 31.646 24l.012.072c.244 1.437.488 3.052.716 4.81.863 6.67 1.259 13.459.925 19.816-.634 12.053-3.783 20.863-10.29 24.99 2.321 1.93 5.595 3.24 9.33 3.492a1.5 1.5 0 1 1-.203 2.993c-6.5-.438-11.982-3.687-14.408-8.223-1.798 3.362-5.282 6.047-9.71 7.378a1.5 1.5 0 0 1-.863-2.873c5.386-1.62 8.912-5.5 8.912-9.755a1.5 1.5 0 0 1 1.66-1.491A1.5 1.5 0 0 1 19.39 66.7c0 1.687.552 3.302 1.54 4.738 5.78-3.34 8.768-11.417 9.372-22.898.323-6.152-.063-12.77-.904-19.273-.223-1.717-.46-3.293-.699-4.692a81.322 81.322 0 0 0-.313-1.726 1.5 1.5 0 0 1 1.396-1.795C47.654 20.16 60.79 30.16 69.85 47.212c3.006 5.66 5.34 11.711 7.088 17.761a93.395 93.395 0 0 1 1.63 6.483c.993-1.437 1.551-3.057 1.551-4.756a1.5 1.5 0 0 1 1.662-1.491zM48.214 33.557a1 1 0 0 1-1.094 1.675 28.41 28.41 0 0 0-5.034-2.622 1 1 0 1 1 .74-1.859 30.409 30.409 0 0 1 5.388 2.806zm22.161 36.606a1 1 0 1 1-1.938.492c-3.275-12.898-8.984-25.048-17.67-32.65a1 1 0 0 1 1.317-1.504c9.065 7.933 14.925 20.404 18.291 33.662z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
LgFishes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgFishes.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgFishes.groupName = "Categories";
export default LgFishes;
