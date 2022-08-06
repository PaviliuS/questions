import React from "react";
import Collection from "./StartCollection";
import {getCollectionActionCreator,setCollectionCheckActionCreator, setCollectionReadyActionCreator} from "../../redux/collections-reducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const StartCollectionContainer = (props) => {
    let {id} = useParams();
    return (
       <Collection {...props} id={id}></Collection>
    );
}

const mapStateToProps = (state) => {
    return {
        collection: state.collectionsPage.currentCollection,
        currentCollectionCheck:state.collectionsPage.currentCollectionCheck,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCollection: (id) => {
            dispatch(getCollectionActionCreator(id));
        },
        setCollectionCheck: (question) => {
            dispatch(setCollectionCheckActionCreator(question));
        },
        setCollectionReady: (id, name) => {
            dispatch(setCollectionReadyActionCreator(id, name));
        },
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(StartCollectionContainer);