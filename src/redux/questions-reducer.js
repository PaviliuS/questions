const ADD_QUESTION = 'ADD-QUESTION';
const DELETE_QUESTION = 'DELETE-QUESTION';
const SORT_QUESTIONS = 'SORT-QUESTIONS';
const REVERSE_QUESTIONS = 'REVERSE-QUESTIONS';
const SEARCH_QUESTIONS = 'SEARCH-QUESTIONS';

let initialState = {
    questions: [
        {id:'Q1', question: 'Из какого фильма Прекрасный принц?', answers:[
            {text:'Золушка',status:true},
            {text:'Русалочка',status:false},
            {text:'Спящая красавица',status:false},
            {text:'Мулан',status:false}], },
        {id:'Q2', question: 'Из какой страны родом Джастин Бибер?', answers:[
            {text:'Канада',status:true},
            {text:'США',status:false},
            {text:'Франция',status:false},
            {text:'Англия',status:false}], },
        {id:'Q3', question: 'В сиквеле какого праздничного фильма снялся Дональд Трамп?', answers:[
            {text:'Один дома',status:false},
            {text:'Один дома 2: Затерянный в Нью-Йорке',status:true},
            {text:'Ричи Рич',status:false},
            {text:'Маленькие негодяи',status:false}], },
        {id:'Q4', question: 'Какой герой мультфильма живет в ананасе под водой?', answers:[
            {text:'Камбала',status:false},
            {text:'Немо',status:false},
            {text:'Рик и Морти',status:false},
            {text:'Губка Боб Квадратные Штаны',status:true}], },
        {id:'Q5', question: 'Что является национальным животным Шотландии?', answers:[
            {text:'Лошадь',status:false},
            {text:'Единорог',status:true},
            {text:'Волк',status:false},
            {text:'Корова',status:false}], },
        {id:'Q6', question: 'В каком известном романе фигурировали Джо, Мег, Бет и Эми Марч?', answers:[
            {text:'Убить пересмешника',status:false},
            {text:'Том Сойер',status:false},
            {text:'Маленькие женщины',status:true},
            {text:'Моби Дик',status:false}], },
        {id:'Q7', question: 'Какая страна производит больше всего кофе в мире?', answers:[
            {text:'Колумбия',status:false},
            {text:'Индонезия',status:false},
            {text:'Бразилия',status:true},
            {text:'Вьетнам',status:false}], },
        {id:'Q8', question: 'Как называются четыре Факультета Хогвартса?', answers:[
            {text:'Гриффиндор, Пуффендуй, Когтевран и Слизерин',status:true},
            {text:'Грифон, Ворон, Слон и Змея',status:false},
            {text:'Север, Восток, Запад и Юг',status:false},
            {text:'Красный, Синий, Зеленый и Оранжевый',status:false}], },
        {id:'Q9', question: 'Какой вкус у Куантро?', answers:[
            {text:'Базилика',status:false},
            {text:'Лимона',status:false},
            {text:'Ванили',status:false},
            {text:'Апельсина',status:true}], },       
        {id:'Q10', question: 'Как называется колокол часов Вестминстерского дворца в Лондоне?', answers:[
            {text:'Биг Бен',status:true},
            {text:'Броненосец',status:false},
            {text:'Калабаш',status:false},
            {text:'Мумия',status:false}], },
        {id:'Q11', question: 'Кого поцеловала Мадонна на Video Music Awards в 2003 году?', answers:[
            {text:'Дженнифер Лопес и Шакира',status:false},
            {text:'Бритни Спирс и Джанет Джексон',status:false},
            {text:'Бритни Спирс и Кристину Агилеру',status:false},
            {text:'Кристину Агилеру и Кайли Миноуг',status:false}], },
        {id:'Q12', question: 'Какой безалкогольный напиток первым был взят в космос?', answers:[
            {text:'Пепси',status:false},
            {text:'Фанта',status:false},
            {text:'Кока-Кола',status:false},
            {text:'Снапл',status:false}], },
        {id:'Q13', question: 'Сколько весит костюм Чубакки?', answers:[
            {text:'3.6 кг',status:false},
            {text:'7.7 кг',status:false},
            {text:'2.7 кг',status:false},
            {text:'6.8 кг',status:false}], },
        {id:'Q14', question: 'Кто написал знаменитый дневник, скрываясь от нацистов в Амстердаме?', answers:[
            {text:'Анна Франк',status:false},
            {text:'Бриджит Джонс',status:false},
            {text:'Мария Кюри',status:false},
            {text:'Хелен Келлер',status:false}], },
        {id:'Q15', question: 'Что означает термин “пиано”?', answers:[
            {text:'В бодром темпе',status:false},
            {text:'В мягком темпе',status:false},
            {text:'В умеренно медленном темпе',status:false},
            {text:'В быстром темпе',status:false}], },       
        {id:'Q16', question: 'Кто написал эпическую поэму “Потерянный рай”?', answers:[
            {text:'Генри Джеймс',status:false},
            {text:'Джон Китс',status:false},
            {text:'Джон Стейнбек',status:false},
            {text:'Джон Мильтон',status:false}], },
        {id:'Q17', question: 'Из чего сделан самый крепкий дом в “Трех поросятах”?', answers:[
            {text:'Кирпич',status:false},
            {text:'Палочки',status:false},
            {text:'Солома',status:false},
            {text:'Бамбук',status:false}], },
        {id:'Q18', question: 'Как называется маленький пластмассовый кусочек на конце шнурка?', answers:[
            {text:'Строка',status:false},
            {text:'Чехол',status:false},
            {text:'Кружево',status:false},
            {text:'Аглет',status:false}], },
        {id:'Q19', question: 'Сколько длится мгновение?', answers:[
            {text:'60 секунд',status:false},
            {text:'90 секунд',status:false},
            {text:'120 секунд',status:false},
            {text:'180 секунд',status:false}], },
        {id:'Q20', question: 'Какая игрушка была первой, которую рекламировали по телевидению?', answers:[
            {text:'Барби',status:false},
            {text:'Мистер Картофельная Голова',status:false},
            {text:'Духовка с Легкой Выпечкой',status:false},
            {text:'Ракетный Гонщик',status:false}], },
        {id:'Q21', question: 'За какую страну играл Дэвид Бекхэм?', answers:[
            {text:'Испания',status:false},
            {text:'Бразилия',status:false},
            {text:'США',status:false},
            {text:'Англия',status:false}], },       
        {id:'Q22', question: 'Какой диснеевский персонаж в фильме “Русалочка” поет песню “Поцелуй девушку”?', answers:[
            {text:'Камбала',status:false},
            {text:'Себастьян',status:false},
            {text:'Урсула',status:false},
            {text:'Принц Эрик',status:false}], },
        {id:'Q23', question: 'В какой стране находится Прага?', answers:[
            {text:'Испания',status:false},
            {text:'Бразилия',status:false},
            {text:'Чехия',status:false},
            {text:'Англия',status:false}], },
        {id:'Q24', question: 'Какая служба электронной почты принадлежит компании Microsoft?', answers:[
            {text:'Outlook',status:false},
            {text:'Yahoo Mail',status:false},
            {text:'Gmail',status:false},
            {text:'iCloud Mail',status:false}], },
        {id:'Q25', question: 'Как назывался батончик “Сникерс” до его смены названия в 1990 году?', answers:[
            {text:'Race',status:false},
            {text:'Marathon',status:false},
            {text:'Smile',status:false},
            {text:'Sprint',status:false}], },
        {id:'Q26', question: 'Какая самая маленькая планета в нашей Солнечной системе?', answers:[
            {text:'Земля',status:false},
            {text:'Венера',status:false},
            {text:'Марс',status:false},
            {text:'Меркурий',status:true}], },
        {id:'Q27', question: 'Кто был главой государства в Японии во время второй мировой войны?', answers:[
            {text:'Император Хирохито',status:true},
            {text:'Император Муцухито',status:false},
            {text:'Император Акихито',status:false},
            {text:'Император Ёсихито',status:false}], },       
                                                                                            
    ],
    searchQuestions: [],
};

const questionsReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_QUESTION:{
            let newQuestion = { id: `Q${Math.trunc(Math.random() * 1000000)}`, question: action.question.question, answers: []};
            if (action.question.var1Text !== '') newQuestion.answers.push({text:action.question.var1Text, status:action.question.var1CheckBox});
            if (action.question.var2Text !== '') newQuestion.answers.push({text:action.question.var2Text, status:action.question.var2CheckBox});
            if (action.question.var3Text !== '') newQuestion.answers.push({text:action.question.var3Text, status:action.question.var3CheckBox});
            if (action.question.var4Text !== '') newQuestion.answers.push({text:action.question.var4Text, status:action.question.var4CheckBox});
            if (action.question.var5Text !== '') newQuestion.answers.push({text:action.question.var5Text, status:action.question.var5CheckBox});
    
            let stateCopy = {...state};
    
            stateCopy.questions.push(newQuestion);
            stateCopy.questions = [...stateCopy.questions]
            
            return stateCopy;
        }
        case DELETE_QUESTION:{
            let stateCopy = {...state};
 
            stateCopy.questions = stateCopy.questions.filter(question=>question.id !== action.id);
            stateCopy.searchQuestions = stateCopy.searchQuestions.filter(question=>question.id !== action.id);
            
            return stateCopy;
        }
        case SORT_QUESTIONS:{
            let stateCopy = {...state};
     
            stateCopy.questions = stateCopy.questions.sort((a, b) => a.question > b.question ? 1 : -1);
            stateCopy.questions = [...stateCopy.questions ];
            
            return stateCopy;
        }    
        case REVERSE_QUESTIONS:{     
            let stateCopy = {...state}; 
     
            stateCopy.questions = stateCopy.questions.reverse();
            stateCopy.questions = [...stateCopy.questions ];
            
            return stateCopy;
        }
        case SEARCH_QUESTIONS:{   
            let stateCopy = {...state}; 
     
            stateCopy.searchQuestions = stateCopy.questions.filter(question => {
                return question.question.toLowerCase().includes(action.search.toLowerCase())
            });
            stateCopy.searchQuestions = [...stateCopy.searchQuestions ];

            return stateCopy;
        }
        default:
            return state;
    }
}

export const addQuestionActionCreator = (question) => {
    return {type: ADD_QUESTION, question: question}
}
export const deleteQuestionActionCreator = (id) => {
    return {type: DELETE_QUESTION, id: id}
}
export const sortQuestionsActionCreator = () => {
    return {type: SORT_QUESTIONS, }
}
export const reverseQuestionsActionCreator = () => {
    return {type: REVERSE_QUESTIONS, }
}
export const searchQuestionsActionCreator = (search) => {
    return {type: SEARCH_QUESTIONS, search:search}
}

export default questionsReducer;