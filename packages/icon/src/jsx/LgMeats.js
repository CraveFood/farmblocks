import React from "react";
import PropTypes from "prop-types";

const LgMeats = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M62.685 80.57c-.1-.44-.08-.383-.649-1.909-1.159-3.104-1.336-5.45-.06-8.906l.05-.117c.668-1.425 1.716-3.008 3.485-5.38-.264.354 3.692-4.862 4.844-6.462 7.792-10.827 10.585-19.43 7.131-28.58-1.285-3.126-1.653-3.968-2.46-5.46-2.165-4.003-4.997-6.894-9.34-8.948-9.378-4.367-27.318-.8-36.945 8.468-12.13 11.679-10.585 29.77 9.126 52.926 6.535 7.25 11.935 10.582 16.305 10.808 3.172.164 5.716-1.302 8.01-4.08.584-.872.693-1.516.503-2.36zm2.162-2.958l.204.542c.084.222.146.391.205.557.156.444.27.822.356 1.2.373 1.661.103 3.168-.991 4.766l-.077.103c-2.853 3.48-6.239 5.447-10.527 5.226-5.306-.275-11.361-4.011-18.407-11.827-20.672-24.284-22.367-44.145-8.95-57.064 10.495-10.103 29.755-13.933 40.301-9.023 4.967 2.35 8.252 5.702 10.704 10.238.877 1.62 1.267 2.512 2.612 5.785 3.917 10.376.834 19.87-7.487 31.433-1.178 1.637-5.158 6.885-4.874 6.504-1.627 2.181-2.586 3.625-3.148 4.803-.97 2.66-.842 4.29.079 6.757zm-8.057 2.152c-1.304-3.758-1.459-7.338.206-11.847l.119-.312.105-.224c1.042-2.22 2.265-3.982 5.693-8.49 4.73-6.217 6.795-9.27 8.549-13.182 2.33-5.197 2.794-9.956 1.078-14.562l-.145-.353c-2.09-5.1-3.25-7.122-5.754-9.176a1 1 0 0 1 1.269-1.546c2.84 2.33 4.124 4.569 6.336 9.963l.157.384c1.93 5.177 1.414 10.467-1.116 16.108-1.838 4.099-3.959 7.235-8.782 13.576-3.333 4.38-4.517 6.087-5.475 8.13l-.072.144-.085.232c-1.49 4.036-1.356 7.15-.194 10.5.11.317.2.56.392 1.067l.125.332a1 1 0 0 1-.212 1.044c-1.507 1.577-2.857 2.161-4.345 2.161-3.25 0-7.968-2.702-14.278-9.687a111.159 111.159 0 0 1-5.146-6.51 1 1 0 0 1 1.616-1.178 109.173 109.173 0 0 0 5.034 6.37c5.946 6.581 10.179 9.005 12.774 9.005.812 0 1.542-.268 2.456-1.107-.13-.349-.21-.568-.305-.842zM30.214 55.516a1 1 0 1 1-1.8.87c-4.48-9.257-5.235-17.439-2.136-24.146 4.463-9.663 17.217-15.932 29.578-15.932 2.118 0 4.1.21 5.804.614a1 1 0 0 1-.462 1.946c-1.545-.366-3.373-.56-5.342-.56-11.65 0-23.669 5.907-27.762 14.77-2.819 6.1-2.12 13.676 2.12 22.438zm4.291 7.473a1 1 0 1 1-1.67 1.1 75.738 75.738 0 0 1-1.927-3.078 1 1 0 1 1 1.72-1.02 73.74 73.74 0 0 0 1.877 2.998zm5.319-21.048a4 4 0 1 1 0-8h20a4 4 0 1 1 0 8h-6v10a4 4 0 1 1-8 0v-10h-6zm20-6h-20a2 2 0 1 0 0 4h7a1 1 0 0 1 1 1v11a2 2 0 1 0 4 0v-11a1 1 0 0 1 1-1h7a2 2 0 1 0 0-4z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgMeats.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
LgMeats.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgMeats.groupName = "Categories";
export default LgMeats;
