import {applyMiddleware, combineReducers, createStore } from 'redux';
import questionsReducer from './questions-reducer';
import collectionsReducer from './collections-reducer';
import startReducer from './start-reducer';
import thunkMiddleWare from 'redux-thunk';
import { compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducers = combineReducers(
    {
        questionsPage: questionsReducer,
        collectionsPage: collectionsReducer,
        startPage: startReducer,
    }
);

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;