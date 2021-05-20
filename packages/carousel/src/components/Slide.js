import React from "react";
import PropTypes from "prop-types";

import { Container, Wrapper } from "../styledComponents/Slide";

const Slide = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);

Slide.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slide;
