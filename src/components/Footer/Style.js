import styled from 'styled-components';

export const Footer = styled.footer`
    display: flex; 
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center; 
`;

export const Logo = styled.div`
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    display: flex;
    color: ${props => props.theme.textColor};
    margin: 10px 0px;
`;