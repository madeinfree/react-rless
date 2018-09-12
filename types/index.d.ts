import React from 'react';

export class CopyText extends React.PureComponent<
  {
    text: string;
    callback?(err: string | null, text: string | null): void;
    children(props: { onClickToCopy(): void; onBackToUncopy(): void; isCopy: boolean }): void;
  },
  { isCopy: boolean }
> {}

export class ScrollTo extends React.PureComponent<{
  children(props: { scrollToElement(target: string): void }): void;
}> {}
