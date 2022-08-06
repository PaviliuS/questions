import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Style from './Style';
import * as yup from 'yup';
import QuestionAdd from './Question/QuestionAdd';
import QuestionDelete from './Question/QuestionDelete';
import SearchForm from '../SearchForm/SearchForm';
import { LangContext } from '../../../lang/lang';

const validationSchema = yup.object({
    collection: yup
        .string('Enter your email')
        .required('Поле не заполнено'),
});

const CollectionForm = (props) => {
    let [lang] = useContext(LangContext);

    let questionsAddCount = 0;
    let questionsDeleteCount = 0;

    let questionsListAdd = props.searchQuestions.map(question => {
        questionsAddCount++;
        return <QuestionAdd key={question.id} questionsCollections={props.questionsCollections} index={questionsAddCount} question={question} addForCollection={props.addForCollection} deleteForCollection={props.deleteForCollection}></QuestionAdd>
    });

    let questionsListDelete = props.questionsCollections.map(question => {
        questionsDeleteCount++;
        return <QuestionDelete key={question.id} questionsCollections={props.questionsCollections} index={questionsDeleteCount} question={question} addForCollection={props.addForCollection} deleteForCollection={props.deleteForCollection}></QuestionDelete>
    });


    const formik = useFormik({
        initialValues: {
            collection: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {

            props.addCollection(values.collection);
            for (let key in values) {
                values[key] = '';
            }
        }
    }
    );
    return (
        <Style.CollectionForm>
            <Style.Form onSubmit={formik.handleSubmit}>
                <Style.Item>
                    <Style.Text
                        id="collection"
                        name="collection"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.collection}
                        placeholder={lang.collection}
                    />
                    {formik.touched.collection && Boolean(formik.errors.collection) ? <Style.Error>{formik.errors.collection}</Style.Error> : ''}
                </Style.Item>
   

                <Style.Button type="submit" disabled={!formik.isValid}>{lang.add}</Style.Button>
            </Style.Form>

   
            
            <SearchForm searchCollections={props.searchQuestion}>


           
            </SearchForm>

            <Style.Questions>
            {questionsListDelete}
            <Style.Spacer></Style.Spacer>
                {questionsListAdd}
            </Style.Questions>

        </Style.CollectionForm>

    );
};

export default CollectionForm;