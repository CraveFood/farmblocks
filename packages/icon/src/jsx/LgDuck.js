import React from "react";
import PropTypes from "prop-types";

const LgDuck = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M47 37a2 2 0 1 1-4.001 0A2 2 0 0 1 47 37zm10 0a2 2 0 1 1-4.001 0A2 2 0 0 1 57 37zm4.514 19.93c-1.87 1.889-6.385 3.07-11.51 3.07-5.128 0-9.646-1.182-11.513-3.072l-.014.005a1 1 0 0 1-.246.053c-1.763.152-3.404-.918-3.922-2.576l-.182-.58c-.494-1.582.494-3.227 2.129-3.593l2.99-.67c1.948-.496 3.325-1.201 4.59-2.213.459-.366 1.846-1.63 1.87-1.65C47.065 44.53 48.246 44 50 44c1.755 0 2.936.53 4.294 1.704.024.02 1.412 1.284 1.87 1.65 1.265 1.012 2.643 1.717 4.562 2.207l3.019.676c1.634.366 2.621 2.012 2.128 3.595l-.182.577c-.518 1.659-2.16 2.729-3.922 2.577a1 1 0 0 1-.246-.053l-.01-.004zm-2.412-.682c-.3-.073-.611-.145-.933-.215-2.617-.569-5.383-.91-8.169-.91-2.786 0-5.552.341-8.169.91-.32.07-.63.141-.93.214C42.756 57.274 46.179 58 50.004 58c3.824 0 7.244-.725 9.1-1.752zm-9.284-36.716c.362-2.052.038-4.234-1.006-6.03a1 1 0 0 1 1.73-1.004c1.223 2.105 1.647 4.616 1.304 7.014 3.954.076 5.625.555 7.923 2.275 2.536 1.897 4.32 4.872 5.275 8.395.682 2.514.924 4.782 1.082 8.851 3.689 3.712 4.884 8.861 4.28 15.36-.253 2.712-.77 5.411-1.646 9.03a241.847 241.847 0 0 1-.498 2.025c1.84 8.904 5.434 16.359 10.775 21.468a1.5 1.5 0 1 1-2.074 2.168c-5.9-5.644-9.779-13.768-11.71-23.372a1.5 1.5 0 0 1 .015-.657l.286-1.15.29-1.187c.845-3.49 1.339-6.065 1.575-8.604.55-5.92-.545-10.324-3.788-13.32a1.5 1.5 0 0 1-.48-1.048c-.15-4.235-.366-6.43-1.003-8.778-.792-2.924-2.231-5.324-4.176-6.779-1.838-1.375-3.019-1.667-6.99-1.688a10.276 10.276 0 0 1-1.186 1.996 1 1 0 0 1-1.592-1.212c.191-.25.366-.511.526-.782-3.742.034-4.91.345-6.702 1.686-1.945 1.455-3.385 3.856-4.177 6.779-.637 2.347-.852 4.543-1.001 8.778a1.5 1.5 0 0 1-.481 1.049c-3.243 2.995-4.338 7.399-3.788 13.32.236 2.538.73 5.113 1.575 8.603l.29 1.187.286 1.15a1.5 1.5 0 0 1 .014.657c-1.932 9.605-5.81 17.728-11.709 23.372a1.5 1.5 0 0 1-2.074-2.168c5.34-5.109 8.934-12.564 10.775-21.468l-.204-.823c-.112-.453-.205-.833-.294-1.202-.876-3.619-1.393-6.318-1.646-9.03-.604-6.499.591-11.648 4.28-15.36.158-4.069.4-6.336 1.081-8.85.955-3.523 2.74-6.5 5.276-8.396 2.545-1.904 4.32-2.287 9.278-2.287.106 0 .21.011.31.032zm13.965 34.28l.18-.577c.142-.451-.147-.933-.655-1.046l-3.047-.683c-2.232-.57-3.864-1.405-5.346-2.59-.518-.414-1.947-1.715-1.928-1.698C51.964 46.334 51.221 46 50 46c-1.22 0-1.963.334-2.986 1.217.018-.016-1.41 1.285-1.928 1.7-1.482 1.184-3.115 2.02-5.374 2.595l-3.019.677c-.509.113-.798.595-.657 1.044l.181.58c.225.719.939 1.209 1.734 1.186l.128-.041c.206-.067.446-.141.718-.22.772-.225 1.647-.45 2.609-.66 2.748-.597 5.654-.955 8.594-.955 2.94 0 5.846.358 8.594.956.962.21 1.837.434 2.609.659a26.349 26.349 0 0 1 .846.261c.795.023 1.509-.467 1.734-1.188zm-8.469 15.332a1 1 0 1 1-.503-1.936c.965-.25 1.928-.555 2.89-.918a1 1 0 1 1 .705 1.872c-1.028.387-2.06.714-3.092.982zm-16.95-1.024a1 1 0 0 1 .9-1.787c.089.045.285.134.581.253.509.203 1.105.407 1.783.599 2.636.746 5.658 1.08 8.962.769a1 1 0 0 1 .187 1.991c-3.564.336-6.831-.026-9.694-.836-1.285-.363-2.207-.732-2.719-.99z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgDuck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
LgDuck.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgDuck.groupName = "Subcategories";
export default LgDuck;
