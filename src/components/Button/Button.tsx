import { button, variants } from "./Button.css"
import React from "react";

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    onClick,
    disabled = false,
}) => {
    const variantStyle = variants[variant] || variants.primary;
    return (
        <button
            className={`${button} ${variantStyle}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
export default Button