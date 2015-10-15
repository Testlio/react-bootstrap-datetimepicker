import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import CSSModules from 'react-css-modules';

import TimePicker from "./components/timepicker.js";
import styles from './css/widget.css';

@CSSModules(styles, { allowMultiple: true })
export default class DateTimePicker extends Component {
  static propTypes = {
    showTimePicker: PropTypes.bool,
    viewDate: PropTypes.object.isRequired,
    selectedDate: PropTypes.object.isRequired,
    subtractHour: PropTypes.func.isRequired,
    addHour: PropTypes.func.isRequired,
    subtractMinute: PropTypes.func.isRequired,
    addMinute: PropTypes.func.isRequired,
    togglePeriod: PropTypes.func.isRequired,
    widgetClasses: PropTypes.object,
    widgetStyle: PropTypes.object,
    togglePicker: PropTypes.func,
    setSelectedHour: PropTypes.func,
    setSelectedMinute: PropTypes.func
  }

  render() {
    return (
      <div 
        styleName="widget"
        className={classnames(this.props.widgetClasses)} 
        style={this.props.widgetStyle}
        >
        <ul className="list-unstyled">
          <li>
            <TimePicker
              addHour={this.props.addHour}
              addMinute={this.props.addMinute}
              selectedDate={this.props.selectedDate}
              setSelectedHour={this.props.setSelectedHour}
              setSelectedMinute={this.props.setSelectedMinute}
              subtractHour={this.props.subtractHour}
              subtractMinute={this.props.subtractMinute}
              togglePeriod={this.props.togglePeriod}
              viewDate={this.props.viewDate}
            />
          </li>
        </ul>
      </div>
    );
  }
}
