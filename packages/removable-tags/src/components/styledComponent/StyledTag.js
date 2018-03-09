import styled from "styled-components";
import { colors as colorConstants } from "@crave/farmblocks-theme";

const StyledTag = styled.div`
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid ${colorConstants.GREY_16};
  border-radius: 4px;
  padding: 6px 0px 8px 8px;
  background-color: ${colorConstants.INDIGO_MILK_CAP};
  height: 32px;
  margin: 2px;

  font-size: 14px;
  color: white;
  font-family: Lato;
  font-weight: 600;

  cursor: default;
  &:hover {
    border: 2px solid ${colorConstants.GREY_32};
    padding: 5px 0px 7px 7px;
    background-color: ${colorConstants.BLUE_CORN};
  }

  .icon {
    display: inline-block;
    box-sizing: border-box;
    padding: 6px 8px 8px 8px;

    font-size: 8px;
    color: ${colorConstants.GREY_32};
  }

  &:hover .icon,
  &:focus .icon {
    padding-right: 7px;
    color: white;
    cursor: pointer;
  }
`;

export default StyledTag;
