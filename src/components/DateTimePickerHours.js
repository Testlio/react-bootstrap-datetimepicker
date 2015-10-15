import { Component, PropTypes } from "react";
import Constants from "../constants/constants.js";
import ModeSwitcher from '../components/mode-switcher/mode-switcher.js'

export default class DateTimePickerHours extends Component {
  static propTypes = {
    setSelectedHourByEvent: PropTypes.func.isRequired,
    onSwitch: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired
  }

  renderSwitchButton = () => {
    return this.props.mode === Constants.MODE_TIME ?
      <ModeSwitcher onSwitch={this.props.onSwitch} /> : null;
  }

  render() {
    return (
      <div className="timepicker-hours" data-action="selectHour" style={{display: "block"}}>
        {this.renderSwitchButton()}
        <table className="table-condensed">
          <tbody>
            <tr>
              <td className="hour" onClick={this.props.setSelectedHourByEvent}>01</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>02</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>03</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>04</td>
            </tr>

            <tr>
              <td className="hour" onClick={this.props.setSelectedHourByEvent}>05</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>06</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>07</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>08</td>
            </tr>

            <tr>
              <td className="hour" onClick={this.props.setSelectedHourByEvent}>09</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>10</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>11</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>12</td>
            </tr>

            <tr>
              <td className="hour" onClick={this.props.setSelectedHourByEvent}>13</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>14</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>15</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>16</td>
            </tr>

            <tr>
              <td className="hour" onClick={this.props.setSelectedHourByEvent}>17</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>18</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>19</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>20</td>
            </tr>

            <tr>
              <td className="hour" onClick={this.props.setSelectedHourByEvent}>21</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>22</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>23</td>

              <td className="hour" onClick={this.props.setSelectedHourByEvent}>24</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
