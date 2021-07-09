import styled from "styled-components";
import * as Variables from 'Assets/Styled/Variables';

export const SelectGroup = styled.div`
    display: flex;
    flex-direction: column;    
    margin-bottom: 2rem;
    position: relative;

    label {
        font-size: 1rem;
        margin-bottom: 0.3rem;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    select {
        cursor: pointer;
        padding: 0.625rem 0.625rem;        
        font-size: 1rem;
        border-radius: 0.4rem;
        border: 2px solid ${Variables.neutraThird};
        
        &:focus {            
            border-color: ${Variables.colorPrimary};
            outline: ${Variables.colorPrimary};
        }

        &:disabled {
            background-color: ${Variables.neutraThird};
            cursor: not-allowed;
        }
    }    

    & > span 
        &:last-child{
            color: ${Variables.colorError};
            margin-top: 0.2rem;
    }
`

export const Loading = styled.span `
    position: absolute;
    bottom: -0.3rem;
    z-index: 1;
    padding: 1rem;
    background-color: ${Variables.complementaryPrimary};
    width: -webkit-fill-available;
    text-align: center;
    border-radius: 0.4rem;
`