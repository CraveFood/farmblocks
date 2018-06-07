import styled from "styled-components";
import { DropdownWrapper } from "@crave/farmblocks-dropdown";

export default styled(DropdownWrapper)`
  input {
    width: 100%;
    min-width: 0; /* firefox */
  }
`;
