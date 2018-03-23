import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const scale = 1.219;
const activeItemWidth = props => props.itemConfig.width * scale;
const activeItemHeight = props => props.itemConfig.height * scale;
const spaceBetweenItems = props => props.itemConfig.margin * 2;
const stepDistance = props => props.itemConfig.width + spaceBetweenItems(props);

const Container = styled.div`
  position: relative;
  ul {
    position: relative;
    left: 50%;
    margin-left: ${props => -(activeItemWidth(props) / 2)}px;
    height: ${props => activeItemHeight(props) + spaceBetweenItems(props)}px;
    list-style: none;
    padding: 0;
    display: inline-flex;
    align-items: center;

    li {
      margin: ${props => props.itemConfig.margin}px;
      transition: all ${props => props.itemConfig.transitionTime}s;
      width: ${props => props.itemConfig.width}px;
      height: ${props => props.itemConfig.height}px;

      .image {
        box-shadow: 0 4px 40px 0 ${colors.GREY_32};
      }

      .caption {
        text-align: center;
        font-size: ${props => props.itemConfig.fontSize};
        transition: opacity ${props => props.itemConfig.transitionTime}s;
        opacity: 0.32;
      }

      &.active {
        width: ${activeItemWidth}px;
        height: ${activeItemHeight}px;
        .caption {
          opacity: 1;
        }
      }
      &:first-child {
        margin-left: ${props => -(props.activeItem * stepDistance(props))}px;
      }
    }
  }
`;

export default Container;
