import React, { Component, PropTypes } from "react";
import { Glyphicon } from "react-bootstrap";
import Constants from "../constants/constants.js";
import ModeSwitcher from './mode-switcher/mode-switcher.js'

export default class DateTimePickerMinutes extends Component {
  static propTypes = {
    setSelectedMinuteByEvent: PropTypes.func.isRequired,
    onSwitch: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired
  }

  renderSwitchButton = () => {
    return this.props.mode === Constants.MODE_TIME ?
      <ModeSwitcher onSwitch={this.props.onSwitch} /> : null;
  }

  render() {
    return (
      <div className="timepicker-minutes" data-action="selectMinute" style={{display: "block"}}>
        {this.renderSwitchButton()}
        <table className="table-condensed">
          <tbody>
            <tr>
              <td className="minute" onClick={this.props.setSelectedMinuteByEvent}>00</td>

              <td className="minute" onClick={this.props.setSelectedMinuteByEvent}>05</td>

              <td className="minute" onClick={this.props.setSelectedMinuteByEvent}>10</td>

              <td className="minute" onClick={this.props.setSelectedMinuteByEvent}>15</td>
            </tr>

            <tr>
              <td className="minute" onClick={this.props.setSelectedMinuteByEvent}>20</td>

              <td className="minute" onClick={this.props.setSelectedMinuteByEvent}>25</td>

              <td className="minute" onClick={this.props.setSelectedMinuteByEvent}>30</td>

              <td className="minute" onClick={this.props.setSelectedMinuteByEvent}>35</td>
            </tr>

            <tr>
              <td className="minute" onClick={this.props.setSelectedMinuteByEvent}>40</td>

              <td className="minute" onClick={this.props.setSelectedMinuteByEvent}>45</td>

              <td className="minute" onClick={this.props.setSelectedMinuteByEvent}>50</td>

              <td className="minute" onClick={this.props.setSelectedMinuteByEvent}>55</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
