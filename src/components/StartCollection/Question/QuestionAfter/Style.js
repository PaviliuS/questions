import styled from 'styled-components';

export const Form = styled.div`
    display: flex;
    /* opacity: ${props=>props.status?'1':'0.5'}; */
    pointer-events:${props=>props.status?'':'none'};
    transition: 0.5s;
    flex-direction: column;
    width: 100%;
    margin: 0px 0px 10px 0px;
    &:last-child{
        margin: 0px 0px 0px 0px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column; 
    box-sizing: border-box;
    border-radius: ${props=>props.theme.borderRadius};
    box-shadow: 0 0px 3px ${props=>props.theme.shadowColor};
    padding: 10px;
    background-color: ${props=>props.theme.iconColor};
`;

export const Question = styled.h3`
    display: flex; 
    width: 100%;  
    align-items: center;
    font-size: ${props => props.theme.textSizeM};
    letter-spacing: 1px;
    font-weight: 500;
    margin: 10px 0px;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;  
    color: inherit;
    word-break: break-all;
    /* border-bottom: 1px solid ${props => props.theme.accentColor1}; */
    color: ${props=>props.error ? '#E53935': '#43A047'};
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    flex: 1 1 auto;
    align-items: center;
    margin: 0px 0px 10px 0px;
    &:last-child{
        margin: 0px 0px 0px 0px;
    }
    padding: 20px;
    border-radius: 10px;
    transition: 1s;
    box-shadow: 0px 0px 1px ${props => props.theme.shadowColor};
    background-color: ${props=>props.theme.infoIconColor};
`;

export const Text = styled.span`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
    font-size: ${props => props.theme.textSizeS};
    letter-spacing: 1px;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;  
    color: inherit;
    margin-right: 20px;
    word-break: break-all;
    font-weight: 400;
    /* color: ${props=>props.error ? '#E53935': '#43A047'}; */
    color: ${props => props.theme.textColor};
`;

export const InputBlock = styled.div`
    display: flex;
    width: 50px;
    height: 25px;
    flex: 0 0 auto;
    border-radius: 20px;
    background-color: ${props => props.theme.iconColor};
    position: relative;
    box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
    
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
        /* border: 1px solid #5B86E5; */
        box-sizing: border-box;
    }
`;

export const Input = styled.input`
    padding: 0;
    margin: 0;
    display: flex; 
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 50;
`;

export const Control = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%; 
    justify-content: right;
    margin: 10px 0px 0px 0px;
`;

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 150px;
    background: ${props => props.theme.accentColor1};
    /* background: linear-gradient(to left,#0072ff,#0072ff,#00c6ff); */
    border: 0px;
    border-radius: 40px;
    height: 40px;
    text-decoration: none;
    background-size:200%;
    transition:1s;
    color: white;
    font-family: 'Roboto';
    font-size: 16px;
    /* &:hover{
        background-position: right;
        font-size: 16px;
    
    } */

    @media (min-width: 1200px){
        
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        
    }
    @media (max-width: 992px) and (min-width: 768px)  {
       
    }
    @media (max-width: 768px) and (min-width: 576px)  {
   
    }
    @media (max-width: 576px)  {
        width: 100%;
        border-radius: 10px;
    }
`;

