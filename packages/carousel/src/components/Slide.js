import React from "react";
import PropTypes from "prop-types";

import { Container, Wrapper } from "../styledComponents/Slide";

const Slide = ({ children, borderRadius, ...props }) => (
  <Wrapper>
    <Container borderRadius={borderRadius} {...props}>
      {children}
    </Container>
  </Wrapper>
);

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  borderRadius: PropTypes.number,
};

Slide.defaultProps = {
  borderRadius: 20,
};

export default Slide;
