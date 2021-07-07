import React, { ButtonHTMLAttributes } from 'react';

import { ButtonPrimary } from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type: 'submit' | 'reset' | 'button';
    name: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, name, onClick }) => {
    return (
        <ButtonPrimary type={type} onClick={onClick}>{name}</ButtonPrimary>
    );
}

export default Button;
