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
      d="M40.273 72.194a5.856 5.856 0 01-11.218-2.352 5.854 5.854 0 0111.63-.967c.195-1.128.444-2.266.743-3.41-.406-1.755-.82-3.608-1.24-5.548a5.855 5.855 0 01-10.514.088 338.793 338.793 0 01-2.06 8.982c-1.681 6.854-3.159 11.603-4.432 13.932 1.028 3.51 5.546 6.359 11.118 6.368h.802c3.552-.006 6.787-1.174 8.905-3.059-2.702-3.312-3.898-7.534-3.81-12.41.01-.537.036-1.079.076-1.624zm-9.11-19.31a5.848 5.848 0 017.57.064 677.778 677.778 0 01-.653-3.261c-.93.6-2.024.931-3.17.931a5.833 5.833 0 01-3.115-.896c-.21 1.062-.42 2.117-.632 3.161zm2.266-11.68a825.817 825.817 0 01-1.204 6.325 3.833 3.833 0 002.684 1.09 3.84 3.84 0 002.738-1.14c-.401-2.064-.798-4.15-1.189-6.246a3.839 3.839 0 00-1.548-.323 3.84 3.84 0 00-1.481.294zm.406-2.196a5.893 5.893 0 012.214.013 941.883 941.883 0 01-1.108-6.144 894.48 894.48 0 01-1.106 6.131zm8.773 22.608a56.155 56.155 0 012.073-5.103l-.197-3.013a5.223 5.223 0 01-.145-2.285c-.545-8.687-.956-16.538-1.252-24.125-.115-4.35-3.58-7.859-7.855-7.99a1.544 1.544 0 01-1.06 0c-4.275.131-7.742 3.64-7.856 8.006-.561 14.4-1.342 26.752-3.066 50.217.743-2.32 1.556-5.284 2.422-8.813.9-3.672 1.846-7.898 2.821-12.572a762.046 762.046 0 003.695-19.041 863.763 863.763 0 001.527-8.654 1 1 0 011.226-.805l.073-.015a1 1 0 011.152.82l.106.62.303 1.758c.33 1.893.705 4.003 1.119 6.276a761.965 761.965 0 003.694 19.04c.412 1.974.82 3.87 1.22 5.68zm-9.571-44.891c-.124-1.465-.046-3.02.36-4.527C34.424 8.386 37.306 6 42.181 6a1.535 1.535 0 010 3.069c-3.438 0-5.143 1.411-5.82 3.927-.321 1.19-.369 2.493-.245 3.699 5.203.563 9.29 4.954 9.432 10.315a965.47 965.47 0 00.998 19.958c3.693-3.562 11.226-3.814 18.78-.613l.09-.257c.43-1.276.673-2.548.641-3.696-.052-1.856-.8-3.167-2.5-3.932a1.233 1.233 0 011.013-2.249c2.627 1.184 3.875 3.369 3.952 6.112.042 1.479-.254 3.023-.77 4.552-.061.184-.123.358-.184.523 8.466 4.385 13.744 11.916 11.66 17.71-.731 2.028-2.066 3.14-3.911 3.465l-.055.234c-.193.812-.43 1.715-.716 2.687-.816 2.777-1.852 5.555-3.133 8.16-4.108 8.351-9.791 13.16-17.245 12.259-.15.168-.317.343-.503.518-1.376 1.297-2.996 1.892-4.71 1.12a1.517 1.517 0 01-.138-.072c-.05-.016-.1-.035-.149-.058-1.276-.574-2.028-1.692-2.377-3.097a8.094 8.094 0 01-.227-2.01 16.9 16.9 0 01-.358-.313c-2.587 2.334-6.434 3.73-10.602 3.738h-.806c-7.822-.013-14.2-4.933-13.778-10.89 1.916-25.889 2.747-38.744 3.335-53.833.139-5.289 4.099-9.627 9.182-10.301zM47.57 57.417l-.076.16c-.6 1.27-1.2 2.686-1.76 4.207-1.528 4.15-2.469 8.28-2.538 12.089-.097 5.386 1.555 9.66 5.324 12.584a1.5 1.5 0 01.569 1.37 5.524 5.524 0 00.112 1.784c.148.593.384.944.699 1.085.047.022.093.045.138.071.05.017.1.036.15.058.357.162.829-.012 1.419-.567.313-.296.55-.597.659-.765a1.5 1.5 0 011.523-.66c6.263 1.126 11.18-2.867 14.931-10.494 1.198-2.436 2.176-5.057 2.947-7.68.225-.767.418-1.487.581-2.148a14.876 14.876 0 01-.996-.213c-1.498-.374-3.202-.998-5.412-1.946-.86-.369-1.764-.772-3.01-1.338.245.112-2.439-1.111-3.187-1.448-.693-.312-3.488-1.556-4.178-1.868a89.126 89.126 0 01-3.792-1.796c-1.631-.83-3.002-1.65-4.103-2.485zm17.18-8.04c-8.07-3.634-15.729-2.712-17.23 1.458-.786 2.185.738 3.962 5.514 6.393a86.419 86.419 0 003.665 1.736c.681.307 3.474 1.55 4.176 1.867 9.515 4.285 8.815 3.985 11.103 4.556 2.667.665 3.857.294 4.426-1.286 1.547-4.3-3.522-11.06-11.654-14.724zm-15.59 31.6a1 1 0 11-1.611 1.183c-2.453-3.34-2.836-7.956-1.694-13.39a1 1 0 011.958.411c-1.038 4.932-.7 9.007 1.348 11.795zm22.377-22.684c-.183.506-.696.75-1.148.547-.452-.204-.67-.778-.49-1.284.183-.506.697-.75 1.149-.547.452.204.67.78.489 1.284zM74.15 61.6c-.182.505-.695.75-1.147.547-.453-.205-.671-.779-.49-1.285.183-.505.697-.75 1.149-.546.452.203.67.778.488 1.284zm-3.932.356c-.182.505-.695.75-1.147.547-.453-.204-.67-.778-.489-1.284.182-.506.696-.75 1.148-.547.452.203.671.779.488 1.284zm-31.455-4.572a3.854 3.854 0 10-7.708 0 3.854 3.854 0 007.708 0zm0 12.46a3.854 3.854 0 10-7.708-.001 3.854 3.854 0 007.708 0zm0 12.459a3.855 3.855 0 10-7.71 0 3.855 3.855 0 007.71 0zm2 0a5.854 5.854 0 11-11.709 0 5.855 5.855 0 0111.71 0z"
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
const LgLegumesNuts = withWrapper(Vector);
LgLegumesNuts.groupName = "Categories";
export default LgLegumesNuts;
