import { HTMLAttributes, ReactNode, MouseEvent } from 'react';
interface DebounceButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    debounceTime?: number;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
declare const DebounceButton: ({ children, onClick, debounceTime, ...props }: DebounceButtonProps) => import("react/jsx-runtime").JSX.Element;
export default DebounceButton;
