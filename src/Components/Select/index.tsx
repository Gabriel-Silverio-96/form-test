import React, { SelectHTMLAttributes } from 'react';
import { SelectGroup } from './styled';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    option: Array<object>;
    isState?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectState: React.FC<SelectProps> = ({ label, name, option, onChange }) => {
    return (
        <SelectGroup>
            <label htmlFor={label}>{label}</label>
            <select name={name} onChange={onChange}>
                {option.map((option: any) => {
                    return <option key={option.id} value={option.sigla}>{option.sigla}</option>
                })}
            </select>
        </SelectGroup>
    );
}

const SelectCity: React.FC<SelectProps> = ({ label, name, option, isState, onChange }) => {
    return (
        <SelectGroup>
            <label htmlFor={label}>{label}</label>
            <select name={name} onChange={onChange} disabled={isState === '' ? true : false}>
                {option.map((option: any) => {
                    return <option key={option.id} value={option.nome}>{option.nome}</option>
                })}
            </select>
        </SelectGroup>
    );
}

export { SelectState, SelectCity };