import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducer-index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};
export const createNewStore = (state = initialState) => createStore(
    combineReducers(reducers),
    state,
    composeEnhancers(applyMiddleware(thunk))
);

let store;
export const getStore = () => store || (store = createNewStore());
