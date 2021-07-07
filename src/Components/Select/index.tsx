import React, { SelectHTMLAttributes } from 'react';
import { SelectGroup } from './styled';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    option: Array<string>;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ label, name, option, onChange }) => {
    return (
        <SelectGroup>
            <label htmlFor={label}>{label}</label>
            <select name={name} onChange={onChange}>
                {option.map((option, index) => {
                    return <option key={index} value={option}>{option}</option>
                })}
            </select>
        </SelectGroup>
    );
}

export default Select;