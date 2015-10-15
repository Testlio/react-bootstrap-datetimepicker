import React, { Component, PropTypes } from "react";
import CSSModules from 'react-css-modules';
import moment from 'moment';

import styles from './time-side-panel.css';
import convertToAmPm from '../../lib/convert-military-time-to-ampm.js'

@CSSModules(styles)
export default class TimeSidePanel extends Component {
  static propTypes = {
    timesShown: PropTypes.array.isRequired,
    setSelectedTime: PropTypes.func.isRequired
  }

  state = {
    selectedTime: null
  }

  onSelectTime(time) {
    this.setState({selectedTime : time});
  }
    
  renderTimes = () => {
    let i = 0
    return this.props.timesShown.map((time, index) => {
      return (
        <li 
          key={index}
          styleName={this.state.selectedTime === time ? 'selected' : ''} >
          <btn 
            className="btn btn-link"
            onClick={this.onSelectTime.bind(this, time)}>{convertToAmPm(time)}</btn>
        </li>
      );
    });
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