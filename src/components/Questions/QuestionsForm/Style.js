import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    box-sizing: border-box;
    /* border-radius: ${props=>props.theme.borderRadius};
    box-shadow: 0 0px 1px ${props=>props.theme.shadowColor};
    padding: 10px;
    background-color: ${props=>props.theme.iconColor};  
    margin-bottom: 10px; */
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height: 100%;
    margin-bottom:10px;
`;

export const Label = styled.div`
    display:flex;
    width: 100%;
    height: 30px; 
    align-items: center;
    font-weight: 500;
    font-size: 16px;
`;

export const Data = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    flex-direction: row;
    align-items: center;
    border-radius: 15px;
    box-shadow: 0px 0px 3px ${props=>props.theme.shadowColor};
    /* position: relative; */
    /* z-index:0; */
`;

export const TextArea = styled.textarea`
    display: flex;
    width:100%;
    outline: none;
    border: 0;
    font-family: 'Roboto';
    font-size: 14px;
    height: 80px;
    border-radius: 15px;
    padding: 10px 75px 10px 20px;
    box-sizing: border-box;
    font-weight: 400;
    box-shadow: 0px 0px 3px ${props=>props.theme.shadowColor};
    background-color: ${props=>props.theme.iconColor};  
    color: ${props=>props.theme.textColor};  
    resize: vertical;
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
    padding: 0px 75px 0px 20px;
    box-sizing: border-box;
    font-weight: 400;
    /* box-shadow: 0px 0px 3px ${props=>props.theme.shadowColor}; */
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

export const InputBlock = styled.div`
    margin-right: 10px;
    position: relative;
    display: flex;
    width: 50px;
    height: 25px;
    flex: 0 0 auto;
    border-radius: 20px;
    background-color: ${props => props.theme.backgroundColor};
    box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
    /* right: 10px;
    top:8px; */

    &::after{
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: ${props => props.status ? '0px' : '25px'};
        transition: 1s;
        top:0px;
        background-color: ${props => props.status ? '#0072ff' : '#bfc0c4'};
        border-radius: 50%;
        box-sizing: border-box;
    }
`;

export const CheckBox = styled.input`
    padding: 0;
    margin: 0;
    display: flex; 
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 50;
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
`;