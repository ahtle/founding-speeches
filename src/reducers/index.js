const initialState = {
    presidents: [],
    transcripts: []
};

export default (state = initialState, action) => {

    switch(action.type){
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
    }

    return state;
}