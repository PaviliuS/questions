import React from 'react';
import * as Style from './Style';
import { VscVerified, VscTrash } from "react-icons/vsc";
import { useState } from 'react';

const Item = (props) => {
    return (
        <Style.Item>
            <Style.Status>{props.various.status ? <VscVerified /> : ''}</Style.Status>
            <Style.Text>{props.various.text}</Style.Text>
        </Style.Item>
    );
}
const Question = (props) => {
    let [answers, setAnswers] = useState(false);

    const onClickSetAnswers = () => {
        answers === false ? setAnswers(true) : setAnswers(false);
    }

    let count = 0;


    let various = props.element.answers.map(element => { count++; return <Item key={count} count={count} various={element}></Item> });
    return (
        <Style.Question>
            <Style.Content>
                <Style.Title>
                    <Style.Id onClick={() => onClickSetAnswers()}>{props.index}</Style.Id>
                    <Style.Name onClick={() => onClickSetAnswers()}>{props.element.question}</Style.Name>
                    
                    <Style.Options>
                        <Style.DeleteQuestion onClick={() => props.deleteQuestion(props.element.id)}>
                            <VscTrash />
                        </Style.DeleteQuestion>
                    </Style.Options>
                </Style.Title>  

                <Style.List displayList={answers}>{various}</Style.List>
            </Style.Content>
        </Style.Question>

    );

};

export default Question;