import React, { useState } from 'react';

//Components
import Input from 'Components/Input';
import Select from 'Components/Select';

interface userDataProps {
    name: string;
    email: string;
    state: string;
    city: string;
    occuparion: string;
}

const Index: React.FC = () => {
    const [userData, setUserData] = useState<userDataProps>({
        name: '',
        email: '',
        state: '',
        city: '',
        occuparion: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({
            ...userData,
            [name]: value
        })  
    };
    
    return (
        <>
            <h1>form</h1>
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

                <Select
                    label='state'
                    name='state'
                    option={['Paraná', 'Rio Janeiro', 'Recife']}
                    onChange={handleChange}
                />
            </form>
        </>
    );
}

export default Index;
