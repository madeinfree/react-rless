import React from 'react';

export class CopyText extends React.PureComponent<
  {
    text: string;
    callback?(err: string, text: string): void;
    children(macro: {
      onClickToCopy(): void;
      onBackToUncopy(): void;
      isCopy: boolean;
    }): React.ReactNode;
  },
  { isCopy: boolean }
> {}

export class ScrollTo extends React.PureComponent<{
  windowScroll?: boolean;
  scrollById?: string;
  children(macro: { scrollToElement(target: string): void }): React.ReactNode;
}> {}

export class Interval extends React.Component<{
  children(props: { timerID: NodeJS.Timer | number }): React.ReactNode;
  timeout?: number;
}> {}
