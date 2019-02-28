import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors as colorConstants } from "@crave/farmblocks-theme";

import HelperContent from "./HelperContent";

const Container = styled.div`
  font-family: Lato, sans-serif;

  background-color: ${colorConstants.SUGAR};

  border-top: solid 1px ${colorConstants.GREY_16};

  padding: 16px 24px;

  display: flex;
  justify-content: space-between;
`;
Container.displayName = "FooterContainer";

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  align: flex-end;

  > * {
    margin-left: 16px;
  }
`;

const Footer = props => {
  return (
    <Container>
      <HelperContent
        text={props.helpText}
        linkText={props.helpLinkText}
        linkHref={props.helpLinkHref}
        imageSrc={props.helpImageSrc}
        linkOnClick={props.onHelpLinkClick}
        size={props.helpFontSize}
      />

      <ActionsContainer>{props.actions}</ActionsContainer>
    </Container>
  );
};

Footer.propTypes = {
  helpImageSrc: PropTypes.string,
  helpText: PropTypes.string,
  helpLinkText: PropTypes.string,
  helpLinkHref: PropTypes.string,
  onHelpLinkClick: PropTypes.func,
  helpFontSize: PropTypes.number,
  actions: PropTypes.arrayOf(PropTypes.node),
};

export default Footer;
