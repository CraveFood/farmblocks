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
      d="M47.447 41.106a2.128 2.128 0 11-4.256-.001 2.128 2.128 0 014.256 0zm9.362 0a2.128 2.128 0 11-4.257-.001 2.128 2.128 0 014.257 0zm11.178 37.933c-2.144.022-4.031-.945-5.635-2.548-.482 2.965-2.58 4.365-5.58 3.876-2.535-.413-5.23-2.142-6.772-4.265-1.542 2.123-4.237 3.852-6.771 4.265-3 .49-5.1-.911-5.576-3.88l-.005.004c-1.604 1.603-3.49 2.57-5.635 2.548-2.13 5.063-5.038 9.42-8.741 12.836a1.5 1.5 0 01-2.034-2.205c5.394-4.975 9-12.26 10.816-20.965 1.113-5.34 1.555-10.478 1.859-19.117.022-.642.04-1.149.078-2.316.051-1.543.075-2.24.107-3.103.157-4.293.39-6.585 1.107-9.136.958-3.41 2.749-6.29 5.289-8.123 1.787-1.288 3.19-1.852 5.586-2.074-1.399-4.266-1.913-7.314-1.832-11.29.052-2.441.623-4.372 2.054-5.822 1.813-1.837 5.02-2.329 7.182-.87 2.125 1.433 2.54 3.628 2.146 6.797-.253 2.034-.553 3.497-1.292 6.636-.501 2.132-.756 3.29-.965 4.506 2.738.185 4.215.734 6.134 2.117 2.539 1.832 4.33 4.713 5.288 8.123.717 2.55.95 4.843 1.107 9.135.032.864.056 1.56.107 3.104l.078 2.316c.304 8.639.746 13.778 1.859 19.116 1.815 8.706 5.422 15.99 10.816 20.966a1.5 1.5 0 01-2.034 2.205c-3.703-3.415-6.61-7.773-8.74-12.836zm-.81-2.06a54.701 54.701 0 01-2.168-7.662c-1.157-5.55-1.61-10.825-1.92-19.623-.022-.645-.04-1.153-.078-2.322-.052-1.54-.075-2.235-.107-3.094-.148-4.064-.363-6.18-.997-8.434-.787-2.801-2.218-5.103-4.155-6.5-1.915-1.382-3.126-1.633-7.497-1.633a1.51 1.51 0 01-.255-.022 1.51 1.51 0 01-.255.022c-4.37 0-5.582.251-7.496 1.632-1.938 1.398-3.369 3.7-4.156 6.502-.634 2.253-.849 4.369-.997 8.434a818.75 818.75 0 00-.107 3.093l-.078 2.322c-.31 8.798-.763 14.073-1.92 19.623a54.7 54.7 0 01-2.168 7.663c1.236-.195 2.376-.868 3.411-1.903.448-.448.84-.93 1.173-1.411.197-.284.326-.5.385-.609.529-.986 2.032-.491 1.87.617-.547 3.761.723 5.13 3.245 4.72 2.503-.409 5.333-2.544 6.158-4.693a1 1 0 011.87-.004v.004c.825 2.149 3.655 4.284 6.158 4.692 2.522.411 3.792-.958 3.244-4.72-.16-1.107 1.342-1.602 1.871-.616.059.11.188.325.385.609.332.481.725.963 1.173 1.41 1.035 1.036 2.175 1.709 3.411 1.904zM49.202 24.713l.543-.001c.087 0 .172.007.255.021a1.51 1.51 0 01.255-.021h.09c.237-1.462.501-2.68 1.072-5.105.716-3.045 1-4.43 1.236-6.325.266-2.143.04-3.342-.847-3.94-.906-.612-2.526-.363-3.369.49-.788.8-1.152 2.03-1.19 3.777-.077 3.838.445 6.675 1.941 11.063l.014.041zM30.667 86.894a1 1 0 011.678 1.09 38.733 38.733 0 01-4.162 5.349 1 1 0 01-1.462-1.365 36.736 36.736 0 003.946-5.074zm3.09-5.67a1 1 0 011.82.826c-.33.73-.68 1.45-1.046 2.161a1 1 0 01-1.778-.917c.352-.68.686-1.37 1.003-2.07zM46.97 54.533l-2.493-1.021c-1.827-.75-2.097-3.226-.473-4.351l4.576-3.174a2.492 2.492 0 012.838 0l4.576 3.174c1.624 1.125 1.354 3.602-.474 4.35l-2.492 1.022a7.985 7.985 0 01-6.058 0zm5.299-1.85l2.493-1.022a.49.49 0 00.093-.857l-4.576-3.172a.492.492 0 00-.56 0l-4.576 3.172a.49.49 0 00.092.857l2.494 1.021a5.985 5.985 0 004.54 0z"
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
const LgChicken = withWrapper(Vector);
LgChicken.groupName = "Subcategories";
export default LgChicken;
