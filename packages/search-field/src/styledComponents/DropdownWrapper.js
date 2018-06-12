import styled from "styled-components";
import { DropdownWrapper } from "@crave/farmblocks-dropdown";
import { colors } from "@crave/farmblocks-theme";

export default styled(DropdownWrapper)`
  input {
    width: 100%;
    min-width: 0; /* firefox */
  }
  &.selected .input {
    background: ${colors.SUGAR};
    cursor: auto;
  }
`;
