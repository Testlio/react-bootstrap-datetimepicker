import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import CSSModules from 'react-css-modules';

import DatePicker from "./components/datepicker.js";
import TimePicker from "./components/timepicker.js";
import TimeSidePanel from './components/time-side-panel/time-side-panel.js'
import styles from './css/widget.css';

@CSSModules(styles, { allowMultiple: true })
export default class DateTimePickerSide extends Component {
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
    setSelectedDate: PropTypes.func.isRequired,
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
    widgetStyle: PropTypes.object,
    togglePicker: PropTypes.func,
    setSelectedHour: PropTypes.func,
    setSelectedMinute: PropTypes.func,
    setSelectedTime: PropTypes.func.isRequired,
    timesShown: PropTypes.array.isRequired
  }

  renderDatePicker = () => {
    if (!this.props.showDatePicker) {
      return null;
    }

    return (
      <li className="pull-left">
        <DatePicker
          addDecade={this.props.addDecade}
          addMonth={this.props.addMonth}
          addYear={this.props.addYear}
          daysOfWeekDisabled={this.props.daysOfWeekDisabled}
          maxDate={this.props.maxDate}
          minDate={this.props.minDate}
          selectedDate={this.props.selectedDate}
          setSelectedDate={this.props.setSelectedDate}
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
          mode={this.props.mode}
          selectedDate={this.props.selectedDate}
          setSelectedHour={this.props.setSelectedHour}
          setSelectedMinute={this.props.setSelectedMinute}
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
      <div styleName="widget wide" className={classnames(this.props.widgetClasses)} style={this.props.widgetStyle}>
        <ul className="list-unstyled">
          {this.renderDatePicker()}
          <li styleName="right-side">
            <TimeSidePanel 
              timesShown={this.props.timesShown}
              setSelectedTime={this.props.setSelectedTime}
            />
          </li>
          {this.renderTimePicker()}
        </ul>
      </div>
    );
  }
}