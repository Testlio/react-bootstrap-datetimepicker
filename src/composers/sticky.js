import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { assign } from 'lodash';

export default function sticky(Component) {
  return class StickyWrapper extends Component {
    static propTypes = {
      target: PropTypes.node.isRequired,
      datepickerSelector: PropTypes.string
    }

    static defaultProps = {
      datepickerSelector: '.bootstrap-datetimepicker-widget'
    }

    state = {
      style: {
        background: 'black',
        position: 'absolute'
      }
    }

    getScrollTop() {
      return window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }

    getOffset(node) {
      let gBCR = ReactDOM.findDOMNode(node).getBoundingClientRect();
      return {
        left: gBCR.left + window.scrollX,
        top: gBCR.top + window.scrollY
      }
    }

    componentDidMount() {
      const offset = this.getOffset(this.props.target);
      const width  = ReactDOM.findDOMNode(this).querySelector(this.props.datepickerSelector).clientWidth;
      this.setState({
        style: assign({}, this.state.style, {
          right: offset.left - width / 2,
          top: 30
        })
      });
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
