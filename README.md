# React Copy Text Macro

Easily to make your button copy input happened. ✍️✍️✍️

## Installation

```
> 
```

## peerDeps

- react

## Example

```jsx
import CopyTextMacro from 'react-copy-text-macro'

const CopyTextMacroBtn = () => <CopyTextMacro text={'Somthing want to copy'}>
  {macro => (
    <div className="intro_media-share-form-btn" onClick={macro.onClickToCopy}>
      {macro.isCopy ? 'Coped !' : 'Copy'}
    </div>
  )}
</CopyTextMacro>
```

## License

MIT
