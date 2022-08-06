import * as Style from './Style';
import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { useReducer } from 'react';
import { LangContext } from '../../../../lang/lang';

const initialState = { checkBox_1: false, checkBox_2: false, checkBox_3: false, checkBox_4: false, checkBox_5: false };
const reducer = (state, action) => {
    switch (action.type) {
        case 'setCheckBox_1': {
            let stateCopy = { ...state }
            stateCopy.checkBox_1 === false ? stateCopy.checkBox_1 = true : stateCopy.checkBox_1 = false;
            return stateCopy;
        }
        case 'setCheckBox_2': {
            let stateCopy = { ...state }
            stateCopy.checkBox_2 === false ? stateCopy.checkBox_2 = true : stateCopy.checkBox_2 = false;
            return stateCopy;
        }
        case 'setCheckBox_3': {
            let stateCopy = { ...state }
            stateCopy.checkBox_3 === false ? stateCopy.checkBox_3 = true : stateCopy.checkBox_3 = false;
            return stateCopy;
        }
        case 'setCheckBox_4': {
            let stateCopy = { ...state }
            stateCopy.checkBox_4 === false ? stateCopy.checkBox_4 = true : stateCopy.checkBox_4 = false;
            return stateCopy;
        }
        case 'setCheckBox_5': {
            let stateCopy = { ...state }
            stateCopy.checkBox_5 === false ? stateCopy.checkBox_5 = true : stateCopy.checkBox_5 = false;
            return stateCopy;
        }
        default:
            return state;
    }
}

const Question = (props) => {
    let [lang] = useContext(LangContext);
    const [state, dispatch] = useReducer(reducer, initialState)

    let [status, setStatus] = useState(true);
    let answers = props.question.answers;

    const formik = useFormik({
        initialValues: {
            value1: false,
            value2: false,
            value3: false,
            value4: false,
            value5: false,
        },

        onSubmit: values => {
            let newQuestion = {};
            newQuestion.id = props.question.id;
            newQuestion.question = props.question.question;

            if (0 in answers) {
                answers[0].status1 = values.value1;
            }
            if (1 in answers) {
                answers[1].status1 = values.value2;
            }
            if (2 in answers) {
                answers[2].status1 = values.value3;
            }
            if (3 in answers) {
                answers[3].status1 = values.value4;
            }
            if (4 in answers) {
                answers[4].status1 = values.value5;
            }
            newQuestion.answers = answers;
            props.setCollectionCheck(newQuestion);
            setStatus(false);
        }
    }
    );

    return (
        <Style.Form onSubmit={formik.handleSubmit} statusContent={status}>
            <Style.Content statusContent={status}>
                <Style.Question>
                    {props.question.question}
                </Style.Question>
                <Style.List>
                    {0 in answers ?
                        <Style.Item>
                            <Style.Text>{answers[0].text}</Style.Text>
                            <Style.InputBlock status={state.checkBox_1} onClick={() => dispatch({ type: 'setCheckBox_1' })}>
                                <Style.Input
                                    id="value1"
                                    name="value1"
                                    type={'checkbox'}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.value1}
                                ></Style.Input>
                            </Style.InputBlock>
                        </Style.Item>
                        : ''}

                    {1 in answers ?
                        <Style.Item>
                            <Style.Text>{answers[1].text}</Style.Text>
                            <Style.InputBlock status={state.checkBox_2} onClick={() => dispatch({ type: 'setCheckBox_2' })}>
                                <Style.Input
                                    id="value2"
                                    name="value2"
                                    type={'checkbox'}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.value2}
                                ></Style.Input>
                            </Style.InputBlock>
                        </Style.Item>

                        : ''}

                    {2 in answers ?
                        <Style.Item>
                            <Style.Text>{answers[2].text}</Style.Text>
                            <Style.InputBlock status={state.checkBox_3} onClick={() => dispatch({ type: 'setCheckBox_3' })}>
                                <Style.Input
                                    id="value3"
                                    name="value3"
                                    type={'checkbox'}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.value3}
                                ></Style.Input>
                            </Style.InputBlock>
                        </Style.Item>
                        : ''}

                    {3 in answers ?
                        <Style.Item>
                            <Style.Text>{answers[3].text}</Style.Text>
                            <Style.InputBlock status={state.checkBox_4} onClick={() => dispatch({ type: 'setCheckBox_4' })}>
                                <Style.Input
                                    id="value4"
                                    name="value4"
                                    type={'checkbox'}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.value4}
                                ></Style.Input></Style.InputBlock>
                        </Style.Item>
                        : ''}

                    {4 in answers ?
                        <Style.Item>
                            <Style.Text>{answers[4].text}</Style.Text>
                            <Style.InputBlock status={state.checkBox_5} onClick={() => dispatch({ type: 'setCheckBox_5' })}>
                                <Style.Input
                                    id="value5"
                                    name="value5"
                                    type={'checkbox'}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.value5}
                                ></Style.Input>
                            </Style.InputBlock>
                        </Style.Item>
                        : ''}

                    <Style.Control>
                        <Style.Button statusContent={status} type='submit'>{lang.toAnswer}</Style.Button>
                    </Style.Control>
                </Style.List>
            </Style.Content>
        </Style.Form>
    );
}

export default Question;