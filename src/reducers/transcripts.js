import { sortByDate } from '../utils';

const initialState = {
    transcripts: [],
    watson: [],
    loaded: false
};

export default function transcripts(state = initialState, action){

    switch(action.type){

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
                loaded: true
            };
        
        // delete a transcript
        
        default:
            return state;
    }

};