const GET_COLLECTION = 'GET-COLLECTION';

let initialState = {
    collections:null,
};

const startReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_COLLECTION:{
            let stateCopy = {...state};

            return stateCopy;
        } 
        default:
            return state;
    }
}

export const getCollectionActionCreator = (id) => {
    return {type: GET_COLLECTION, id: id}
}

export default startReducer;