import { combineReducers } from 'redux';
import presidentsReducer from './presidents.js';
import transcriptsReducer from './transcripts.js';
import watsonReducer from './watson.js';

export default combineReducers({
    presidents: presidentsReducer,
    transcripts: transcriptsReducer,
    watson: watsonReducer
});