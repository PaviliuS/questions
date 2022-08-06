import React from 'react';
import * as Style from './Style';
import { VscTrash } from "react-icons/vsc";
import { useState } from 'react';

const Question = (props) => {
    let [answers, setAnswers] = useState(false);

    const onClickSetAnswers = () => {
        answers === false ? setAnswers(true) : setAnswers(false);
    }

    return (
        <Style.Question>
            <Style.Text onClick={()=>onClickSetAnswers()}>{props.question.question}</Style.Text> 
        </Style.Question>
    );
}

const Collection = (props) => {
    let [questions, setQuestions] = useState(false);

    const onClickSetQuestions = () => {
        questions === false ? setQuestions(true) : setQuestions(false);
    }

    let questionsList = props.collection.questions.map(question => { return <Question key={question.id} question={question}></Question> });

    return (
        <Style.Collection>
            <Style.Content>
                <Style.Title>
                    <Style.Id onClick={() => onClickSetQuestions()}>{props.index}</Style.Id>
                    <Style.Name onClick={() => onClickSetQuestions()}>{props.collection.name}</Style.Name>

                    <Style.Options>
                        <Style.DeleteCollection onClick={() => props.deleteCollection(props.collection.id)}>
                            <VscTrash />
                        </Style.DeleteCollection>
                    </Style.Options>
                </Style.Title>

                <Style.List displayList={questions}>{questionsList}</Style.List>
            </Style.Content>
        </Style.Collection>
    );
};

export default Collection;