import React, { Component, PropTypes } from "react";
import CSSModules from 'react-css-modules';
import moment from 'moment';

import styles from './time-side-panel.css';
import convertToAmPm from '../../lib/convert-military-time-to-ampm.js'

@CSSModules(styles)
export default class TimeSidePanel extends Component {
  renderTimes = () => {
    let i = 0
    let result = [];
    while (i++ < 24) {
      result.push(<li key={i}>{convertToAmPm(i)}</li>);
    }
    return result;
  }

  render() {
    return (
      <ul 
        styleName="side-panel" 
        className="list-unstyled">
        { this.renderTimes() }
      </ul>
    );
  }
}
