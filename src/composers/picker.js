import React, { Component, PropTypes } from "react";
import moment from "moment";

import Constants from "../constants/constants.js";

export default function picker(Component) {
  return class Picker extends Component {

    static defaultProps = {
      dateTime: moment().format("x"),
      format: "x",
      showToday: true,
      viewMode: "days",
      daysOfWeekDisabled: [],
      mode: Constants.MODE_DATETIME,
      onClose: () => { }
    }

    static propTypes = {
      dateTime: PropTypes.string,
      onChange: PropTypes.func,
      format: PropTypes.string,
      inputFormat: PropTypes.string,
      defaultText: PropTypes.string,
      timesShown: PropTypes.array,
      mode: PropTypes.oneOf([
        Constants.MODE_DATE,
        Constants.MODE_DATETIME,
        Constants.MODE_TIME,
        Constants.MODE_DATETIME_SIDE
      ]),
      minDate: PropTypes.object,
      maxDate: PropTypes.object,
      direction: PropTypes.string,
      showToday: PropTypes.bool,
      viewMode: PropTypes.string,
      daysOfWeekDisabled: PropTypes.arrayOf(PropTypes.integer),
      onClose: PropTypes.func
    }

    state = {
      showDatePicker: this.props.mode !== Constants.MODE_TIME,
      showDateTimePicker: this.props.mode !== Constants.MODE_DATETIME,
      showTimePicker: this.props.mode === Constants.MODE_TIME,
      viewDate: moment(this.props.dateTime, this.props.format, true).startOf("month"),
      selectedDate: moment(this.props.dateTime, this.props.format, true),
      classes: {
        "bootstrap-datetimepicker-widget": true,
        "dropdown-menu": true,
        "bottom": true,
        "pull-right": true
      }
    }

    componentWillReceiveProps = (nextProps) => {
      let state = {};
      if (nextProps.inputFormat !== this.props.inputFormat) {
        state.inputFormat = nextProps.inputFormat;
      }

      if (nextProps.dateTime !== this.props.dateTime && moment(nextProps.dateTime, nextProps.format, true).isValid()) {
        state.viewDate = moment(nextProps.dateTime, nextProps.format, true).startOf("month");
        state.selectedDate = moment(nextProps.dateTime, nextProps.format, true);
      }
      return this.setState(state);
    }

    componentWillMount() {
      return this.setState({
        widgetStyle: {
          display: "block",
          position: "absolute",
          top: 40,
          left: "auto",
          right: 40
        }
      });
    }

    setSelectedDateByEvent = (e) => {
      const { target } = e;
      let month;
      let date = +e.target.innerHTML;
      let selectedDate = this.state.selectedDate;
      if (target.className.indexOf("new") >= 0) month = this.state.viewDate.month() + 1;
      else if (target.className.indexOf("old") >= 0) month = this.state.viewDate.month() - 1;
      else month = this.state.viewDate.month();
      this.setSelectedDate(
        this.state.viewDate.clone()
        .month(month)
        .date(date)
        .hour(selectedDate.hours())
        .minute(selectedDate.minutes())
      );
    }

    onChange = (event) => {
      const value = event.target == null ? event : event.target.value;
      const state = this.state;
      if (moment(value, state.inputFormat, true).isValid()) {
        this.setState({
          selectedDate: moment(value, state.inputFormat, true),
          viewDate: moment(value, state.inputFormat, true).startOf("month")
        });
      }
    }

    getValue = () => {
      return moment(this.state.inputValue, this.props.inputFormat, true).format(this.props.format);
    }

    setSelectedDateByEvent = (e) => {
      const { target } = e;
      let month;
      let date = +e.target.innerHTML;
      let selectedDate = this.state.selectedDate;
      if (target.className.indexOf("new") >= 0) month = this.state.viewDate.month() + 1;
      else if (target.className.indexOf("old") >= 0) month = this.state.viewDate.month() - 1;
      else month = this.state.viewDate.month();
      this.setSelectedDate(
        this.state.viewDate.clone()
        .month(month)
        .date(date)
        .hour(selectedDate.hours())
        .minute(selectedDate.minutes())
      );
    }

    setSelectedDate = (selectedDate) => {
      return this.setState({
        selectedDate: selectedDate
      }, () => {
        let formated = this.state.selectedDate.format(this.props.format);
        this.props.onChange(formated, this.state.selectedDate);
      });
    }

    setViewMonth = (month) => {
      return this.setState({
        viewDate: this.state.viewDate.clone().month(month)
      });
    }

    setViewYear = (year) => {
      return this.setState({
        viewDate: this.state.viewDate.clone().year(year)
      });
    }

    subtractMinute = () => {
      this.setSelectedDate(this.state.selectedDate.clone().subtract(1, "minutes"));
    }

    subtractHour = () => {
      this.setSelectedDate(this.state.selectedDate.clone().subtract(1, "hours"));
    }

    addMinute = () => {
      this.setSelectedDate(this.state.selectedDate.clone().add(1, "minutes"));
    }

    addHour = () => {
      this.setSelectedDate(this.state.selectedDate.clone().add(1, "hours"));
    }

    addMonth = () => {
      return this.setState({
        viewDate: this.state.viewDate.add(1, "months")
      });
    }

    addYear = () => {
      return this.setState({
        viewDate: this.state.viewDate.add(1, "years")
      });
    }

    addDecade = () => {
      return this.setState({
        viewDate: this.state.viewDate.add(10, "years")
      });
    }

    subtractMonth = () => {
      return this.setState({
        viewDate: this.state.viewDate.subtract(1, "months")
      });
    }

    subtractYear = () => {
      return this.setState({
        viewDate: this.state.viewDate.subtract(1, "years")
      });
    }

    subtractDecade = () => {
      return this.setState({
        viewDate: this.state.viewDate.subtract(10, "years")
      });
    }

    togglePeriod = () => {
      if (this.state.selectedDate.hour() > 12) {
        return this.onChange(this.state.selectedDate
                             .clone().subtract(12, "hours")
                             .format(this.state.inputFormat));
      } else {
        return this.onChange(this.state.selectedDate
                             .clone().add(12, "hours")
                             .format(this.state.inputFormat));
      }
    }

    togglePicker = () => {
      return this.setState({
        showDatePicker: !this.state.showDatePicker,
        showTimePicker: !this.state.showTimePicker
      });
    }

    closePicker = () => {
      let style     = this.state.widgetStyle;
      style.left    = -9999;
      style.display = "none";
      this.setState({
        showPicker: false,
        widgetStyle: style
      }, this.props.onClose);
    }

    renderOverlay = () => {
      const styles = {
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: "999"
      };
      return <div style={styles} onClick={this.closePicker} />;
    }

    render() {
      return (
        <div>
          { this.renderOverlay() }
          <Component 
            {...this.props} 
            viewDate={this.state.viewDate}
            addDecade={this.addDecade}
            addHour={this.addHour}
            addMinute={this.addMinute}
            addMonth={this.addMonth}
            addYear={this.addYear}
            selectedDate={this.state.selectedDate}
            setSelectedDateByEvent={this.setSelectedDateByEvent}
            setSelectedHourByEvent={this.setSelectedHourByEvent}
            setSelectedDate={this.setSelectedDate}
            setSelectedMinuteByEvent={this.setSelectedMinuteByEvent}
            setViewMonth={this.setViewMonth}
            setViewYear={this.setViewYear}
            showDatePicker={this.state.showDatePicker}
            showDateTimePicker={this.state.showDateTimePicker}
            showTimePicker={this.state.showTimePicker}
            subtractDecade={this.subtractDecade}
            subtractHour={this.subtractHour}
            subtractMinute={this.subtractMinute}
            subtractMonth={this.subtractMonth}
            subtractYear={this.subtractYear}
            togglePeriod={this.togglePeriod}
            togglePicker={this.togglePicker}
            widgetClasses={this.state.classes}
            widgetStyle={this.state.widgetStyle}
          />
        </div>
      );
    }
  }
}
