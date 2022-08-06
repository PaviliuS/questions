import React from 'react';
import * as Style from './Style';
import {VscTrash} from "react-icons/vsc";

const QuestionDelete = (props) => {
    return (
        <Style.Question>
            <Style.Content>
                <Style.Title>
                    <Style.Id >{props.index}</Style.Id>
                    <Style.Name >{props.question.question}</Style.Name>
                    <Style.Options>
                        <Style.DeleteForCollection onClick={() => props.deleteForCollection(props.question.id)}><VscTrash /></Style.DeleteForCollection>
                    </Style.Options>
                </Style.Title>
            </Style.Content>
        </Style.Question>
    );
};

export default QuestionDelete;