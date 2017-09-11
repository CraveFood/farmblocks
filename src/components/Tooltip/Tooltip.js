import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Tooltip.scss';

class Tooltip extends Component {
  render() {
    const classes = classnames(styles.container, styles.left, {
      [styles.hide]: !this.props.isVisible
    });

    return (
      <div className={styles['container-anchor']}>
        <div className={classes}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  isVisible: PropTypes.bool
};

Tooltip.defaultProps = {
  isVisible: true,
};

export default Tooltip;
