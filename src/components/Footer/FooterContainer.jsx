import React from "react";
import Footer from "./Footer";
import { connect } from "react-redux";

const FooterContainer = (props) => {

    return (
  
       <Footer ></Footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);