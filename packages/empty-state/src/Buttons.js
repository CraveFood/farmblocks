import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, flexbox } from "styled-system";
import { useMediaQuery } from "react-responsive";
import Button from "@crave/farmblocks-button";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  > * {
    margin: 4px;
  }

  ${flexbox};
  ${space};
`;

const Buttons = ({ actions }) => {
  if (!actions?.length) {
    return null;
  }

  const isMobile = useMediaQuery({ maxWidth: "40em" });

  return (
    <Wrapper
      className="buttons"
      flexDirection={["column", "row"]}
      mt={2}
      justifyContent="center"
    >
      {actions.map((buttonProps) => (
        <Button
          key={`empty-state-button-${buttonProps.text}`}
          data-testid={`empty-state-button-${buttonProps.text}`}
          fluid={isMobile}
          {...buttonProps}
          small={buttonProps.small || isMobile}
        />
      ))}
    </Wrapper>
  );
};

Buttons.propTypes = {
  actions: PropTypes.array,
};

export default Buttons;
