import { handle } from 'redux-pack';

const initialState = {
    watson: [],
    watson_error: false,
    loaded: false
};

export default function watsonReducer(state = initialState, action){

    switch(action.type){
       
        case 'GET_WATSON_INSIGHT':
            return handle(state, action, {
                start: (previousState) => ({ ...previousState, watson_error: false, loaded: false }),
                success: (previousState) => ({ ...previousState, watson: action.payload, watson_error: false, loaded: true }),
                failure: (previousState) => ({ ...previousState, watson_error: true, loaded: true })
            });

        // clear Watson state

        case 'CLEAR_WATSON_STATE':
            return { ...state, watson: [], watson_error: false, loaded: true }

        // set loaded state

        case 'SET_STATE_LOADED':
            return { ...state, loaded: action.payload }

        default:
            return state;
    }
}