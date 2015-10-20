import React, { Component, PropTypes } from 'react';
import { assign } from 'lodash';

export default function sticky(Component) {
  return class StickyWrapper extends Component {
    static propTypes = {
      target: PropTypes.node.isRequired
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
      let gBCR = React.findDOMNode(node).getBoundingClientRect();
      return {
        left: gBCR.left + window.scrollX,
        top: gBCR.top + window.scrollY
      }
    }

    componentDidMount() {
      const offset = this.getOffset(this.props.target);
      const width  = React.findDOMNode(this.refs.karuperse).querySelector('.dropdown-menu').clientWidth;
      this.setState({
        style: assign(this.state.style, {
          right: offset.left - width / 2,
          top: 30
        })
      });
    }

    render() {
      return (
        <div style={this.state.style}>
          <Component {...this.props} ref="karuperse"/>
        </div>
      );
    }
  }
}
