import React, { Component } from "react";
import DateTimeField from "datetimepicker";
import moment from "moment";

export default class Basic extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>React Bootstrap DateTimePicker</h1>
            This project is a port of 
            <a href="https://github.com/Eonasdan/bootstrap-datetimepicker">
              https://github.com/Eonasdan/bootstrap-datetimepicker
            </a> for React.js
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            Example with default Text
            <DateTimeField
              defaultText="Please select a date"
            />
            <pre> {'<DateTimeField defaultText="Please select a date" />'} </pre>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            Default Basic Example
            <DateTimeField />
            <pre> {'<DateTimeField />'} </pre>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            Example with default Text
            <DateTimeField defaultText="Please select a date" />
            <pre> {'<DateTimeField defaultText="Please select a date" />'} </pre>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            ViewMode set to years view with custom inputFormat
            <DateTimeField viewMode="years" inputFormat="DD-MM-YYYY" />
            <pre> {'<DateTimeField viewMode="years" inputFormat="DD-MM-YYYY" />'} </pre>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            daysOfWeekDisabled
            <DateTimeField
              daysOfWeekDisabled={[0, 1, 2]}
            />
            <pre> {'<DateTimeField daysOfWeekDisabled={[0,1,2]} />'} </pre>

          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            minDate and maxDate
            <DateTimeField
              maxDate={moment().add(1, "days")}
              minDate={moment().subtract(1, "days")}
            />
            <pre> {'<DateTimeField daysOfWeekDisabled={[0,1,2]} />'} </pre>

          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            just time picker
            <DateTimeField
              mode="time"
            />
            <pre> {'<DateTimeField mode="time" />'} </pre>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            just date picker
            <DateTimeField
              mode="date"
            />
            <pre> {'<DateTimeField mode="date" />'} </pre>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            Side by side datetime hours picker
            <DateTimeField
              mode="datetime-side"
              timeShown={[1,2,3,4,5,6,7,8,9,'10:20',11,'12:5',13,14,15,16,17,18,19]}
            />
            <pre> 
              {'<DateTimeField mode="datetime-side" timeShown={[1,5,6,7,8,9,"10:20",11,"12:5",1317,18,19]} />'} 
            </pre>
          </div>
        </div>
      </div>
      );
   }
}
