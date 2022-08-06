import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    box-sizing: border-box;
    border-radius: ${props=>props.theme.borderRadius};
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
    color: ${props => props.theme.accentColor1};
    z-index:0;
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
    box-shadow: 0px 0px 3px ${props=>props.theme.shadowColor};
    background-color: ${props=>props.theme.iconColor};  
    color: ${props=>props.theme.textColor};  
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
    border-radius: ${props => props.theme.borderRadius};
    height: 40px;
    text-decoration: none;
    color: white;
    font-family: 'Roboto';
    font-size: 14px;
    margin: 10px 0px 0px 0px;
    box-shadow: 0px 0px 3px ${props=>props.theme.shadowColor};
`;


export const Label = styled.div`
 /* justify-content: center; */
    display:flex;
    width: 100%;
    height: 30px; 
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    
`;