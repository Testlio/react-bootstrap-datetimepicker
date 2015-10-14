import React, { Component, PropTypes } from "react";
import { Glyphicon } from "react-bootstrap";
import classnames from "classnames";
import CSSModules from 'react-css-modules';

import DatePicker from "./components/datepicker/datepicker.js";
import Constants from "./constants/Constants.js";
import styles from './css/date-time-picker.css';
 
@CSSModules(styles, { allowMultiple: true })
export default class DatePicker extends Component {
  static propTypes = {
    subtractMonth: PropTypes.func.isRequired,
    viewDate: PropTypes.object.isRequired,
    viewMode: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    subtractYear: PropTypes.func.isRequired,
    subtractDecade: PropTypes.func.isRequired,
    widgetClasses: PropTypes.object,
    widgetStyle: PropTypes.object,
    showToday: PropTypes.bool,
    setViewYear: PropTypes.func.isRequired,
    setViewMonth: PropTypes.func.isRequired,
    setSelectedDate: PropTypes.func.isRequired,
    selectedDate: PropTypes.object.isRequired,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    daysOfWeekDisabled: PropTypes.array,
    addMonth: PropTypes.func.isRequired,
    addDecade: PropTypes.func.isRequired,
    addYear: PropTypes.func.isRequired
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
        </ul>
      </div>
    );
  }
}
