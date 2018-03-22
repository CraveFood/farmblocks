import * as React from "react";
import PropTypes from "prop-types";
import Image from "@crave/farmblocks-image";

import Container from "./styledComponents/Carousel";

const defaultConfig = {
  width: 656,
  height: 328,
  margin: 20,
  displayTime: 4000,
  border: {
    radius: "16px",
    width: "4px",
    color: "rgba(255, 255, 255, 0.56)"
  }
};

class Carousel extends React.Component {
  state = {
    activeItem: 0,
    transitionInterval: 0
  };

  nextItem = () => {
    if (this.state.activeItem + 1 === this.props.imageSet.length) {
      if (this.state.transitionInterval) {
        window.clearInterval(this.state.transitionInterval);
        this.props.onEnd();
      }
      return null;
    }
    const activeItem = this.state.activeItem + 1;
    this.props.onChange(activeItem);
    return this.setState({ activeItem });
  };

  componentDidMount = () => {
    const transitionInterval = window.setInterval(
      this.nextItem,
      this.props.itemConfig.displayTime
    );
    return this.setState({ transitionInterval });
  };

  render() {
    const { imageSet, itemConfig } = this.props;
    return (
      <Container activeItem={this.state.activeItem} itemConfig={itemConfig}>
        <ul>
          {imageSet.map((item, index) => {
            const isActive = index === this.state.activeItem;
            return (
              <li key={index} className={isActive ? "active" : ""}>
                <Image
                  className="image"
                  src={item.image}
                  border={itemConfig.border}
                  width="100%"
                  height="100%"
                />
              </li>
            );
          })}
        </ul>
      </Container>
    );
  }

  static propTypes = {
    imageSet: PropTypes.arrayOf(PropTypes.shape({ image: PropTypes.string })),
    onChange: PropTypes.func,
    onEnd: PropTypes.func,
    itemConfig: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
      margin: PropTypes.number,
      displayTime: PropTypes.number,
      border: PropTypes.shape({
        width: PropTypes.string,
        radius: PropTypes.string,
        color: PropTypes.string
      })
    })
  };

  static defaultProps = {
    itemConfig: defaultConfig,
    onChange: () => null,
    onEnd: () => null
  };
}

export default Carousel;
