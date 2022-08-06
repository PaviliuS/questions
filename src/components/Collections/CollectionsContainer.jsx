import React from "react";
import Collections from "./Collections";
import {addCollectionActionCreator,deleteCollectionActionCreator, reverseCollectionsActionCreator,sortCollectionsActionCreator,searchCollectionsActionCreator,addForCollectionActionCreator,deleteForCollectionActionCreator} from "../../redux/collections-reducer";
import {searchQuestionsActionCreator} from "../../redux/questions-reducer";

import { connect } from "react-redux";


const CollectionsContainer = (props) => {


    return (
  
       <Collections {...props} ></Collections>
    );
}

const mapStateToProps = (state) => {
    return {
        collections: state.collectionsPage.collections,
        searchCollection: state.collectionsPage.searchCollections,
        questions: state.questionsPage.questions,
        searchQuestions:state.questionsPage.searchQuestions,

        questionsCollections: state.collectionsPage.questions,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCollection: (question) => {
            dispatch(addCollectionActionCreator(question));
        },
        deleteCollection: (id) => {
            dispatch(deleteCollectionActionCreator(id));
        },
        sortCollections: () => {
            dispatch(sortCollectionsActionCreator());
        },
        reverseCollections: () => {
            dispatch(reverseCollectionsActionCreator());
        },
        searchCollections: (search) => {
            dispatch(searchCollectionsActionCreator(search));
        },
        addForCollection: (question) => {
            dispatch(addForCollectionActionCreator(question));
        },
        deleteForCollection: (id) => {
            dispatch(deleteForCollectionActionCreator(id));
        },

        searchQuestion: (search) => {
            dispatch(searchQuestionsActionCreator(search));
        },


    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsContainer);