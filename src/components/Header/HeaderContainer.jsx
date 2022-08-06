import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { menuOn,menuOff } from '../Navbar/Style'
import { useState } from "react";

const HeaderContainer = (props) => {
    const [menu, setMenu] = useState("menuOff");
    
    const switchMenu = () => {
        menu === "menuOn" ? setMenu("menuOff") : setMenu("menuOn");
    };

    return (
       <Header {...props} menu={menu === "menuOn" ? menuOn : menuOff} switchMenu={switchMenu}></Header>
    );
}

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);