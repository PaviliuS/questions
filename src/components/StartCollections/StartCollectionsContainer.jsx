import React from "react";
import Collections from "./StartCollections";
import {reverseCollectionsActionCreator,sortCollectionsActionCreator,searchCollectionsActionCreator} from "../../redux/collections-reducer";
import { connect } from "react-redux";

const StartCollectionsContainer = (props) => {
    return (
       <Collections {...props} ></Collections>
    );
}

const mapStateToProps = (state) => {
    return {
        collections: state.collectionsPage.collections,
        searchCollection: state.collectionsPage.searchCollections,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortCollections: () => {
            dispatch(sortCollectionsActionCreator());
        },
        reverseCollections: () => {
            dispatch(reverseCollectionsActionCreator());
        },
        searchCollections: (search) => {
            dispatch(searchCollectionsActionCreator(search));
        },
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(StartCollectionsContainer);