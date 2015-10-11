import React, { Component, PropTypes } from "react";
import { Glyphicon } from "react-bootstrap";
import CSSModules from 'react-css-modules';
import styles from './mode-switcher.css';

@CSSModules(styles)
export default class ModeSwitcher extends Component {
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
