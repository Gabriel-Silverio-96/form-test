import React, { useEffect, useState } from 'react';
import api from 'Services/api-ibge';

//Components
import Input from 'Components/Input';
import { SelectState, SelectCity } from 'Components/Select';
import Button from 'Components/Button';

import { ContainerForm } from './styled';

type regiao = {
    id: string;
    sigla: string;
    nome: string;
}

interface StatesProps {
    id: number;
    sigla: string;
    nome: string;
    city: string;
    regiao: regiao;
}

interface CityProps {
    id: number;
    nome: string;
}

interface UserDataProps {
    name: string;
    email: string;
    state: string;
    city: string;
    occupation: string;
}

const Index: React.FC = () => {
    const [cities, setCities] = useState<CityProps[]>([]);
    const [states, setStates] = useState<StatesProps[]>([]);

    const [userData, setUserData] = useState<UserDataProps>({
        name: '',
        email: '',
        state: '',
        city: '',
        occupation: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({
            ...userData,
            [name]: value
        })
    };

    useEffect(() => {
        const request = async () => {
            try {
                const { data, status } = await api.get('localidades/estados');
                if (status === 200) {
                    setStates(data)
                }
            } catch (error) {
                console.error("Message error: " + error);
            }
        }
        request()
    }, []);

    useEffect(() => {
        if (userData.state !== '') {
            const request = async () => {
                try {
                    const { data, status } = await api.get(`localidades/estados/${userData.state}/municipios`);
                    if (status === 200) {
                        setCities(data)
                    }
                } catch (error) {
                    console.error("Message error: " + error);
                }
            }
            request()
        }
    }, [userData]);

    return (
        <ContainerForm>
            <div>
                <h1>Register Now</h1>                
                <form>
                    <Input
                        type='text'
                        name='name'
                        label='name'
                        onChange={handleChange}
                    />

                    <Input
                        type='email'
                        name='email'
                        label='email'
                        onChange={handleChange}
                    />

                    <SelectState
                        label='state'
                        name='state'
                        option={states}
                        onChange={handleChange}
                    />

                    <SelectCity
                        label='city'
                        name='city'
                        isState={userData.state}
                        option={cities}
                        onChange={handleChange}
                    />

                    <Input
                        type='text'
                        name='occupation'
                        label='occupation'
                        onChange={handleChange}
                    />  

                    <Button 
                        name='submit'
                        type='submit'                        
                    />
                    
                </form>
            </div>
        </ ContainerForm>
    );
}

export default Index;