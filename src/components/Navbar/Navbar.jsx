import {VscGlobe,VscPlay,VscLibrary,VscUnverified,VscSymbolColor } from "react-icons/vsc";
import * as Styled from './Style'
import Link from './Link/Link';
import Button from "./Button/Button";
import { useContext } from "react";
import { LangContext } from '../../lang/lang';


const Navbar = (props) => {
    let [lang, setLang] = useContext(LangContext);

    return (
        <Styled.Menu menu={props.menu}>
            <Styled.Links>
                <Link menu={props.menu} url={'start'} address={`/start/`} component={<VscPlay />} text={lang.startCollection}></Link>
                <Link menu={props.menu} url={'collections'} address={'/collections'} component={<VscLibrary />} text={lang.collections}></Link>
                <Link menu={props.menu} url={'questions'} address={'/questions'} component={<VscUnverified />} text={lang.questions}></Link>
            </Styled.Links>
            <Styled.Buttons>
                <Button action={setLang} menu={props.menu}  component={<VscGlobe/>} text={lang.changeLang}></Button>      
                <Button action={props.switchTheme} menu={props.menu}  component={<VscSymbolColor/>} text={lang.changeTheme}></Button>        
            </Styled.Buttons>
        </Styled.Menu>
    );
}

export default Navbar;