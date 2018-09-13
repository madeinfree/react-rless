import React from 'react';
import PropTypes from 'prop-types';

type ScrollToMacroProps = {
  windowScroll?: boolean;
  scrollById?: string;
  children(macro: { scrollToElement(target: string): void }): React.ReactNode;
};

class ScrollTo extends React.PureComponent<ScrollToMacroProps> {
  requestFrameID: number;
  static displayName = 'ScrollTo';
  static propTypes = {
    windowScroll: PropTypes.bool,
    scrollById: PropTypes.string,
    children: PropTypes.func.isRequired
  };
  componentDidMount() {
    window.addEventListener('wheel', this.onMouseWheel);
  }
  componentWillUnmount() {
    if (this.requestFrameID) cancelAnimationFrame(this.requestFrameID);
    window.removeEventListener('wheel', this.onMouseWheel);
  }
  onMouseWheel = () => {
    if (this.requestFrameID) cancelAnimationFrame(this.requestFrameID);
  };
  onScrollToElement = (target: string) => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      const elementOffsetTop = targetElement.offsetTop;
      const parent = this.props.scrollById
        ? (document.getElementById(this.props.scrollById) as HTMLElement)
        : (targetElement.parentNode as HTMLElement);
      let top = 0;
      const scrollFrame = () => {
        if (top < elementOffsetTop) {
          if (this.props.windowScroll) {
            window.scrollTo(0, top);
          } else {
            parent.scrollTop = top;
          }
          top = top + 100;
          this.requestFrameID = requestAnimationFrame(scrollFrame);
        }
      };
      this.requestFrameID = requestAnimationFrame(scrollFrame);
    } else {
      throw new Error('Cant find target element');
    }
  };
  render() {
    return this.props.children({
      scrollToElement: this.onScrollToElement
    }) as React.ReactNode;
  }
}

export default ScrollTo;
