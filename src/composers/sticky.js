import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import assign from 'object-assign';

export default function sticky(Component) {
  return class StickyWrapper extends Component {
    static propTypes = {
      target: PropTypes.object.isRequired,
      datepickerSelector: PropTypes.string,
      offset: PropTypes.object
    }

    static defaultProps = {
      datepickerSelector: '.bootstrap-datetimepicker-widget',
      offset: { top: 30 }
    }

    getPickerWidth(node) {
      return ReactDOM.findDOMNode(this)
                     .querySelector(this.props.datepickerSelector)
                     .clientWidth;
    }

    getWindowWidth() {
      return document.getElementsByTagName('body')[0].clientWidth;
    }

    // Position the element relative to its target
    componentDidMount() {
      let style = {
          position: 'absolute',
          top: this.props.offset.top || 0
      };
      const targetNode       = ReactDOM.findDOMNode(this.props.target);
      const width            = this.getPickerWidth();
      const relativeNodeLeft = targetNode.offsetLeft + targetNode.clientWidth;
      const windowWidth      = this.getWindowWidth();
      let left               = relativeNodeLeft + width / 2 + (this.props.offset.left || 0);
      // Check if the right side is out of bounds
      if (targetNode.getBoundingClientRect().right + width > windowWidth) {
        style.right = 0
      } else {
        style.left = left;
      }
      this.setState({ style });
    }

    render() {
      return (
        <div style={this.state.style}>
          <Component {...this.props} />
        </div>
      );
    }
  }
}
