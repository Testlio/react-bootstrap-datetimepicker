import React, { Component, PropTypes } from "react";
import moment from "moment";
import { Glyphicon } from "react-bootstrap";

import DateTimePicker from "./datetimepicker.js";
import DateTimePickerSide from './datetimepicker-side.js';
import DatePicker from './datepicker.js';
import TimePicker from './timepicker.js';

import Constants from "./constants/constants.js";

class DateTimeField extends Component {
  static defaultProps = {
    dateTime: moment().format("x"),
    format: "x",
    showToday: true,
    viewMode: "days",
    daysOfWeekDisabled: [],
    mode: Constants.MODE_DATETIME,
    onClose: () => { },
    onChange: () => { }
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
    daysOfWeekDisabled: PropTypes.arrayOf(PropTypes.integer)
  }

  resolvePropsInputFormat = () => {
    if (this.props.inputFormat) { return this.props.inputFormat; }
    switch (this.props.mode) {
      case Constants.MODE_TIME:
        return "h:mm A";
      case Constants.MODE_DATE:
        return "MM/DD/YY";
      default:
        return "MM/DD/YY h:mm A";
    }
  }

  state = {
    buttonIcon: this.props.mode === Constants.MODE_TIME ? "time" : "calendar",
    inputValue: this.props.defaultText || moment(this.props.dateTime, this.props.format, true).format(this.resolvePropsInputFormat())
  }

  onClick = () => {
    this.setState({
      showPicker: !this.state.showPicker
    });
  }

  handleClose = () => {
    this.setState({
      showPicker: false
    });
  }

  getPickerComponent() {
    switch (this.props.mode) {
      case Constants.MODE_DATETIME_SIDE:
        return DateTimePickerSide;
      case Constants.MODE_DATE:
        return DateTimePicker;
      case Constants.MODE_TIME:
        return TimePicker;
      default:
        return DatePicker;
    }
  }

  renderDateTimePicker() {
    if (!this.state.showPicker) {
      return null;
    }

    const component = this.getPickerComponent();
    return React.createElement(component, {
      daysOfWeekDisabled: this.props.daysOfWeekDisabled,
      maxDate: this.props.maxDate,
      minDate: this.props.minDate,
      mode: this.props.mode,
      timesShown: this.props.timesShown,
      viewMode: this.props.viewMode,
      target: this.refs.dtpbutton,
      onChange: this.changeEl,
      onClose: this.handleClose
    });
  }

  changeEl = (timestamp, selectedDate) => {
    this.setState({
      inputValue: selectedDate.format(this.resolvePropsInputFormat())
    });
  }

  render() {
    return (
      <div>
        <div className="input-group date" ref="datetimepicker">
          <input 
            type="text" 
            className="form-control" 
            onChange={this.props.onChange}
            value={this.state.inputValue} />
          <span 
            className="input-group-addon" 
            onClick={this.onClick} 
            ref="dtpbutton">
            <Glyphicon glyph={this.state.buttonIcon} /></span>
        </div>
        { this.renderDateTimePicker() }
      </div>
    );
  }
}

export default DateTimeField;
export {
  DateTimePicker,
  DateTimePickerSide,
  DatePicker,
  TimePicker 
}
