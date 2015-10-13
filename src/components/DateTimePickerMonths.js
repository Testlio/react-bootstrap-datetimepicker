import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import moment from "moment";

import NextPrevChanger from "./next-prev-changer/next-prev-changer.js"

export default class DateTimePickerMonths extends Component {
  static propTypes = {
    subtractYear: PropTypes.func.isRequired,
    addYear: PropTypes.func.isRequired,
    viewDate: PropTypes.object.isRequired,
    selectedDate: PropTypes.object.isRequired,
    showYears: PropTypes.func.isRequired,
    setViewMonth: PropTypes.func.isRequired
  }

  renderMonths = () => {
    var classes, i, month, months, monthsShort;
    month = this.props.selectedDate.month();
    monthsShort = moment.monthsShort();
    i = 0;
    months = [];
    while (i < 12) {
      classes = {
        month: true,
        "active": i === month && this.props.viewDate.year() === this.props.selectedDate.year()
      };
      months.push(<span key={i} className={classnames(classes)} onClick={this.props.setViewMonth}>{monthsShort[i]}</span>);
      i++;
    }
    return months;
  }

  render() {
    return (
    <div className="datepicker-months" style={{display: "block"}}>
          <table className="table-condensed">
            <thead>
              <NextPrevChanger
                onClickNext={this.props.addYear}
                onClickPrev={this.props.subtractYear}
                onClickCurrent={this.props.showYears}>
                {this.props.viewDate.year()}
              </NextPrevChanger>
            </thead>

            <tbody>
              <tr>
                <td colSpan="7">{this.renderMonths()}</td>
              </tr>
            </tbody>
          </table>
        </div>
    );
  }
}
