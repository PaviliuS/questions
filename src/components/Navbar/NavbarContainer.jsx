import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const NavbarContainer =(props)=>{
    return(<Navbar {...props} ></Navbar>);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);