import { ReactNode, MouseEvent, ButtonHTMLAttributes } from 'react';
interface DebounceButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    debounceTime?: number;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
declare const DebounceButton: ({ children, onClick, debounceTime, ...props }: DebounceButtonProps) => import("react/jsx-runtime").JSX.Element;
export default DebounceButton;
