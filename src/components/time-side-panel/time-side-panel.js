import React, { Component, PropTypes } from "react";
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import moment from 'moment';

import styles from './time-side-panel.css';
import convertToAmPm from '../../lib/convert-military-time-to-ampm.js'

@CSSModules(styles)
export default class TimeSidePanel extends Component {
  static propTypes = {
    timesShown: PropTypes.array.isRequired,
    setSelectedDate: PropTypes.func.isRequired,
    selectedDate: PropTypes.object.isRequired
  }

  onSelectTime(time, e) {
    e.preventDefault();
    const { hour, minute } = this.destructTime(time)
    const newDate = this.props.selectedDate.clone();
    this.props.setSelectedDate(
      newDate.hour(hour).minute(minute)
    );
  }
    
  destructTime(time) {
    let split = (time + '').split(':');
    return {
      hour: split[0] || 0,
      minute: split[1] || 0
    }
  }

  renderTimes = () => {
    return this.props.timesShown.map((time, index) => {
      const { hour, minute } = this.destructTime(time);
      const date             = this.props.selectedDate;
      const isSameTime       = date.isSame(date.clone().minute(minute).hour(hour));
      return (
        <li 
          key={index}
          styleName={isSameTime ? 'selected' : ''} 
          className={classnames({
            active: isSameTime
          })}>
          <button 
            styleName="btn"
            className="btn btn-link"
            onClick={this.onSelectTime.bind(this, time)}>{convertToAmPm({ hour, minute })}
          </button>
        </li>
      );
    });
  }

  render() {
    return (
      <ul 
        className="list-unstyled side-panel">
        { this.renderTimes() }
      </ul>
    );
  }
}
