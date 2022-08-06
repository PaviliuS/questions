import * as Style from './Style';
import { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import QuestionBefore from './Question/QuestionBefore/QuestionBefore';
import QuestionAfter from './Question/QuestionAfter/QuestionAfter';
import { LangContext } from '../../lang/lang';

const Collection = (props) => {
    let lang = useContext(LangContext);

    useEffect(() => {
        props.getCollection(props.id);
    }, [props.collection]);

    let navigate = useNavigate();
    const goStart = () => {
        navigate(`/start/`);
    };

    let [answers, setAnswers] = useState(false);
    let questionsBeforeLength = props.collection.questions.length;
    let questionsAfterLength = props.currentCollectionCheck.questions.length;

    let questionsBefore = props.collection.questions.map(element => { return <QuestionBefore key={element.id} setCollectionCheck={props.setCollectionCheck} question={element}></QuestionBefore> })
    let questionsAfter = props.currentCollectionCheck.questions.map(element => { return <QuestionAfter key={element.id} question={element}></QuestionAfter> })

    let count = 0;
    // props.currentCollectionCheck.questions.map(element => { if (element.answers.every(ans => ans.status === ans.status1)) return count++ });
    props.currentCollectionCheck.questions.map(element => element.answers.every(ans => ans.status === ans.status1) === true ? count++ : '' );

    const formik = useFormik({
        initialValues: {},
        onSubmit: values => {
            props.setCollectionReady(props.id, props.collection.name);
            setAnswers(true);
        }
    }
    );

    return (
        <Style.Collection>
            {!answers ?
                <Style.Content>
                    <Style.Name>{props.collection.name}</Style.Name>

                    <Style.List>{questionsBefore}</Style.List>

                    <Style.Form onSubmit={formik.handleSubmit}>
                        <Style.Button type="submit" >{lang[0].endCollection}</Style.Button>
                    </Style.Form>
                </Style.Content>
                :
                <Style.Content>
                    <Style.Name>{props.collection.name}</Style.Name>

                    <Style.List>{questionsAfter}</Style.List>

                    {lang[0].lang === 'ru'? <Style.Notice>Вы ответили на {questionsAfterLength} из {questionsBeforeLength} вопросов, количество правильных ответов {count}</Style.Notice>:''}
                    {lang[0].lang === 'en'? <Style.Notice>You answered for {questionsAfterLength} / {questionsBeforeLength} questions, right answers {count}</Style.Notice>:''}

                    <Style.Form>
                        <Style.Button onClick={() => goStart()} >{lang[0].newCollection}</Style.Button>
                    </Style.Form>
                </Style.Content>
            }
        </Style.Collection>
    );
}

export default Collection; 