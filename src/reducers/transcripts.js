import { handle } from 'redux-pack';
import { sortByDate } from '../utils';

const initialState = {
    transcripts: [],
    transcripts_error: false,
    loaded: false
};

export default function transcriptsReducer(state = initialState, action){

    switch(action.type){

        // load transcripts

        case 'LOAD_PRESIDENT_TRANSCRIPTS':
            return handle(state, action, {
                start: (previousState) => ({ ...previousState, loaded: false}),
                success: (previousState) => ({ ...previousState, transcripts: action.payload, loaded: true, transcripts_error: false }),
                failure: (previousState) => ({ ...previousState, transcripts_error: true, loaded: true })
            });
        
        // post new transcript
        
        case 'POST_NEW_TRANSCRIPT':
            return handle(state, action, {
                start: (previousState) => ({ ...previousState, loaded: false}),
                success: (previousState) => {
                    const transcripts = state.transcripts.slice();
                    transcripts.push(action.payload);
                    sortByDate(transcripts);
                    return { ...previousState, transcripts, loaded: true, transcripts_error: false }
                },
                failure: (previousState) => ({ ...previousState, transcripts_error: true, loaded: true })
            });
      
        // delete a transcript
        
        case 'DELETE_TRANSCRIPT':
            return handle(state, action, {
                start: (previousState) => ({ ...previousState, loaded: false}),
                success: (previousState) => {
                    const transcripts = state.transcripts.slice();    
                    transcripts.splice(action.payload, 1);
                    return { ...previousState, transcripts, loaded: true , transcripts_error: false }
                },
                failure: (previousState) => ({ ...previousState, transcripts_error: true, loaded: true })
            });

        default:
            return state;
    }

};