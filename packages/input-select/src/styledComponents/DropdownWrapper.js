import styled from "styled-components";
import { DropdownWrapper } from "@crave/farmblocks-dropdown";

export default styled(DropdownWrapper)`
  width: ${(props) => props.width};
  z-index: ${(props) => props.zIndex};
`;
