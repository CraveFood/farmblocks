//@flow
import * as React from "react";
import PropTypes from "prop-types";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";

import StyledAlert from "./styledComponents/Alert";
import AlertTypes from "./constants/alertTypes";
import BrieflyDisplay from "./BrieflyDisplay";

class Alert extends React.Component<Object, Object> {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(AlertTypes)),
    dismissable: PropTypes.bool,
    onDismiss: PropTypes.func,
    visibleTime: PropTypes.number,
    zIndex: PropTypes.number
  };

  static defaultProps = {
    type: AlertTypes.NEWS,
    dismissable: true,
    onDismiss: () => null
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    if (!this.state.isVisible) {
      return null;
    }
    const { visibleTime: time, zIndex } = this.props;
    const dismissHandler = () => {
      this.setState({ isVisible: false });
      this.props.onDismiss();
    };
    const alert = (
      <StyledAlert type={this.props.type} {...(zIndex ? { zIndex } : {})}>
        <p>{this.props.text}</p>

        {this.props.dismissable && (
          <div className="dismiss-button">
            <Button
              icon="wg-close"
              size={buttonSizes.SMALL}
              type={buttonTypes.OFF_NEUTRAL}
              onClick={dismissHandler}
            />
          </div>
        )}
      </StyledAlert>
    );
    if (!this.props.visibleTime) {
      return alert;
    }
    return <BrieflyDisplay {...(time ? { time } : {})}>{alert}</BrieflyDisplay>;
  }
}

export default Alert;
