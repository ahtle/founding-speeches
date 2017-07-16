const initialState = {
    watson: [],
    loaded: false
};

export default function watson(state = initialState, action){

    switch(action.type){

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
}