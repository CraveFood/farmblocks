import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import TextInput from "@crave/farmblocks-input-text";

export const PopoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 340px;
  min-width: 280px;
`;

export const CountryListWrapper = styled.ul`
  padding: 0;
  margin: 0;
  border-top: solid 1px ${colors.GREY_16};
  flex: 1;
  width: 100%;
`;

export const NationalNumberInput = styled(TextInput)`
  .input {
    overflow: unset;
    @media only screen and (max-width: ${props =>
        props.tooltipProps?.fullScreenBreakpoint ||
        props.fullScreenBreakpoint}) {
      input {
        /* This prevents iOS from zooming in the input on focus */
        font-size: 16px;
      }
    }
  }
  .prefix {
    padding: 0;
    align-items: stretch;
    border-radius: 3px 0 0 3px;

    .popover__trigger {
      height: 100%;
    }
  }
`;
