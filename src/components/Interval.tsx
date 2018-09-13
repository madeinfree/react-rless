import React from 'react';
import PropTypes from 'prop-types';

type IntervalProps = {
  children(props: { timerID: NodeJS.Timer | number }): React.ReactNode;
  timeout?: number;
};

/**
 * Because we use forceUpdate, so we don't care about PureComponent just use Componen to instead it.
 */
class Interval extends React.Component<IntervalProps> {
  static displayName = 'Interval';
  static propTypes = {
    children: PropTypes.func.isRequired,
    timeout: PropTypes.number
  };
  timer: NodeJS.Timer | number;
  start = () => {
    this.forceUpdate();
  };
  componentDidMount() {
    this.timer = setInterval(this.start, this.props.timeout || 1000);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer as number);
    }
  }
  render() {
    return this.props.children({
      timerID: this.timer
    });
  }
}

export default Interval;
