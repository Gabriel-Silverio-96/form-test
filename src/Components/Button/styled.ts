import styled from 'styled-components';
import * as Variables from 'Assets/Styled/Variables';

export const ButtonPrimary = styled.button `
    padding: 0.7rem 0.9rem;
    border: 0;
    background-color: ${Variables.colorPrimary};
    color: ${Variables.neutraSecondary};
    font-size: 1rem;
    border-radius: 0.4rem;
    width: 100%;
    cursor: pointer;
    
    &::first-letter {
        text-transform: uppercase;
    }
`