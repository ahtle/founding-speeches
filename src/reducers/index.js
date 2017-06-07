const initialState = {
    presidents: [{
        id: 1,
        name: 'George Washington',
        date: '1789 - 1797',
        img: 'thumb1.jpg',
        banner: 'banner1.jpeg',
        snippet: 'If the freedom of speech is taken away then dumb and silent we may be led, like sheep to the slaughter.',
        speeches: [1001,1002,1003]
    }],
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