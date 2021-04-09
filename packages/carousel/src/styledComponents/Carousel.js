import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const scale = (props) => (props.shouldScale ? 1.219 : 1);
const activeItemWidth = (props) => props.itemConfig.width * scale(props);
const activeItemHeight = (props) => props.itemConfig.height * scale(props);
const spaceBetweenItems = (props) => props.itemConfig.margin * 2;
const stepDistance = (props) =>
  props.itemConfig.width + spaceBetweenItems(props);
const activeItemMargin = (props) => {
  const { itemConfig } = props;
  const scaledWidth = itemConfig.width * scale(props);

  // We get the difference from scaled width and normal width.
  // This difference is the total margin we have to compensate due to transform: scale.
  // Then we divide it by 2 because we need to add this on left and right margin
  const scaledMargin = (scaledWidth - itemConfig.width) / 2;

  // Just add the default margin to it
  return scaledMargin + itemConfig.margin;
};

const Container = styled.div`
  position: relative;
  ul {
    position: relative;
    left: 50%;
    margin-left: ${(props) => -(activeItemWidth(props) / 2)}px;
    height: ${(props) => activeItemHeight(props) + spaceBetweenItems(props)}px;
    list-style: none;
    padding: 0;
    display: inline-flex;
    align-items: center;

    transform: translateX(
      ${(props) => -(props.activeItem * stepDistance(props))}px
    );
    transition: transform ${(props) => props.itemConfig.transitionTime}s;
    will-change: transform;

    li {
      margin: ${(props) => props.itemConfig.margin}px;
      min-width: ${(props) => props.itemConfig.width}px;
      width: ${(props) => props.itemConfig.width}px;
      height: ${(props) => props.itemConfig.height}px;

      transition: all ${(props) => props.itemConfig.transitionTime}s;
      will-change: transform;

      .image {
        box-shadow: 0 4px 40px 0 ${colors.GREY_32};
      }

      &.active {
        transform: scale(${scale});
        transform-origin: bottom;
        margin: 0 ${activeItemMargin}px;
      }
    }
  }
`;

export default Container;
