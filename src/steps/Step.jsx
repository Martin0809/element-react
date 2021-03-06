import React from 'react';
import { Component, PropTypes } from '../../libs';

export default class Step extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, icon, description, status, direction, style, lineStyle, stepNumber } = this.props;
    const directionClass = `is-${direction}`;
    const statusClass = `is-${status}`;
    const iconNode = icon ? <i className={`el-icon-${icon}`}></i> : <div>{ stepNumber }</div>

    return (
      <div
        style={style}
        className={this.classNames({
          [directionClass]: true,
          'el-step': true,
        })}>
        <div
          className={this.classNames({
            [statusClass]: true,
            'el-step__head': true,
            'is-text': !icon,
          })}>
          <div
            className={this.classNames({
              [directionClass]: true,
              'el-step__line': true,
              'is-icon': icon,
            })}>
            <i className="el-step__line-inner" style={lineStyle}></i>
          </div>
          <span className="el-step__icon">
            {
              (status !== 'success' && status !== 'error') ? iconNode :
                <i
                  className={'el-icon-' + (status === 'success' ? 'check' : 'close')}>
                </i>
            }
          </span>
        </div>
        <div
          className="el-step__main"
        >
          <div
            ref="title"
            className={this.classNames({
              [statusClass]: true,
              'el-step__title': true,
            })}>
            {title}
          </div>
          <div
            className={this.classNames({
              [statusClass]: true,
              'el-step__description': true,
            })}>
            { description }
          </div>
        </div>
      </div>
    )
  }
}

Step.propTypes = {
  title: PropTypes.node,
  icon: PropTypes.node,
  description: PropTypes.node,
  status: PropTypes.string,
  direction: PropTypes.string,
  style: PropTypes.object,
  lineStyle: PropTypes.object,
  stepNumber: PropTypes.number,
}

Step.defaultProps = {
  status: 'wait',
}
