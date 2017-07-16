const initialState = {
    presidents: [],
    loaded: false
};

export default function presidents(state = initialState, action){

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
    
        default:
            return state;
    }
}
