import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {SMALL, LARGE} from '../../constants/SizeTypes';
import {PRIMARY, SECONDARY, NEGATIVE, NEUTRAL, NEUTRAL_OFF, CLOSED, REQUEST} from '../../constants/ButtonTypes';

import Tooltip from '../Tooltip';

import styles from './Button.scss';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false
    };

    this.getButtonStyle = this.getButtonStyle.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeaves = this.mouseLeaves.bind(this);
  }

  render() {
    const buttonStyle = this.getButtonStyle(this.props);

    const icon = this.props.loading ? 'wg-loading' : this.props.icon;
    const disabled = this.props.disabled || this.props.loading;
    const showingIcon = this.props.icon || this.props.loading;
    const marginOffset = !!this.props.text ? 10 : 0;

    return (
      <div className={styles['outer-container']}>
        {this.props.disabled &&
        <div className={styles['hit-box-container']}
             onMouseOver={this.mouseOver}
             onMouseLeave={this.mouseLeaves}/>
        }
        <div className={styles.container}>
          <button className={buttonStyle}
                  onClick={this.props.onClick}
                  disabled={disabled}
                  tabIndex={this.props.tabIndex}
                  onMouseOver={this.mouseOver}
                  onMouseLeave={this.mouseLeaves}>

            {showingIcon &&
            <div style={{marginRight: marginOffset}}>
              <i className={icon}/>
            </div>
            }
            {this.props.text || this.props.children}
          </button>

          <Tooltip text='This action is disabled.'
                   isVisible={this.state.showTooltip}/>
        </div>
      </div>
    );
  }

  mouseOver() {
    if (this.props.disabled) {
      this.setState({
        showTooltip: true
      });
    }
  }

  mouseLeaves() {
    if (this.props.disabled) {
      this.setState({
        showTooltip: false
      });
    }
  }

  getButtonStyle() {
    const buttonSize = styles[this.props.size];
    const buttonColor = styles[this.props.type];

    return classnames(styles.button, {
      [this.props.size]: true,
      [buttonColor]: true,
      [buttonSize]: true,
      [[styles['only-icon']]]: !this.props.text,
      [[styles.fluid]]: this.props.fluid,
      [[styles.activated]]: this.props.activated
    });
  }
}

Button.defaultProps = {
  size: SMALL,
  type: 'primary'
};

Button.propTypes = {
  activated: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  size: PropTypes.oneOf([SMALL, LARGE]),
  type: PropTypes.oneOf([PRIMARY, SECONDARY, NEGATIVE, NEUTRAL, NEUTRAL_OFF, CLOSED, REQUEST]),
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  tabIndex: PropTypes.number
};

export default Button;
