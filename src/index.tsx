import { HTMLAttributes, ReactNode, useEffect, useRef, useCallback, MouseEvent } from 'react';
const debounce = require('lodash/debounce');
// because the useId hook doesn't exist in react@17
// try to get the useId from 'react', if it doesn't exist, it will be undefined
const { useId } = require('react');

interface DebounceButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  debounceTime?: number;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * @description A button component that prevents rapid consecutive clicks by debouncing the click event.
 * This ensures that the button's action is triggered only once within a specified time frame,
 * enhancing user experience and preventing unintended repeated actions.
 *
 * Additionally, this component tries to use the `useId` hook from React for generating unique IDs.
 * If the hook doesn't exist (e.g., in react@17), it falls back to a custom ID generation method.
 *
 * @author zqsun
 * @version 1.0
 * @param {object} props - Component properties
 * @param {React.ReactNode} [props.children] - Button content
 * @param {number} [props.debounceTime=300] - Debounce time in milliseconds. Default is 300ms.
 * @returns {JSX.Element} - DebounceClickButton component
 */

function useFallbackId() {
  const idRef = useRef<string>('');

  useEffect(() => {
    if (idRef.current === '') {
      idRef.current = Math.random().toString(36).slice(2, 11);
    }
  }, []);

  return idRef.current;
}

const DebounceButton = ({ children, onClick, debounceTime = 300, ...props }: DebounceButtonProps) => {
  const id = useId ? useId() : useFallbackId();

  const debouncedOnClick = useCallback(
    debounce((event) => {
      if (onClick) {
        onClick(event);
      }
    }, debounceTime),
    [onClick, debounceTime]
  );

  return (
    <button id={'react-debounce-button-' + id} onClick={debouncedOnClick} {...props}>
      {children}
    </button>
  );
};

export default DebounceButton;
