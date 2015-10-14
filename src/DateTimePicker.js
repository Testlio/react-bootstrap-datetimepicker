import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import CSSModules from 'react-css-modules';

import DatePicker from "./datepicker.js";
import TimePicker from "./timepicker.js";
import TimeSidePanel from './components/time-side-panel/time-side-panel.js'
import ModeSwitcher from './components/mode-switcher/mode-switcher.js'
import Constants from "./constants/Constants.js";
import styles from './css/widget.css';

@CSSModules(styles, { allowMultiple: true })
export default class DateTimePicker extends Component {
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
    mode: PropTypes.oneOf([
      Constants.MODE_DATE,
      Constants.MODE_DATETIME,
      Constants.MODE_TIME,
      Constants.MODE_DATETIME_SIDE
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
    setSelectedTime: PropTypes.func
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

  renderSwitchButton = () => {
    if (this.props.mode === Constants.MODE_DATETIME || this.props.mode === Constants.MODE_DATETIME_SIDE) {
      return null
    }
    return (
      <ModeSwitcher 
          onSwitch={this.props.togglePicker} 
          showTimePicker={this.props.showTimePicker} /> 
    )
  }

  renderTimeSidePanel = () => {
    if (this.props.mode !== Constants.MODE_DATETIME_SIDE) {
      return null;
    }

    return (
      <li 
        setSelectedTime={this.props.setSelectedTime}
        styleName="right-side">
        <TimeSidePanel />
      </li>
    );
  }

  render() {
    let styleNames = [ "widget" ];
    if (this.props.mode === Constants.MODE_DATETIME_SIDE) {
      styleNames.push('wide');
    }
    return (
      <div 
        styleName={styleNames.join(' ')}
        className={classnames(this.props.widgetClasses)} 
        style={this.props.widgetStyle}
        >
        <ul className="list-unstyled">
          {this.renderSwitchButton()}
          {this.renderDatePicker()}
          {this.renderTimeSidePanel()}
          {this.renderTimePicker()}
        </ul>
      </div>
    );
  }
}
