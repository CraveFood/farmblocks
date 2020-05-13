import * as React from "react";
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
      d="M66.572 55.25l3.05 1.222a1 1 0 11-.744 1.857l-3.104-1.244c-.341.687-.705 1.31-1.093 1.865l.11.066c.512.296 1.209.609 2.036.92a34.05 34.05 0 002.364.784c.24.071.465.135.672.192 5.587-1.741 9.29-4.821 11.492-8.877 1.075-1.98 1.74-4.105 2.068-6.269.224-1.482.267-2.79.207-3.808l-.009-.13c-.841-2.601-3.717-5.127-8.016-7.377-1.919-1.005-3.985-1.884-6.053-2.63a54.168 54.168 0 00-.878-.307c.8 3.808.806 9.372.019 14.917-.481 3.389-1.188 6.384-2.12 8.82zm3.377 8.72a1.5 1.5 0 01-.427-.045 40.426 40.426 0 01-3.753-1.182c-1.392-.524-2.475-1.03-3.238-1.61a5.117 5.117 0 01-2.38.857 1.5 1.5 0 01-.736-.119 51.142 51.142 0 00-3.45-1.314 36.462 36.462 0 00-2.435-.737c-1.342-.352-2.48-.542-3.32-.542-.86 0-2.05.2-3.461.568-.757.198-1.56.44-2.391.714a54.606 54.606 0 00-3.545 1.317 1.5 1.5 0 01-.72.112 5.09 5.09 0 01-2.277-.789c-.758.551-1.81 1.04-3.15 1.544a40.436 40.436 0 01-3.753 1.182 1.5 1.5 0 01-.426.044c-1.574 2.415-.777 5.666 2.028 11.024.61 1.166-.47 2.497-1.738 2.138-7.314-2.071-14.093-7.4-16.935-13.753-3.051-6.819-3.167-14.683-.078-21.02l.022-.044c.006-.18.015-.358.025-.535.011-.187.023-.324.032-.406a1.5 1.5 0 01.052-.262c1.076-3.635 4.513-6.686 9.544-9.32 2.052-1.073 4.241-2.004 6.428-2.792a53.679 53.679 0 012.117-.715 29.181 29.181 0 01.841-.253c.055-.086.11-.169.168-.248 1.614-2.228 4.52-3.703 8.347-4.651 1.945-.482 4.014-.796 6.08-.978a44.23 44.23 0 011.996-.132c.367-.015.633-.022.807-.023.148.001.413.008.776.023a43.1 43.1 0 011.98.132c2.048.183 4.099.5 6.027.985 3.767.949 6.636 2.421 8.243 4.64.048.067.096.138.143.21.078.01.156.025.234.046.157.044.438.127.827.249.64.2 1.35.439 2.116.715 2.187.788 4.375 1.719 6.428 2.793 5.03 2.633 8.467 5.684 9.543 9.319a1.5 1.5 0 01.053.261c.009.083.02.22.031.408.01.175.019.353.025.532l.024.046c3.087 6.337 2.971 14.202-.08 21.02-2.84 6.353-9.62 11.682-16.934 13.753-1.267.36-2.349-.972-1.738-2.138 2.804-5.356 3.602-8.61 2.028-11.024zm2.936-.948c1.493 2.761 1.11 5.852-.681 9.998 5.153-2.308 9.626-6.338 11.65-10.866 1.831-4.09 2.468-8.595 1.854-12.787a22.03 22.03 0 01-1.716 4.1c-2.273 4.186-5.916 7.482-11.107 9.555zM14.728 49.367c-.615 4.192.022 8.696 1.852 12.787 2.026 4.529 6.499 8.559 11.653 10.866-1.793-4.147-2.176-7.237-.682-9.998-5.19-2.073-8.834-5.369-11.107-9.556a22.032 22.032 0 01-1.716-4.1zm20.891 9.664c-1.94-2.724-3.297-7.153-4.07-12.598-.782-5.511-.78-11.042.005-14.848l-.67.237c-2.068.745-4.134 1.624-6.054 2.629-4.299 2.25-7.175 4.776-8.016 7.376l-.008.13c-.06 1.02-.018 2.326.207 3.809.328 2.164.993 4.289 2.068 6.269 2.202 4.056 5.905 7.136 11.492 8.877.206-.057.432-.12.672-.192a34.058 34.058 0 002.364-.784c.814-.306 1.5-.613 2.01-.905zm3.216-.84c.4.387.81.643 1.22.754a57.575 57.575 0 013.36-1.232 41.978 41.978 0 012.576-.77c1.638-.427 3.055-.665 4.22-.665 1.141 0 2.51.229 4.08.64.843.22 1.727.49 2.636.798a54.11 54.11 0 013.267 1.228c2.278-.625 4.501-5.696 5.529-12.935 1.012-7.134.568-14.438-.904-16.47-1.1-1.517-3.399-2.698-6.545-3.49-1.76-.443-3.66-.736-5.562-.906-.668-.06-1.287-.099-1.84-.123-.329-.014-.558-.02-.649-.02-.116 0-.349.006-.68.02-.56.024-1.186.064-1.86.123-1.923.17-3.843.461-5.621.902-3.203.793-5.538 1.979-6.64 3.499-1.47 2.032-1.915 9.334-.902 16.467.814 5.74 2.381 10.116 4.13 11.993.068.057.13.12.185.188zm-.502-22.28a.938.938 0 11-1.872-.134c.158-2.206.49-3.852.986-4.622a.939.939 0 011.578 1.017c-.268.416-.556 1.841-.692 3.74zm11.872 16.193a.938.938 0 110 1.877c-2.296 0-5.53.868-8.924 2.157a.939.939 0 01-1.06-.284c-.849-1.039-1.72-2.938-2.432-5.654-.847-3.235-1.314-6.84-1.407-10.336a.938.938 0 011.876-.05c.09 3.36.539 6.823 1.347 9.91.528 2.015 1.131 3.49 1.693 4.404 3.343-1.223 6.48-2.024 8.907-2.024zm-21.773 3.12a.939.939 0 01-.9 1.648c-6.262-3.423-8.397-8.951-8.196-14.338a.939.939 0 01.084-.353c.372-.818 1.05-1.635 1.994-2.454a.938.938 0 111.23 1.418c-.685.595-1.17 1.157-1.438 1.657-.119 4.685 1.779 9.445 7.226 12.423zm-2.75-18.328a.939.939 0 11.889 1.653c-.508.273-1 .555-1.47.84a.939.939 0 01-.977-1.602c.499-.304 1.02-.602 1.559-.891zm32.585-6.974a1 1 0 012 0v1a1 1 0 11-2 0v-1zm3 4a1 1 0 012 0v1a1 1 0 11-2 0v-1zm-3 4a1 1 0 012 0v1a1 1 0 11-2 0v-1z"
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
const LgBakedProducts = withWrapper(Vector);
LgBakedProducts.groupName = "Categories";
export default LgBakedProducts;
