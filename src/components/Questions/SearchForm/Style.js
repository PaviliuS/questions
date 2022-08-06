import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    box-sizing: border-box;
    border-radius: ${props=>props.theme.borderRadius};
    /* box-shadow: 0 0px 3px ${props=>props.theme.shadowColor}; */
    /* padding: 10px; */
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
    height: 40px; 
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
    height: 40px;
    border-radius: 15px;
    padding: 0px 60px;
    box-sizing: border-box;
    font-weight: 400;
    background-color: ${props=>props.theme.iconColor};  
    color: ${props=>props.theme.textColor}; 
    box-shadow: 0 0px 3px ${props=>props.theme.shadowColor};
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
    background-size:200%;
    transition:1s;
    color: white;
    font-family: 'Roboto';
    font-size: 14px;
    margin-top: 10px;
`;