import styled from "styled-components";
import { DropdownWrapper } from "@crave/farmblocks-dropdown";
import { colors } from "@crave/farmblocks-theme";

export default styled(DropdownWrapper)`
  width: ${(props) => props.width};
  z-index: ${(props) => props.zIndex};

  input:disabled {
    background: none;
    color: ${colors.GREY_32};
  }
`;
