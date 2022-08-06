import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Style from './Style';
import * as yup from 'yup';
import { LangContext } from '../../../lang/lang';
import { useReducer } from 'react';

const validationSchema = yup.object({
    question: yup
        .string('Enter your email')
        .required('Поле не заполнено'),
});

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


const QuestionForm = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    let [lang] = useContext(LangContext);

    const formik = useFormik({
        initialValues: {
            question: '',
            var1Text: '',
            var2Text: '',
            var3Text: '',
            var4Text: '',
            var5Text: '',
            var1CheckBox: '',
            var2CheckBox: '',
            var3CheckBox: '',
            var4CheckBox: '',
            var5CheckBox: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            props.addQuestion(values);
            for (let key in values) {
                values[key] = '';
            }
        }
    }
    );
    return (
        <Style.Form onSubmit={formik.handleSubmit}>
            <Style.Item>
                <Style.TextArea
                    id="question"
                    name="question"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.question}
                    placeholder={lang.question}
                />
                {formik.touched.question && Boolean(formik.errors.question) ? <Style.Error>{formik.errors.question}</Style.Error> : ''}
            </Style.Item>

            <Style.Item>
                <Style.Data>
                    <Style.Text
                        id="var1Text"
                        name="var1Text"
                        type="textBox"
                        onChange={formik.handleChange}
                        value={formik.values.var1Text}
                        placeholder={lang.answer + ' 1'}
                    />
                    <Style.InputBlock status={state.checkBox_1} onClick={() => dispatch({ type: 'setCheckBox_1' })}>
                        <Style.CheckBox
                            id="var1CheckBox"
                            name="var1CheckBox"
                            type="checkBox"
                            onChange={formik.handleChange}
                            value={formik.values.var1CheckBox}
                        />
                    </Style.InputBlock>
                </Style.Data>
            </Style.Item>

            <Style.Item>

                <Style.Data>
                    <Style.Text
                        id="var2Text"
                        name="var2Text"
                        onChange={formik.handleChange}
                        value={formik.values.var2Text}
                        placeholder={lang.answer + ' 2'}
                    />
                    <Style.InputBlock status={state.checkBox_2} onClick={() => dispatch({ type: 'setCheckBox_2' })}>
                        <Style.CheckBox
                            id="var2CheckBox"
                            name="var2CheckBox"
                            type="checkBox"
                            onChange={formik.handleChange}
                            value={formik.values.var2CheckBox}
                        /></Style.InputBlock>

                </Style.Data>
            </Style.Item>
            <Style.Item>

                <Style.Data>
                    <Style.Text
                        id="var3Text"
                        name="var3Text"
                        onChange={formik.handleChange}
                        value={formik.values.var3Text}
                        placeholder={lang.answer + ' 3'}
                    /><Style.InputBlock status={state.checkBox_3} onClick={() => dispatch({ type: 'setCheckBox_3' })}>
                        <Style.CheckBox
                            id="var3CheckBox"
                            name="var3CheckBox"
                            type="checkBox"
                            onChange={formik.handleChange}
                            value={formik.values.var3CheckBox}
                        /></Style.InputBlock>
                </Style.Data>
            </Style.Item>
            <Style.Item>

                <Style.Data>
                    <Style.Text
                        id="var4Text"
                        name="var4Text"
                        onChange={formik.handleChange}
                        value={formik.values.var4Text}
                        placeholder={lang.answer + ' 4'}
                    /><Style.InputBlock status={state.checkBox_4} onClick={() => dispatch({ type: 'setCheckBox_4' })}>
                        <Style.CheckBox
                            id="var4CheckBox"
                            name="var4CheckBox"
                            type="checkBox"
                            onChange={formik.handleChange}
                            value={formik.values.var4CheckBox}
                        /></Style.InputBlock>
                </Style.Data>
            </Style.Item>
            <Style.Item>

                <Style.Data>
                    <Style.Text
                        id="var5Text"
                        name="var5Text"
                        onChange={formik.handleChange}
                        value={formik.values.var5Text}
                        placeholder={lang.answer + ' 5'}

                    /><Style.InputBlock status={state.checkBox_5} onClick={() => dispatch({ type: 'setCheckBox_5' })}>
                        <Style.CheckBox
                            id="var5CheckBox"
                            name="var5CheckBox"
                            type="checkBox"
                            onChange={formik.handleChange}
                            value={formik.values.var5CheckBox}
                        /></Style.InputBlock>
                </Style.Data>
            </Style.Item>
            <Style.Button type="submit" disabled={!formik.isValid}>{lang.add}</Style.Button>
        </Style.Form>

    );
};

export default QuestionForm;