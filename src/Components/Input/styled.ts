import styled from 'styled-components';
import * as Variables from 'Assets/Styled/Variables';

export const InputGroup = styled.div `
    display: flex;
    flex-direction: column;    
    margin-bottom: 2rem;

    label {
        font-size: 1rem;
        margin-bottom: 0.3rem;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    input {
        padding: 0.625rem 0.625rem;        
        font-size: 1rem;
        border-radius: 0.4rem;
        border: 2px solid ${Variables.neutraThird};
        
        &:focus {            
            border: 3px solid ${Variables.colorPrimary};
            outline: ${Variables.colorPrimary};
        }
    }

    & > span {
        color: ${Variables.colorError};
        margin-top: 0.2rem;
    }
`