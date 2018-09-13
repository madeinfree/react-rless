import React from 'react';
import PropTypes from 'prop-types';

type IntervalProps = {
  children(props: { timerID: NodeJS.Timer | number; start(): void; stop(): void }): React.ReactNode;
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
  update = () => {
    this.forceUpdate();
  };
  start = () => {
    if (!this.timer) {
      this.createTimer();
    } else {
      console.error(
        'The timer is exists, you possesses one timer in the same time, you should call stop() before create new timer.'
      );
    }
  };
  stop = () => {
    if (this.timer) {
      clearInterval(this.timer as number);
      this.timer = null;
    }
  };
  createTimer = () => {
    this.timer = setInterval(this.update, this.props.timeout || 1000);
  };
  componentDidMount() {
    this.createTimer();
  }
  componentWillUnmount() {
    this.stop();
  }
  render() {
    return this.props.children({
      timerID: this.timer,
      start: this.start,
      stop: this.stop
    });
  }
}

export default Interval;
