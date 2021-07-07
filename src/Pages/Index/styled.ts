import styled from "styled-components";
//import * as Variables from 'Assets/Styled/Variables';

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    height: 100vh;

    > div {
        width: 30rem;
        margin: auto;

        h1 {
            margin-bottom: 2rem;
        }
    }

    form {
        display: flex;
        flex-direction: column;
    }

    button {
        margin-left: auto;
    }
`