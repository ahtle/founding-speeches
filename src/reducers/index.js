import { sortByDate } from '../utils';

const initialState = {
    presidents: [],
    transcripts: [],
    watson: [],
    error : null,
};

export default (state = initialState, action) => {

    switch(action.type){
        // load president
        case 'LOAD_PRESIDENTS_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'LOAD_PRESIDENTS_SUCCESS':
            return {
                ...state,
                loading: false,
                presidents: action.payload
            };
        case 'LOAD_PRESIDENTS_FAILURE':
            return {
                ...state,
                loading: false,
                presidents: action.payload
            };

        // load transcripts

        case 'LOAD_PRESIDENT_TRANSCRIPTS_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'LOAD_PRESIDENT_TRANSCRIPTS_SUCCESS':
            return {
                ...state,
                loading: false,
                transcripts: action.payload
            };
        case 'LOAD_PRESIDENT_TRANSCRIPTS_FAILURE':
            return {
                ...state,
                loading: false,
                transcripts: action.payload
            };

        // post new transcript
        case 'POST_TRANSCRIPT_REQUEST':
            return {
                ...state,
                loading: true
            };
      case 'POST_TRANSCRIPT_SUCCESS':
           const transcripts = state.transcripts.slice();
           transcripts.push(action.payload);
           sortByDate(transcripts);
           return {
               ...state,
               loading: false,
               transcripts
           };
        case 'POST_TRANSCRIPT_FAILURE':
            return {
                ...state,
                loading: false,
              error: action.payload
            };

        // get Watson insight
        case 'WATSON_INSIGHT_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'WATSON_INSIGHT_SUCCESS':
            return {
                ...state,
                loading: false,
                watson: action.payload
            };
        case 'WATSON_INSIGHT_FAILURE':
            return {
                ...state,
                loading: false,
                watson: action.payload
            };
    }

    return state;
}