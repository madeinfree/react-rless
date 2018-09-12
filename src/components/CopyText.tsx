import React from 'react';
import PropTypes from 'prop-types';

type CopyTextProps = {
  text: string;
  callback?(err: string, text: string): void;
  children(macro: {
    onClickToCopy(): void;
    onBackToUncopy(): void;
    isCopy: boolean;
  }): React.ReactNode;
};
type CopyTextState = {
  isCopy: boolean;
};

class CopyText extends React.PureComponent<CopyTextProps, CopyTextState> {
  static displayName = 'CopyText';
  static propTypes = {
    text: PropTypes.string.isRequired,
    callback: PropTypes.func,
    children: PropTypes.func.isRequired
  };
  state = {
    isCopy: false
  };
  clickToCopy = () => {
    console.log('run');
    try {
      const el = document.createElement('textarea');
      el.value = this.props.text;
      document.body.appendChild(el);
      el.select();
      const done = document.execCommand('copy');
      document.body.removeChild(el);
      if (done) {
        this.setState(
          _ => ({
            isCopy: true
          }),
          () => {
            if (this.props.callback) this.props.callback(null, this.props.text);
          }
        );
      } else {
        console.error(
          CopyText.displayName +
            ': Your broswer must be not support document.execCommand `copy` operator.'
        );
      }
    } catch (err) {
      if (this.props.callback) this.props.callback(err, null);
    }
  };
  backToUncopy = () => {
    this.setState(_ => ({
      isCopy: false
    }));
  };
  render() {
    return this.props.children({
      onClickToCopy: this.clickToCopy,
      onBackToUncopy: this.backToUncopy,
      isCopy: this.state.isCopy
    }) as React.ReactNode;
  }
}

export default CopyText;
