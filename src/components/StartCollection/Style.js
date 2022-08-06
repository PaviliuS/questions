import styled from 'styled-components';

export const Collection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
`;

export const Form = styled.form`      
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    font-weight: 500;
    box-sizing: border-box;
    letter-spacing: 1px;
    margin: 20px 0px;

    @media (min-width: 1200px){
        
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        
    }
    @media (max-width: 992px) and (min-width: 768px)  {
       
    }
    @media (max-width: 768px) and (min-width: 576px)  {
   
    }
    @media (max-width: 576px)  {
 
    }
`;

export const Button = styled.button` 
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 250px;
    background: ${props => props.theme.accentColor1};
    border: 0px;
    border-radius: 15px;
    height: 60px;
    text-decoration: none;
    color: white;
    font-family: 'Roboto';
    font-size: 14px;

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

export const Name = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 120px;
    margin-bottom: 100px;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    font-size: ${props=>props.theme.textSizeTitle};
    font-weight: 500;
    box-sizing: border-box;
    letter-spacing: 1px;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis; 
    word-break: break-all ;
    
    @media (min-width: 1200px){
        
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        
    }
    @media (max-width: 992px) and (min-width: 768px)  {
       
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props=>props.theme.textSizeTitleMD};
    }
    @media (max-width: 576px)  {
        font-size: ${props=>props.theme.textSizeTitleMD};
    }
`;

export const List = styled.div`
`;

export const Notice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px 0px;
    font-size: ${props=>props.theme.textSizeM};
    box-sizing: border-box;
`;