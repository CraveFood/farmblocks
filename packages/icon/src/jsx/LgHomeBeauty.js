import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M25 89.031V91h15v-1.969H25zm.01-2h14.98A4.336 4.336 0 0035.663 83h-6.328a4.336 4.336 0 00-4.325 4.031zM77 82h-6v9h6v-9zm0-2v-2h-6v2h6zm-8-4.915V64.682c0-2.359 2.956-3.41 4.688-1.925l3.588 3.075C78.37 66.77 79 68.074 79 69.456v5.63a1.5 1.5 0 011 1.414v16a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-16a1.5 1.5 0 011-1.415zM72 75h4v-5.544c0-.484-.233-.965-.677-1.346L72 65.26V75zM50.003 87.031h4v-14.75a25.902 25.902 0 01-4 .001v14.75zm0 2v1.97h4v-1.97h-4zM67.04 28.787c-.27-1.112-.599-2.177-.98-3.19L62.554 29.1a1 1 0 01-1.414-1.414l4.074-4.074C62.382 17.707 57.583 14 51.97 14 42.931 14 36 23.616 36 36.543s6.931 22.543 15.97 22.543c9.039 0 15.97-9.616 15.97-22.543 0-1.877-.146-3.685-.424-5.403l-6.501 6.502a1 1 0 01-1.414-1.415l7.44-7.44zm-10.038 43.08V92.5a1.5 1.5 0 01-1.5 1.5h-7a1.5 1.5 0 01-1.5-1.5V71.868a25.014 25.014 0 01-4.261-1.253 1.5 1.5 0 011.098-2.792 22.013 22.013 0 004.93 1.306c1.059.153 2.137.23 3.23.23a22.649 22.649 0 003.307-.24 21.969 21.969 0 004.662-1.222 1.5 1.5 0 111.074 2.802 24.955 24.955 0 01-4.04 1.169zM42.363 12.49a1.5 1.5 0 11-1.673-2.49C44.097 7.71 47.962 6.5 52 6.5c13.322 0 23.5 12.888 23.5 30 0 17.112-10.178 30-23.5 30-13.32 0-23.5-12.888-23.5-30 0-3.535.428-6.925 1.259-10.09a1.5 1.5 0 112.901.762c-.765 2.914-1.16 6.048-1.16 9.328 0 15.59 9.012 27 20.5 27 11.489 0 20.5-11.41 20.5-27s-9.011-27-20.5-27c-3.434 0-6.719 1.028-9.637 2.989zm-11.646 5.159a.5.5 0 11.71.704l-1.072 1.08a.5.5 0 11-.71-.704l1.072-1.08zm4-4a.5.5 0 11.71.704l-1.072 1.08a.5.5 0 11-.71-.704l1.072-1.08zm-3.29 1.08a.5.5 0 11-.71.704l-1.072-1.08a.5.5 0 11.71-.704l1.072 1.08zm4 4a.5.5 0 11-.71.704l-1.072-1.08a.5.5 0 11.71-.704l1.072 1.08zM33 22.5a.5.5 0 11-1 0V18a.5.5 0 111 0v4.5zm0-8a.5.5 0 11-1 0V10a.5.5 0 111 0v4.5zM30.5 16a.5.5 0 110 1H26a.5.5 0 110-1h4.5zm8 0a.5.5 0 110 1H34a.5.5 0 110-1h4.5zm13.47 45.086C41.66 61.086 34 50.46 34 36.543S41.66 12 51.97 12c10.31 0 17.97 10.626 17.97 24.543s-7.66 24.543-17.97 24.543zm6.198-30.427a1 1 0 011.414 1.414L47.078 44.578a1 1 0 01-1.414-1.414L58.168 30.66zm-.573 7.574a1 1 0 011.414 1.415l-1.931 1.93a1 1 0 01-1.414-1.414l1.93-1.93zM23.5 94a1.5 1.5 0 01-1.5-1.5v-5.164A7.336 7.336 0 0129.336 80h6.328A7.336 7.336 0 0143 87.336V92.5a1.5 1.5 0 01-1.5 1.5h-18z"
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
const LgHomeBeauty = withWrapper(Vector);
LgHomeBeauty.groupName = "Categories";
export default LgHomeBeauty;
