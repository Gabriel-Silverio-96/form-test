import React, { SelectHTMLAttributes } from 'react';
import { SelectGroup, Loading } from './styled';

type regiao = {
    id: number;
    sigla: string;
    nome: string;
}

interface StateProps {
    id: number;
    sigla: string;
    nome: string;
    regiao: regiao;
}

interface CityProps {
    id: number;
    nome: string;
}

interface SelectProps<T> extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    option: Array<T>;
    isState?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    loading?: boolean;
    errorMessage?: string;
}

const SelectState: React.FC<SelectProps<StateProps>> = ({ label, name, option, onChange, loading, errorMessage, ...rest }) => {
    return (
        <SelectGroup data-testid='select-group'>
            <label htmlFor={label}>{label}</label>
            
            {loading && <Loading>Loading...</Loading>}

            <select name={name} onChange={onChange} {...rest}>                
                {option.map((option) =>{                      
                    return <option key={`${option.id}`} value={option.sigla}>{option.sigla}</option>
                })}
            </select>
            <span>{errorMessage}</span>
        </SelectGroup>
    );
}

const SelectCity: React.FC<SelectProps<CityProps>> = ({ label, name, option, isState, onChange, loading, errorMessage, ...rest }) => {
    return (
        <SelectGroup data-testid='select-group'>
            <label htmlFor={label}>{label}</label>

            {loading && <Loading>Loading...</Loading>}

            <select name={name} onChange={onChange} disabled={isState === '' ? true : false} {...rest}>
                {option.map((option) => {
                    return <option key={`${option.id}`} value={option.nome}>{option.nome}</option>
                })}
            </select>
            <span>{errorMessage}</span>
        </SelectGroup>
    );
}

export { SelectState, SelectCity };