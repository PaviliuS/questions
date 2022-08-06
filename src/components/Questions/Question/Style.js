import styled from "styled-components";

export const Question = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0px 0px 10px 0px;
    &:last-child{
       margin: 0px;
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

export const Title = styled.div`
    display: flex;
    width: 100%;
    flex: 1 1 auto;
    flex-direction: row;
`;

export const Id = styled.div`
    display: flex;
    font-size:  ${props=>props.theme.textSizeL};
    max-width: 100px;
    min-width: 50px;
    padding: 0px 5px;
    box-sizing: border-box;
    height: 50px;
    font-weight: 400;
    justify-content: center;
    align-items: center;
    color: ${props=>props.theme.textColor};
    font-weight: 500;
`;

export const Name = styled.div`
    display:flex;
    flex: 1 1 auto;
    align-items: center;
    font-size: ${props=>props.theme.textSizeM};
    /* height: 50px; */
    width: 100%;
    align-items: center;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis; 
    word-break: break-all ;
    color: ${props=>props.theme.textColor};
    &:hover{ 
        transition: 0.1s ease;
        color: ${props=>props.theme.accentColor1};
    }
    font-weight: 500;
`;

export const Options = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 50px;
    height: 50px;    
`;

export const DeleteQuestion = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    font-size: ${props=>props.theme.textSizeL};
    border-radius: ${props=>props.theme.borderRadius};
    background-color: ${props=>props.theme.iconColor};
    &:hover{ 
        transition: 0.1s ease;
        color: ${props=>props.theme.accentColor1};
    }
`;

export const List = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 10px 50px 0px 50px;
    /* padding: 0px 50px; */
    box-sizing: border-box;
    display: ${props=>props.displayList === true ? 'flex': 'none'};
`;

export const Item = styled.div`
    /* display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    flex-direction: row;
    margin: 0px 0px 10px 0px;
    &:last-child{
        margin: 0px;
    } */
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    margin: 0px 0px 10px 0px;
`;

export const Status = styled.div`
    /* display: flex;
    flex: 0 0 auto; */
    width: 30px;
    height: 20px;
    align-items: center;
    color: ${props=>props.theme.accentColor1};
    font-size: ${props=>props.theme.textSizeL};
`;

export const Text = styled.div`
    display: flex;
    width: 100%;
    height: 100%; 
    align-items: center;
    font-size: ${props=>props.theme.textSizeS};
    overflow: hidden;
    white-space: wrap;
    word-break: break-all;
    text-overflow: ellipsis; 
    font-weight: 400;
    color: ${props=>props.theme.textColor};
`;