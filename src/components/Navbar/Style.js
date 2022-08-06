import styled from 'styled-components';

export const menuOn = {
    width: '250px',
    opacity: '1'  
}
export const menuOff = {
    off:true,
    width: '250px',
    opacity: '0', 
}

export const Menu = styled.div`
    display: flex; 
    flex-direction: column;
    flex: 0 0 auto;
    width: ${props=>props.menu.width};
    box-sizing: border-box;
    padding: 10px;
    align-items: right;
    transition: 0.1s ease;
    background-color: ${props => props.theme.iconColor};
    overflow: hidden;
    position: absolute;
    opacity: ${props=>props.menu.off ? '0':'1'};
    top: 70px;
    left: 10px;
    z-index: ${props=>props.menu.off ? '0':'100'};
    pointer-events: ${props=>props.menu.off ? 'none':''};;
    box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
    border-radius: ${props => props.theme.borderRadius};  
`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;   
    height: 100%;
    background-color: inherit;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar { 
        width: 0; 
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 100%;   
    height: 100%;
    margin-top: 5px;
    background-color: inherit;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar { 
        width: 0; 
    }
`;





