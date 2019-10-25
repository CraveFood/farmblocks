import React from "react";
import PropTypes from "prop-types";

const LgPets = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M25.06 41.798C28.92 37.397 38.797 34.5 50 34.5c11.212 0 21.08 2.9 24.94 7.298 3.565-.995 5.674-2.158 5.674-3.298 0-2.925-13.886-6-30.614-6s-30.614 3.075-30.614 6c0 1.14 2.11 2.303 5.675 3.298zm2.256.563C32.946 43.623 41.068 44.5 50 44.5c8.933 0 17.055-.877 22.686-2.14C68.819 38.909 59.996 36.5 50 36.5c-9.984 0-18.807 2.4-22.684 5.861zm47.609 1.475a.993.993 0 0 1-.203.057C68.77 45.545 59.95 46.5 50 46.5c-18.192 0-32.614-3.193-32.614-8s14.422-8 32.614-8c18.192 0 32.614 3.193 32.614 8 0 2.148-2.88 3.974-7.69 5.336zM16.442 64.611c.329.187.671.373 1.027.556C24.494 68.798 35.097 71 50 71c14.903 0 25.506-2.202 32.531-5.833 2.398-1.239 4.178-2.549 5.434-3.839.437-.448.744-.82.944-1.095L84.103 38.83a1.5 1.5 0 0 1-.037-.329c0-3.545-3.942-5.788-11.191-7.392C66.75 29.75 58.618 29 50 29s-16.751.751-22.875 2.108c-7.25 1.604-11.191 3.847-11.191 7.392 0 .11-.012.22-.037.329l-4.806 21.404c.2.275.507.647.944 1.095.7.718 1.56 1.442 2.6 2.157l1.127-5.36a1 1 0 0 1 1.957.412l-1.277 6.074zm75.528-4.44a1.5 1.5 0 0 1-.12.993c-.253.514-.803 1.3-1.736 2.258-1.484 1.523-3.524 3.025-6.205 4.41C76.423 71.703 65.353 74 50 74c-15.353 0-26.423-2.298-33.909-6.167-2.68-1.386-4.721-2.888-6.205-4.411-.933-.958-1.483-1.744-1.737-2.258a1.5 1.5 0 0 1-.119-.993l4.906-21.846c.066-3.055 1.868-5.42 4.948-7.173 2.262-1.287 5.027-2.184 8.593-2.974C32.832 26.771 41.177 26 50 26c8.822 0 17.168.77 23.523 2.178 3.566.79 6.33 1.687 8.592 2.974 3.081 1.753 4.883 4.118 4.95 7.173l4.905 21.846zM53.985 49.5c1.83 0 3.57.803 4.765 2.2a6.373 6.373 0 0 1 1.524 4.617 6.358 6.358 0 0 1-2.153 4.358l-.21.183-6.619 5.816a1.957 1.957 0 0 1-2.583 0l-6.62-5.815-.214-.187a6.358 6.358 0 0 1-2.15-4.356A6.368 6.368 0 0 1 41.25 51.7a6.27 6.27 0 0 1 4.764-2.2h.001c1.453 0 2.86.508 3.986 1.435a6.264 6.264 0 0 1 3.984-1.435zm2.608 9.854l.21-.183a4.357 4.357 0 0 0 1.476-2.994 4.374 4.374 0 0 0-1.047-3.176 4.275 4.275 0 0 0-3.247-1.501 4.266 4.266 0 0 0-2.813 1.064l-.512.45a1 1 0 0 1-1.322-.001l-.507-.448a4.273 4.273 0 0 0-2.816-1.065 4.27 4.27 0 0 0-3.247 1.501 4.369 4.369 0 0 0-1.047 3.175 4.357 4.357 0 0 0 1.474 2.993l.213.187L50 65.147l6.593-5.793zm-39.186-9.06a1 1 0 0 1 1.957.412l-.735 3.5a1 1 0 0 1-1.957-.412l.735-3.5zm40.831-11.251a.831.831 0 0 1-.635.987.821.821 0 0 1-.975-.641.834.834 0 0 1 .634-.989.824.824 0 0 1 .976.643zm3.563.938a.832.832 0 0 1-.634.988.824.824 0 0 1-.976-.642.834.834 0 0 1 .634-.989.824.824 0 0 1 .976.643zm-2.88 2.323a.823.823 0 1 1-1.61.346.834.834 0 0 1 .635-.99.823.823 0 0 1 .976.644z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
LgPets.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgPets.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgPets.groupName = "Categories";
export default LgPets;
