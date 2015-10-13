import React, { PropTypes, Component } from "react";
import styles from './next-prev-changer.css';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class DateTimePicker extends Component {
  static propTypes = {
    onClickNext: PropTypes.func.isRequired,
    onClickPrev: PropTypes.func.isRequired,
    onClickCurrent: PropTypes.func
  }

  render() {
    return (
      <tr>
        <th 
          styleName="prev" 
          onClick={this.props.onClickPrev}>‹</th>
        <th 
          styleName="switch" 
          colSpan="5" 
          onClick={this.props.onClickCurrent}>{ this.props.children }</th>
        <th 
          styleName="next" 
          onClick={this.props.onClickNext}>›</th>
      </tr>
    );
  }
}
