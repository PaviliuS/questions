import styled from 'styled-components';

export const App = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    width: 100%;
    background-color: ${props=> props.theme.backgroundColor};
    color: ${props=> props.theme.color};
    align-items: center;
    transition: 0.1s;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
   
    @media (min-width: 1200px){
        width: 1140px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 960px;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        width: 720px;
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        width: 540px;
    }
    @media (max-width: 576px)  {
        width: 100%;
    }
`;

export const Route = styled.div`  
    display: flex;
    width: 100%;
    height: 100%;
`;