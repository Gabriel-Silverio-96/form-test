import React, { useCallback, useEffect, useState } from "react";
import api from "Services/api-ibge";

//Components
import Input from "Components/Input";
import { SelectState, SelectCity } from "Components/Select";
import Button from "Components/Button";

import { ContainerForm } from "./styled";

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

interface UserDataProps {
    full_name: string;
    email: string;
    state: string;
    city: string;
    occupation: string;
}

const Index: React.FC = () => {
    const [isLoadingStates, setIsLoadingStates] = useState<boolean>(true);
    const [isLoadingCities, setIsLoadingCities] = useState<boolean>(false);
    const [cities, setCities] = useState<CityProps[]>([]);
    const [states, setStates] = useState<StateProps[]>([]);

    const [userData, setUserData] = useState<UserDataProps>({
        full_name: "",
        email: "",
        state: "RO",
        city: "",
        occupation: "",
    });

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = e.target.name;
        const value = e.target.value;
       
        setUserData((state) => {
            return {
                ...state,
                [name]: value
            }
        })
    }, []);

    useEffect(() => {
        const request = async () => {            
            try {
                const { data, status } = await api.get("localidades/estados");
                if (status === 200) {
                    setStates(data)
                    setIsLoadingStates(false)                    
                }
            } catch (error) {
                console.error("Message error: " + error);
            }
        }
        request()
    }, []);

    useEffect(() => {
        if (userData.state !== "") {
            const request = async () => {
                setIsLoadingCities(true)
                try {
                    const { data, status } = await api.get(`localidades/estados/${userData.state}/municipios`);
                    if (status === 200) {
                        setCities(data)
                        setIsLoadingCities(false)
                    }
                } catch (error) {
                    console.error("Message error: " + error);
                }
            }
            request()
        }
    }, [userData.state]);

    useEffect(() => {
        if(userData.state !== "RO") {
            setUserData((state) => {
                return {
                    ...state,
                    city: ""
                }
            })
        }
    }, [userData.state])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(JSON.stringify(userData));
    }

    return (
        <ContainerForm>
            <div>
                <h1>Register Now</h1>
                <form onSubmit={handleSubmit} data-testid="form">
                    <Input
                        type="text"
                        name="full_name"
                        label="full name"
                        onChange={handleChange}
                    />

                    <Input
                        type="email"
                        name="email"
                        label="email"
                        onChange={handleChange}
                    />

                    <SelectState
                        loading={isLoadingStates}
                        label="state"
                        name="state"
                        option={states}
                        onChange={handleChange}
                    />

                    <SelectCity
                        loading={isLoadingCities}
                        label="city"
                        name="city"
                        isState={userData.state}
                        option={cities}
                        onChange={handleChange}
                    />

                    <Input
                        type="text"
                        name="occupation"
                        label="occupation"
                        onChange={handleChange}
                    />

                    <Button
                        name="submit"
                        type="submit"
                        data-testid="form-button"
                    />

                </form>
            </div>
        </ ContainerForm>
    );
}

export default Index;