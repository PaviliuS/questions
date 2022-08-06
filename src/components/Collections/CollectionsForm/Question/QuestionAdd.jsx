import React from 'react';
import * as Style from './Style';
import { VscAdd } from "react-icons/vsc";

const QuestionAdd = (props) => {
    return (
        <Style.Question>
            <Style.Content>
                <Style.Title>
                    <Style.Id >{props.index}</Style.Id>
                    <Style.Name >{props.question.question}</Style.Name>

                    <Style.Options>
                        <Style.AddForCollection onClick={() => props.addForCollection(props.question)}><VscAdd /></Style.AddForCollection>
                    </Style.Options>
                </Style.Title>
            </Style.Content>
        </Style.Question>
    );
};

export default QuestionAdd;