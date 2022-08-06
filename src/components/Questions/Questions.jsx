import * as Style from './Style';
import QuestionForm from './QuestionsForm/QuestionForm';
import SearchForm from './SearchForm/SearchForm';
import Question from './Question/Question';
import { useContext, useState } from 'react';
import { VscAdd, VscSymbolKey, VscSync, VscClose, VscSearch } from "react-icons/vsc";
import { LangContext } from '../../lang/lang';

const Questions = (props) => {
    let [lang] = useContext(LangContext)
    let [addForm, setAddForm] = useState(false);
    let [searchForm, setSearchForm] = useState(false);

    const onClickSetAddForm = () => {
        addForm === false ? setAddForm(true) : setAddForm(false);
        setSearchForm(false);
    }
    const onClickSetSearchForm = () => {
        searchForm === false ? setSearchForm(true) : setSearchForm(false);
        setAddForm(false);
    }

    let questionsCount = 0;
    let questions = props.questions.map(element => {
        questionsCount++;
        return <Question key={element.id} index={questionsCount} deleteQuestion={props.deleteQuestion} element={element}></Question>
    });

    let searchQuestionsCount = 0;
    let searchQuestions = props.searchQuestion.map(element => {
        searchQuestionsCount++;
        return <Question key={element.id} index={searchQuestionsCount} deleteQuestion={props.deleteQuestion} element={element}></Question>
    });

    return (
        <Style.Questions>
            <Style.Content>
                <Style.Label >
                    {addForm || searchForm ? '' : lang.questions}
                    {searchForm ? lang.searchQuestions : ''}
                    {addForm ? lang.addQuestion : ''}
                </Style.Label>
                <Style.Options>
                    <Style.AddQuestion onClick={() => onClickSetAddForm()}>
                        {addForm === false ? <VscAdd /> : <VscClose />}
                    </Style.AddQuestion>

                    <Style.SortQuestion onClick={() => props.sortQuestions()}>
                        <VscSymbolKey />
                    </Style.SortQuestion>

                    <Style.ReverseQuestion onClick={() => props.reverseQuestions()}>
                        <VscSync />
                    </Style.ReverseQuestion>

                    <Style.SearchQuestion onClick={() => onClickSetSearchForm()}>
                        <VscSearch />
                    </Style.SearchQuestion>
                </Style.Options>

                {addForm ? <QuestionForm addQuestion={props.addQuestion}></QuestionForm> : ''}
                {searchForm ? <SearchForm searchQuestions={props.searchQuestions}></SearchForm> : ''}

                <Style.List>
                    {searchForm ? searchQuestions : ''} 
                    {addForm || searchForm ? '' : questions}    
                </Style.List>
            </Style.Content>
        </Style.Questions>
    );
}

export default Questions; 