import React from "react";
import Questions from "./Questions";
import { connect } from "react-redux";
import {addQuestionActionCreator,deleteQuestionActionCreator, reverseQuestionsActionCreator,sortQuestionsActionCreator,searchQuestionsActionCreator} from "../../redux/questions-reducer";

const QuestionsContainer = (props) => {
    return (
       <Questions {...props} ></Questions>
    );
}

const mapStateToProps = (state) => {
    return {
        questions: state.questionsPage.questions,
        searchQuestion: state.questionsPage.searchQuestions,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addQuestion: (question) => {
            dispatch(addQuestionActionCreator(question));
        },
        deleteQuestion: (id) => {
            dispatch(deleteQuestionActionCreator(id));
        },
        sortQuestions: () => {
            dispatch(sortQuestionsActionCreator());
        },
        reverseQuestions: () => {
            dispatch(reverseQuestionsActionCreator());
        },
        searchQuestions: (search) => {
            dispatch(searchQuestionsActionCreator(search));
        }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);