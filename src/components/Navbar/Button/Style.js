import styled from 'styled-components';

export const Button = styled.div`
    display: flex; 
    width: 100%;
    height: 40px;
    flex-direction: row;
    align-items: center;
    border-radius: ${props=>props.theme.borderRadius};
    color: ${props=>props.theme.textColor};
    cursor: pointer;
    &:hover{
        background-color: ${props=>props.theme.accentColor1};
        transition: 0.1s ease;
        color: white;
    }
`; 

export const Icon = styled.div`
    display: flex;
    width: 45px;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: inherit;
    &:hover{
        background-color: ${props=>props.theme.accentColor1};
        transition: 0.1s ease;
        color: white;
    }
`;
export const Text = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex: 0 0 auto;
    font-family: 'Roboto';
    display:flex;
    flex-wrap: nowrap;
    font-size: 14px;
    color: inherit;
`;


