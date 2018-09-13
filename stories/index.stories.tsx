import React from 'react';
import { storiesOf } from '@storybook/react';
import { CopyText, ScrollTo, Interval } from '../src';

storiesOf('React Renderless', module)
  .add('Copy Text', () => (
    <CopyText text="Some Copy Text">
      {props => (
        <div
          style={{
            width: 200,
            height: 60,
            textAlign: 'center',
            border: '1px solid #ccc',
            cursor: 'pointer',
            lineHeight: '60px'
          }}
          onClick={props.onClickToCopy}
        >
          {props.isCopy ? 'Copied !' : 'Copy'}
        </div>
      )}
    </CopyText>
  ))
  .add('Scroll To', () => (
    <ScrollTo scrollById="box">
      {props => (
        <div
          id="box"
          style={{
            width: 400,
            height: 100,
            overflow: 'auto',
            border: '1px solid #ccc',
            margin: '0 auto'
          }}
        >
          <button onClick={() => props.scrollToElement('first')}>Scroll to first target</button>
          <button onClick={() => props.scrollToElement('second')}>Scroll to second target</button>
          <div id="first" style={{ marginTop: 800 }}>
            First scroll target element
          </div>
          <div id="second" style={{ marginTop: 400 }}>
            Second scroll target element
          </div>
        </div>
      )}
    </ScrollTo>
  ))
  .add('Interval', () => (
    <Interval>
      {({ timerID }) => (
        <h1 style={{ textAlign: 'center' }}>
          TimerID: [{timerID || 0}] {new Date().toString()}
        </h1>
      )}
    </Interval>
  ));
