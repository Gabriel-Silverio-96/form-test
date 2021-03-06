import React, { InputHTMLAttributes } from 'react';
import { InputGroup } from './styled';

type typeInput = 'text' | 'date' | 'number' | 'color' | 'datetime-local' | 'email' | 'password' | 'time' | 'url';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: typeInput;
    name: string;
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
}

const Input: React.FC<InputProps> = React.memo(({ type, name, label, onChange, errorMessage, ...rest }) => {
    return (
        <InputGroup>
            <label
                htmlFor={name}
                data-testid="label-input"
            >
                {label}
            </label>
            <input 
                type={type} 
                id={name} 
                name={name} 
                onChange={onChange} {...rest} 
                data-testid="input"
            />
            <span>{errorMessage}</span>
        </InputGroup>
    )
});

export default Input;