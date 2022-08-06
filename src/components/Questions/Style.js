import styled from 'styled-components';

export const Questions = styled.div`
    display: flex; 
    width: 100%;
    color: ${props => props.theme.textColor};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center; 
    width: 100%;
    padding: 10px;
`;

export const Label = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 120px;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    font-size: ${props=>props.theme.textSizeTitle};
    font-weight: 500;
    box-sizing: border-box;
    letter-spacing: 1px;

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

export const Options = styled.div`
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: flex-end;
`;

export const AddQuestion = styled.div`
    display: flex;
    font-size: ${props=>props.theme.textSizeL};
    width: 50px;
    height: 50px;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const SortQuestion = styled.div`
    display: flex;
    font-size: ${props=>props.theme.textSizeL};
    width: 50px;
    height: 50px;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ReverseQuestion = styled.div`
    display: flex;
    font-size: ${props=>props.theme.textSizeL};
    width: 50px;
    height: 50px;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
export const SearchQuestion = styled.div`
    display: flex;
    font-size: ${props=>props.theme.textSizeL};
    width: 50px;
    height: 50px;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;