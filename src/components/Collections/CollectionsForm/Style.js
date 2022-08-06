import styled from "styled-components";

export const CollectionForm = styled.div`
    width: 100%;
    flex: 0 0 auto; 
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

export const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    box-sizing: border-box;
    border-radius: ${props=>props.theme.borderRadius};
    padding: 0px;
    margin-bottom: 10px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
`;

export const Label = styled.div`
    display:flex;
    width: 100%;
    height: 30px; 
    align-items: center;
    font-weight: 500;
    font-size: 16px;
`;

export const Questions = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Text = styled.input`
    display: flex;
    width:100%;
    outline: none;
    border: 0;
    font-family: 'Roboto';
    font-size: 14px;
    height: 40px;
    border-radius: 15px;
    padding: 0px 20px;
    box-sizing: border-box;
    font-weight: 400;
    box-shadow: 0px 0px 3px ${props=>props.theme.shadowColor};
    background-color: ${props=>props.theme.iconColor};  
    color: ${props=>props.theme.textColor};      
`;

export const Error = styled.div`
    display: flex;
    width:100%;
    font-family: 'Roboto';
    font-size: 14px;
    align-items: center;
    padding: 0px 0px 0px 20px;  
    box-sizing: border-box;
    font-weight: 500;
    color: red;
    margin: 10px 0px 0px 0px;
`;

export const Spacer = styled.div`
    display: flex;
    width:100%;
    height: 10px;
    background-color: ${props=>props.theme.iconColor};  
    box-shadow: 0px 0px 3px ${props=>props.theme.shadowColor};
    margin-bottom: 10px;
    border-radius: 15px;
`;

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 150px;
    background: ${props => props.theme.accentColor1};
    border: 0px;
    border-radius: 15px;
    height: 40px;
    text-decoration: none;
    color: white;
    font-family: 'Roboto';
    font-size: 14px;
    margin-top: 10px;
`;