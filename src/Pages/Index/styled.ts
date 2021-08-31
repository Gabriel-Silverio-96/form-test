import styled from "styled-components";

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    height: 100vh;
    padding: 1rem;

    > div {
        max-width: 30rem;
        width: 100%;
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
        transition: 0.3s;

        &:hover {
            opacity: 0.8;
        }
    }
`