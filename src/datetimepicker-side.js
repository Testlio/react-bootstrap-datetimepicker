import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import CSSModules from 'react-css-modules';

import DatePicker from "./components/datepicker.js";
import TimeSidePanel from './components/time-side-panel/time-side-panel.js';
import styles from './css/widget.css';

import picker from './composers/picker.js';
import sticky from './composers/sticky.js';

@CSSModules(styles, { allowMultiple: true })
class DateTimePickerSide extends Component {
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
    setSelectedDate: PropTypes.func.isRequired,
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

  render() {
    return (
      <div styleName="widget wide" className={classnames(this.props.widgetClasses)} >
        <ul className="list-unstyled">
          {this.renderDatePicker()}
          <li styleName="right-side">
            <TimeSidePanel 
              selectedDate={this.props.selectedDate}
              timesShown={this.props.timesShown}
              setSelectedDate={this.props.setSelectedDate}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default sticky(picker(DateTimePickerSide));
