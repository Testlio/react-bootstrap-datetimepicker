import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import CSSModules from 'react-css-modules';

import DateTimePickerDays from "./components/DateTimePickerDays";
import DateTimePickerMonths from "./components/DateTimePickerMonths";
import DateTimePickerYears from "./components/DateTimePickerYears";
import DatesPicker from './components/datepicker.js'

import styles from './css/widget.css';

@CSSModules(styles, { allowMultiple: true })
export default class DatePicker extends Component {
  static propTypes = {
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
    addDecade: PropTypes.func.isRequired,
    subtractDecade: PropTypes.func.isRequired,
    minDate: PropTypes.object,
    maxDate: PropTypes.object
  }

  render() {
    return (
      <div styleName="widget" className={classnames(this.props.widgetClasses)} style={this.props.widgetStyle}>
        <ul className="list-unstyled">
          <li>
            <DatesPicker
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
        </ul>
      </div>
    );
  }
}
