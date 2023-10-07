# react-debounce-button
🔘 A React component that elegantly handles multiple rapid clicks to enhance user experience and prevent unintended actions.
![npm](https://img.shields.io/npm/v/react-debounce-button)
![license](https://img.shields.io/npm/l/react-debounce-button)

`react-debounce-button` is a specialized React button component designed to enhance user experience by preventing unintended repeated actions caused by rapid consecutive clicks. It's lightweight, customizable, and inherits all the properties of a button element, ensuring seamless integration into your React applications.

## Installation

```sh
npm install react-debounce-button
```
or
```sh
yarn add react-debounce-button
```

## Usage

### Step 1: Use the Component
Simply import and use the DebounceClickButton component in your React application:
```jsx
import DebounceClickButton from 'react-debounce-button';

function App() {
    return (
        <DebounceClickButton onClick={() => console.log("Button clicked!")}>
            Click Me!
        </DebounceClickButton>
    );
}
```
# Props of DebounceClickButton Component

The DebounceClickButton component inherits all the properties of a button element, allowing for easy customization and styling. Additionally, it has a specific prop to control the debounce time:

| Prop        | Type                               | Default | Description                                                                                           |
|-------------|------------------------------------|---------|-------------------------------------------------------------------------------------------------------|
| `debounceTime` | `'number'` | `'300'` |   Specifies the debounce time in milliseconds. <br/>Determines how long to wait before registering another click.|

## Usage Example

You can use other button properties like id, className, and style for further customization:

```jsx
import DebounceClickButton from 'react-debounce-button';

function ExampleComponent() {
    return (
        <DebounceClickButton
            debounceTime={500}
            id='example'
            className='custom-class'
            style={{ backgroundColor: 'lightblue' }}
            onClick={() => console.log("Button clicked!")}
        >
            Click Me!
        </DebounceClickButton>
    );
}
```
## About the Author

This component library is developed and maintained by [zqsun](https://github.com/zqsun0). If you encounter any issues or have suggestions, please feel free to open an issue on the [GitHub repository](https://github.com/zqsun0/react-debounce-button).

