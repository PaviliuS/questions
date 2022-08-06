import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    box-sizing: border-box;
    border-radius: ${props=>props.theme.borderRadius};
    box-shadow: 0 0px 1px ${props=>props.theme.shadowColor};
    padding: 10px;
    background-color: ${props=>props.theme.iconColor};  
    margin-bottom: 10px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
`;

export const Icon = styled.div`
    display:flex;
    flex: 0 0 auto;
    height: 50px; 
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    position: absolute;
    margin: 0px 20px;
`;

export const Text = styled.input`
    display: flex;
    width:100%;
    outline: none;
    border: 0;
    font-family: 'Roboto';
    font-size: 14px;
    height: 50px;
    border-radius: 15px;
    padding: 0px 60px;
    box-sizing: border-box;
    font-weight: 400;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
    background-color: ${props=>props.theme.backgroundColor};  
    color: ${props=>props.theme.textColor};  
`;

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 150px;
    background: ${props => props.theme.accentColor1};
    border: 0px;
    border-radius: ${props => props.theme.borderRadius};
    height: 40px;
    text-decoration: none;
    color: white;
    font-family: 'Roboto';
    font-size: 16px;
    margin: 10px 0px 0px 0px
`;

