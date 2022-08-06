import * as Style from './Style';

const Question = (props) => {
    let answers = props.question.answers;
    let error = answers.some(answer => answer.status !== answer.status1 ? true : false);
 
    return (
        <Style.Form>        
                <Style.Content >
                    <Style.Question error={error}>
                        {props.question.question}
                    </Style.Question>
                </Style.Content>
        </Style.Form>
    );
}
export default Question; 