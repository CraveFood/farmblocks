import React from "react";
import PropTypes from "prop-types";
import Button, { buttonSizes, buttonTypes } from "@crave/farmblocks-button";

import Container from "../styledComponents/Footer";

import HelperContent from "./HelperContent";

const Footer = props => {
  const helper = (
    <HelperContent
      text={props.helpText}
      linkText={props.helpLinkText}
      linkHref={props.helpLinkHref}
      imageSrc={props.helpImageSrc}
      linkOnClick={props.onHelpLinkClick}
    />
  );
  if (props.noAction) {
    return helper;
  }

  return (
    <Container>
      {helper}

      <div className="button-container">
        {props.onSecondaryActionClick && (
          <Button
            size={buttonSizes.MEDIUM}
            onClick={props.onSecondaryActionClick}
            text={props.secondaryActionText}
            loading={props.loadingSecondaryAction}
          />
        )}

        {props.onPrimaryActionClick && (
          <Button
            size={buttonSizes.MEDIUM}
            type={buttonTypes.SECONDARY}
            onClick={props.onPrimaryActionClick}
            text={props.primaryActionText}
            loading={props.loadingPrimaryAction}
          />
        )}
      </div>
    </Container>
  );
};

Footer.propTypes = {
  helpImageSrc: PropTypes.string,
  helpText: PropTypes.string.isRequired,
  helpLinkText: PropTypes.string,
  helpLinkHref: PropTypes.string,
  onHelpLinkClick: PropTypes.func,
  noAction: PropTypes.bool,
  onSecondaryActionClick: PropTypes.func,
  secondaryActionText: PropTypes.string,
  loadingSecondaryAction: PropTypes.bool,
  onPrimaryActionClick: PropTypes.func,
  primaryActionText: PropTypes.string,
  loadingPrimaryAction: PropTypes.bool
};

Footer.defaultProps = {
  noAction: false,
  loadingSecondaryAction: false,
  loadingPrimaryAction: false
};

export default Footer;
