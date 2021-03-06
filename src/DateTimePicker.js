import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import CSSModules from 'react-css-modules';

import DatePicker from "./components/datepicker.js";
import TimePicker from "./components/timepicker.js";
import ModeSwitcher from './components/mode-switcher/mode-switcher.js'
import Constants from "./constants/constants.js";
import styles from './css/widget.css';

import sticky from './composers/sticky.js';
import picker from './composers/picker.js';

@CSSModules(styles, { allowMultiple: true })
class DateTimePicker extends Component {
  static propTypes = {
    showDatePicker: PropTypes.bool,
    showTimePicker: PropTypes.bool,
    subtractMonth: PropTypes.func.isRequired,
    addMonth: PropTypes.func.isRequired,
    viewDate: PropTypes.object.isRequired,
    selectedDate: PropTypes.object.isRequired,
    showToday: PropTypes.bool,
    viewMode: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    daysOfWeekDisabled: PropTypes.array,
    setSelectedDateByEvent: PropTypes.func.isRequired,
    subtractYear: PropTypes.func.isRequired,
    addYear: PropTypes.func.isRequired,
    setViewMonth: PropTypes.func.isRequired,
    setViewYear: PropTypes.func.isRequired,
    subtractHour: PropTypes.func.isRequired,
    addHour: PropTypes.func.isRequired,
    subtractMinute: PropTypes.func.isRequired,
    addMinute: PropTypes.func.isRequired,
    addDecade: PropTypes.func.isRequired,
    subtractDecade: PropTypes.func.isRequired,
    togglePeriod: PropTypes.func.isRequired,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    widgetClasses: PropTypes.object,
    togglePicker: PropTypes.func,
    setSelectedHourByEvent: PropTypes.func,
    setSelectedMinuteByEvent: PropTypes.func
  }

  renderDatePicker = () => {
    if (!this.props.showDatePicker) {
      return null;
    }

    return (
      <li>
        <DatePicker
          addDecade={this.props.addDecade}
          addMonth={this.props.addMonth}
          addYear={this.props.addYear}
          daysOfWeekDisabled={this.props.daysOfWeekDisabled}
          maxDate={this.props.maxDate}
          minDate={this.props.minDate}
          selectedDate={this.props.selectedDate}
          setSelectedDateByEvent={this.props.setSelectedDateByEvent}
          setViewMonth={this.props.setViewMonth}
          setViewYear={this.props.setViewYear}
          showToday={this.props.showToday}
          subtractDecade={this.props.subtractDecade}
          subtractMonth={this.props.subtractMonth}
          subtractYear={this.props.subtractYear}
          viewDate={this.props.viewDate}
          viewMode={this.props.viewMode}
        />
      </li>
    );
  }

  renderTimePicker = () => {
    if (!this.props.showTimePicker) {
      return null;
    }

    return (
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
    );
  }

  render() {
    return (
      <div 
        styleName="widget datepicker"
        className={classnames(this.props.widgetClasses)} 
        >
        <ul 
          styleName="widget-content"
          className="widget-content list-unstyled">
          <ModeSwitcher onSwitch={this.props.togglePicker} showTimePicker={this.props.showTimePicker} /> 
          {this.renderDatePicker()}
          {this.renderTimePicker()}
        </ul>
      </div>
    );
  }
}

export default sticky(picker(DateTimePicker));
