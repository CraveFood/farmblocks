import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const scale = 1.219;

const Container = styled.div`
  position: relative;
  ul {
    position: relative;
    left: 50%;
    margin-left: ${props => -props.itemConfig.width * scale / 2}px;
    height: ${props =>
      props.itemConfig.height * scale + props.itemConfig.margin * 2}px;
    list-style: none;
    padding: 0;
    display: inline-flex;
    align-items: center;

    li {
      margin: ${props => props.itemConfig.margin}px;
      transition: all 2s;
      width: ${props => props.itemConfig.width}px;
      height: ${props => props.itemConfig.height}px;

      .image {
        box-shadow: 0 4px 40px 0 ${colors.GREY_32};
      }

      &.active {
        width: ${props => props.itemConfig.width * scale}px;
        height: ${props => props.itemConfig.height * scale}px;
      }
      &:first-child {
        margin-left: ${props =>
          `${-props.activeItem *
            (props.itemConfig.width + props.itemConfig.margin * 2)}px`};
      }
    }
  }
`;

export default Container;
