import React, { Component, PropTypes } from "react";
import moment from "moment";
import classnames from "classnames";
import styles from '../css/date-time-picker-days.css';
import CSSModules from 'react-css-modules';
import NextPrevChanger from './next-prev-changer/next-prev-changer.js'
 
@CSSModules(styles, { allowMultiple: true })
export default class DateTimePickerDays extends Component {
  static propTypes = {
    subtractMonth: PropTypes.func.isRequired,
    addMonth: PropTypes.func.isRequired,
    viewDate: PropTypes.object.isRequired,
    selectedDate: PropTypes.object.isRequired,
    showToday: PropTypes.bool,
    daysOfWeekDisabled: PropTypes.array,
    setSelectedDate: PropTypes.func.isRequired,
    showMonths: PropTypes.func.isRequired,
    minDate: PropTypes.object,
    maxDate: PropTypes.object
  }

  static defaultProps = {
    showToday: true
  }

  renderDays = () => {
    var cells, days, html, month, nextMonth, prevMonth, minDate, maxDate, row, year;
    year = this.props.viewDate.year();
    month = this.props.viewDate.month();
    prevMonth = this.props.viewDate.clone().subtract(1, "months");
    days = prevMonth.daysInMonth();
    prevMonth.date(days).startOf("week");
    nextMonth = moment(prevMonth).clone().add(42, "d");
    minDate = this.props.minDate ? this.props.minDate.clone().subtract(1, "days") : this.props.minDate;
    maxDate = this.props.maxDate ? this.props.maxDate.clone() : this.props.maxDate;
    html = [];
    cells = [];
    while (prevMonth.isBefore(nextMonth)) {
      let classes = {
        day: true
      };
      if (prevMonth.year() < year || (prevMonth.year() === year && prevMonth.month() < month)) {
        classes.old = true;
      } else if (prevMonth.year() > year || (prevMonth.year() === year && prevMonth.month() > month)) {
        classes.new = true;
      }
      if (prevMonth.isSame(moment({
        y: this.props.selectedDate.year(),
        M: this.props.selectedDate.month(),
        d: this.props.selectedDate.date()
      }))) {
        classes.active = true;
      }
      if (this.props.showToday) {
        if (prevMonth.isSame(moment(), "day")) {
          classes.today = true;
        }
      }
      if ((minDate && prevMonth.isBefore(minDate)) || (maxDate && prevMonth.isAfter(maxDate))) {
        classes.disabled = true;
      }
      if (this.props.daysOfWeekDisabled.length > 0) classes.disabled = this.props.daysOfWeekDisabled.indexOf(prevMonth.day()) !== -1;
      cells.push(
        <td key={prevMonth.month() + "-" + prevMonth.date()} 
            className={classnames(classes)} 
            styleName={classnames(classes)}
            onClick={this.props.setSelectedDate}>{prevMonth.date()}</td>
      );
      if (prevMonth.weekday() === moment().endOf("week").weekday()) {
        row = <tr key={prevMonth.month() + "-" + prevMonth.date()}>{cells}</tr>;
        html.push(row);
        cells = [];
      }
      prevMonth.add(1, "d");
    }
    return html;
  }

  render() {
    return (
      <div styleName="base">
        <table className="table-condensed">
          <thead>
            <NextPrevChanger
                onClickCurrent={this.props.showMonths}
                onClickNext={this.props.addMonth}
                onClickPrev={this.props.subtractMonth}>
              {moment.months()[this.props.viewDate.month()]} {this.props.viewDate.year()}
            </NextPrevChanger>
            <tr styleName="day-of-week">
              <th>Su</th>
              <th>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
            </tr>
          </thead>

          <tbody>
            {this.renderDays()}
          </tbody>
        </table>
      </div>
    );
  }
}
