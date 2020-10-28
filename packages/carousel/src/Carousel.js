import * as React from "react";
import PropTypes from "prop-types";
import Image from "@crave/farmblocks-image";
import Text from "@crave/farmblocks-text";

import Container from "./styledComponents/Carousel";

const defaultConfig = {
  width: 656,
  height: 328,
  margin: 20,
  fontSize: 88,
  displayTime: 4,
  transitionTime: 2,
  border: "4px solid rgba(255, 255, 255, 0.56)",
  borderRadius: "16px",
};

class Carousel extends React.Component {
  state = {
    activeItem: 0,
  };

  componentDidMount = () => {
    this.setInterval();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.imageSet !== this.props.imageSet) {
      this.setState({ activeItem: 0 });
      this.setInterval();
    }
  }

  componentWillUnmount = () => {
    this.clearInterval();
  };

  nextItem = () => {
    const activeItem = this.state.activeItem + 1; // eslint-disable-line
    if (activeItem === this.props.imageSet.length) {
      this.clearInterval();
      this.props.onEnd();
      return;
    }
    this.props.onChange(activeItem);
    this.setState({ activeItem });
  };

  setInterval = () => {
    if (this.transitionId) {
      return;
    }

    const { displayTime } = { ...defaultConfig, ...this.props.itemConfig };

    this.transitionId = window.setInterval(this.nextItem, displayTime * 1000);
  };

  clearInterval = () => {
    if (this.transitionId) {
      window.clearInterval(this.transitionId);
      delete this.transitionId;
    }
  };

  render() {
    const { imageSet, itemConfig } = this.props;
    const configProps = { ...defaultConfig, ...itemConfig };

    return (
      <Container
        activeItem={this.state.activeItem}
        itemConfig={configProps}
        shouldScale={this.props.scale}
        className={this.props.className}
      >
        <ul>
          {imageSet.map((item, index) => {
            const isActive = index === this.state.activeItem;
            return (
              <li key={index} className={isActive ? "active" : ""}>
                <Image
                  className="image"
                  src={item.image}
                  width="100%"
                  height="100%"
                  borderRadius={configProps.borderRadius}
                  css={{
                    border: configProps.border,
                  }}
                />
                <Text
                  className="itemLabel"
                  size={configProps.fontSize}
                  align="center"
                  fontWeight="title"
                >
                  {item.name}
                </Text>
              </li>
            );
          })}
        </ul>
      </Container>
    );
  }
}

Carousel.propTypes = {
  imageSet: PropTypes.arrayOf(
    PropTypes.shape({ image: PropTypes.string, name: PropTypes.string }),
  ),
  onChange: PropTypes.func,
  onEnd: PropTypes.func,
  scale: PropTypes.bool,
  itemConfig: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.number,
    fontSize: PropTypes.number,
    displayTime: PropTypes.number,
    transitionTime: PropTypes.number,
    border: PropTypes.string,
  }),
  className: PropTypes.string,
};

Carousel.defaultProps = {
  itemConfig: defaultConfig,
  scale: true,
  onChange: () => null,
  onEnd: () => null,
};

export default Carousel;
