import React from 'react';
import * as Style from './Style';
import {VscDebugStart} from "react-icons/vsc";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Question = (props) => {
    return (
        <Style.Question>
            <Style.Text >{props.question.question}</Style.Text>      
        </Style.Question>
    );
}

const Collection = (props) => {
    let navigate = useNavigate();
    const goStart = () => {
        navigate(`/start/${props.collection.id}`);
      };

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
                        <Style.StartCollection onClick={() => goStart()}>
                            <VscDebugStart />
                        </Style.StartCollection>
                    </Style.Options>
                </Style.Title>

                <Style.List displayList={questions}>{questionsList}</Style.List>
            </Style.Content>
        </Style.Collection>
    );
};

export default Collection;