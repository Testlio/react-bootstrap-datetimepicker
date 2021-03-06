import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import CSSModules from 'react-css-modules';

import TimePicker from "./components/timepicker.js";
import styles from './css/widget.css';

import picker from './composers/picker.js';
import sticky from './composers/sticky.js';

@CSSModules(styles, { allowMultiple: true })
class DateTimePicker extends Component {
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
    togglePicker: PropTypes.func,
    setSelectedHourByEvent: PropTypes.func,
    setSelectedMinuteByEvent: PropTypes.func
  }

  render() {
    return (
      <div 
        styleName="widget"
        className={classnames(this.props.widgetClasses)} 
        >
        <ul 
          styleName="widget-content"
          className="widget-content list-unstyled">
          <li>
            <TimePicker
              addHour={this.props.addHour}
              addMinute={this.props.addMinute}
              selectedDate={this.props.selectedDate}
              setSelectedHourByEvent={this.props.setSelectedHourByEvent}
              setSelectedMinuteByEvent={this.props.setSelectedMinuteByEvent}
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

export default sticky(picker(DateTimePicker));
