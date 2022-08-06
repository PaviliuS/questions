import styled from 'styled-components';

export const Header = styled.header`
    display: flex; 
    width: 100%;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.backgroundColor};
    top: 0;
    position: sticky;
    margin-bottom: 60px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center; 
    width: 100%;
`;

export const Logo = styled.div`
    font-size: 22px;
    line-height: 16px;
    font-weight: 600;
    display: flex;
    color: inherit;
    
    flex: 0 0 auto;
    margin: 0px 10px;
    justify-content: center;
    align-items: center; 
`;

export const Button = styled.button`
    background-color: ${props => props.theme.iconColor};
    font-size: 25px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: ${props => props.theme.borderRadius};
    border: 0px;
    color: ${props => props.theme.textColor};
    box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};

    &:hover{
        background-color: ${props => props.theme.accentColor1};
        color: white;
        transition: 0.1s;
    }
    &:focus{
        outline: none;   
    }
`;