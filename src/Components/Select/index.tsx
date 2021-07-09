import React, { SelectHTMLAttributes } from 'react';
import { SelectGroup } from './styled';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    option: Array<object>;
    isState?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    loading?: boolean;
    errorMessage?: string;
}

const SelectState: React.FC<SelectProps> = ({ label, name, option, onChange, loading, errorMessage, ...rest }) => {
    return (
        <SelectGroup data-testid='select-group'>
            <label htmlFor={label}>{label}</label>
            <select name={name} onChange={onChange} {...rest}>
                {loading && <option>Loading...</option>}
                {option.map((option: any) => {
                    return <option key={`${option.id}`} value={option.sigla}>{option.sigla}</option>
                })}
            </select>
            <span>{errorMessage}</span>
        </SelectGroup>
    );
}

const SelectCity: React.FC<SelectProps> = ({ label, name, option, isState, onChange, loading, errorMessage, ...rest }) => {
    return (
        <SelectGroup data-testid='select-group'>
            <label htmlFor={label}>{label}</label>
            <select name={name} onChange={onChange} disabled={isState === '' ? true : false} {...rest}>
                {loading && <option>Loading...</option>}
                {option.map((option: any) => {
                    return <option key={`${option.id}`} value={option.nome}>{option.nome}</option>
                })}
            </select>
            <span>{errorMessage}</span>
        </SelectGroup>
    );
}

export { SelectState, SelectCity };