# React Copy Text Macro

Easily to make your custom component happened with renderless component and do somting powerful. ✍️✍️✍️

## Installation

```
> yarn add react-rless
```

## peerDeps

- react

## Example

## \<CopyText>

CopyText renderless component help you to use `execCommand('copy')` with the value and custom your own component, like copy button Component.

```jsx
import { CopyText } from 'react-rless'
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
```

## \<ScrollTo>

ScrollTo component help to do window or element auto scrolling animation and skip the animation when you wheel by mouse.

```jsx
import { ScrollTo } from 'react-rless'
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
```

## License

MIT
