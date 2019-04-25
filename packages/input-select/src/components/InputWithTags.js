import React from "react";
import PropTypes from "prop-types";

import TagsWrapper from "../styledComponents/TagsWrapper";

const InputWithTags = React.forwardRef(({ children, ...props }, ref) => (
  <TagsWrapper className="tagsWrapper">
    {children}
    <input {...props} size="1" ref={ref} />
  </TagsWrapper>
));
InputWithTags.propTypes = {
  children: PropTypes.node,
};

export default InputWithTags;
