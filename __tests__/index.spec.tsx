import * as React from 'react';
import { mount } from 'enzyme';
import { Interval } from '../src';

describe('Test Interval', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    jest.clearAllTimers();
  });
  it('React Interval Call 1s and call 2 times', () => {
    const callback = jest.fn();
    mount(
      <Interval>
        {() => {
          callback();
          return <div />;
        }}
      </Interval>
    );
    expect(callback).toBeCalled();
    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(2);
  });
  it('React Interval Call 3s and call 4 times', () => {
    const callback = jest.fn();
    mount(
      <Interval>
        {() => {
          callback();
          return <div />;
        }}
      </Interval>
    );
    expect(callback).toBeCalled();
    jest.advanceTimersByTime(3000);
    expect(callback).toHaveBeenCalledTimes(4);
  });
  it('React Interval Call 3s and call 2 times when timeout = 2000', () => {
    const callback = jest.fn();
    mount(
      <Interval timeout={2000}>
        {() => {
          callback();
          return <div />;
        }}
      </Interval>
    );
    expect(callback).toBeCalled();
    jest.advanceTimersByTime(3000);
    expect(callback).toHaveBeenCalledTimes(2);
  });
  it('React Interval error log when timer is exists', () => {
    const spy = jest.spyOn(console, 'error');
    mount(
      <Interval>
        {({ start }) => {
          start();
          return <div />;
        }}
      </Interval>
    );
    jest.advanceTimersByTime(1000);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
  it('React Interval no error log when timer is exists but stop before', () => {
    const spy = jest.spyOn(console, 'error');
    mount(
      <Interval>
        {({ start, stop }) => {
          stop();
          start();
          return <div />;
        }}
      </Interval>
    );
    jest.advanceTimersByTime(1000);
    expect(spy).toHaveBeenCalledTimes(0);
    spy.mockRestore();
  });
});
