import { HTMLAttributes, ReactNode } from 'react';
interface DebounceClickButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    debounceTime?: number;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const DebounceClickButton: ({ children, onClick, debounceTime, ...props }: DebounceClickButtonProps) => import("react/jsx-runtime").JSX.Element;
export default DebounceClickButton;
