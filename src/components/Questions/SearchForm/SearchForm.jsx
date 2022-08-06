import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Style from './Style';
import { VscSearch } from "react-icons/vsc";
import { LangContext } from '../../../lang/lang';

const SearchForm = (props) => {
    let [lang] = useContext(LangContext);
    const formik = useFormik({
        initialValues: {
            search: '',
        }, 
        onSubmit: values => {
            props.searchQuestions(values.search)
        }
    }
    );

    return (
        <Style.Form onSubmit={formik.handleSubmit}>
            <Style.Item>
                <Style.Icon><VscSearch /></Style.Icon> 
                <Style.Text
                    id="search"
                    name="search" 
                    onChange={formik.handleChange}      
                    onBlur={formik.handleBlur}
                    value={formik.values.search}     
                    placeholder={lang.search}   
                />
            </Style.Item>
            <Style.Button type="submit" >{lang.search}</Style.Button>
        </Style.Form>
    );
};

export default SearchForm;