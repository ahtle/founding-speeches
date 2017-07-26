import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import reducers from './reducers/combineReducers';

export default createStore(reducers, applyMiddleware(thunk, reduxPackMiddleware));