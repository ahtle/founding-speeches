import { sortByDate } from '../utils';
// import { combineReducers } from 'redux';
// import watson from './watson';

const initialState = {
    presidents: [],
    transcripts: [],
    watson: [],
    loaded: false,
    error : null,
};

export default (state = initialState, action) => {

    switch(action.type){
        // load president
        case 'LOAD_PRESIDENTS_REQUEST':
            return {
                ...state,
                loaded: false
            };
        case 'LOAD_PRESIDENTS_SUCCESS':
            return {
                ...state,
                loaded: true,
                presidents: action.payload
            };
        case 'LOAD_PRESIDENTS_FAILURE':
            return {
                ...state,
                loaded: true,
                presidents: action.payload
            };

        // load transcripts

        case 'LOAD_PRESIDENT_TRANSCRIPTS_REQUEST':
            return {
                ...state,
                loaded: false
            };
        case 'LOAD_PRESIDENT_TRANSCRIPTS_SUCCESS':
            return {
                ...state,
                loaded: true,
                transcripts: action.payload
            };
        case 'LOAD_PRESIDENT_TRANSCRIPTS_FAILURE':
            return {
                ...state,
                loaded: true,
                transcripts: action.payload
            };
       
        
        // post new transcript
        
        case 'POST_TRANSCRIPT_REQUEST':
            return {
                ...state,
                loaded: false,
            };
        case 'POST_TRANSCRIPT_SUCCESS':
            const transcripts = state.transcripts.slice();
            transcripts.push(action.payload);
            sortByDate(transcripts);
            return {
                ...state,
                loaded: true,
                transcripts
            };

        case 'POST_TRANSCRIPT_FAILURE':
            return {
                ...state,
                loaded: true,
                error: action.payload
            };
        
        // delete a transcript
        
        case 'DELETE_TRANSCRIPT_REQUEST':
            return {
                ...state,
                loaded: false
            };
        
        case 'DELETE_TRANSCRIPT_SUCCESS':
            const transcriptsArr = state.transcripts.slice();    
            transcriptsArr.splice(action.payload, 1);
            return {
                ...state,
                loaded: true,
                transcripts: transcriptsArr
            }

        case 'DELETE_TRANSCRIPT_FAILURE':
            return {
                ...state,
                loaded: true
            }

        // get Watson insight
        case 'WATSON_INSIGHT_REQUEST':
            return {
                ...state,
                loaded: false
            };
        case 'WATSON_INSIGHT_SUCCESS':
            return {
                ...state,
                loaded: true,
                watson: action.payload
            };
        case 'WATSON_INSIGHT_FAILURE':
            return {
                ...state,
                loaded: true,
                watson: [],
            };
        
        // clear Watson state

        case 'CLEAR_WATSON_STATE':
            return {
                ...state,
                watson: [],
                loaded: true
            }

        // set loaded state

        case 'SET_STATE_LOADED':
            return {
                ...state,
                loaded: action.payload
            }

        default:
            return state;
    }

};

// export default combineReducers({
//   ...rootReducer,
//   watson: watson
// });