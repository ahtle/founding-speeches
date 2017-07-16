import { combineReducers } from 'redux';
import presidents from './presidents.js';
import transcripts from './transcripts.js';
import watson from './watson.js';

export default combineReducers({
    presidents,
    transcripts,
    watson
});