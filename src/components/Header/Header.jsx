import * as Style from './Style';
import { VscMenu } from "react-icons/vsc";
import NavbarContainer from '../Navbar/NavbarContainer';

const Header = (props) => {
    return (
        <Style.Header>
            <Style.Content>
                <Style.Button onClick={()=>{props.switchMenu()}}><VscMenu/></Style.Button>
                <Style.Logo>QQuestions</Style.Logo>
            </Style.Content>
            <NavbarContainer menu={props.menu} switchTheme={props.switchTheme}></NavbarContainer>
        </Style.Header>
    );
}
export default Header; 