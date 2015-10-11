import React, { Component, PropTypes } from "react";
import { Glyphicon } from "react-bootstrap";
import CSSModules from 'react-css-modules';
import styles from './date-time-mode-switch.css';

@CSSModules(styles)
export default class DateTimeModeSwitch extends Component {
  static propTypes = {
    onSwitch: PropTypes.func.isRequired,
    showTimePicker: PropTypes.bool
  }

  render() {
    return (
      <ul className="list-unstyled">
        <li>
          <span styleName="picker-switch" 
                className="btn" 
                onClick={this.props.onSwitch}>
                <Glyphicon glyph={this.props.showTimePicker ? "calendar" : "time"} />
              </span>
        </li>
      </ul>
    );
  }
}
