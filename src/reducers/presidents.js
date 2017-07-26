import { handle } from 'redux-pack';

const initialState = {
    presidents: [],
    presidents_error: false,
    loaded: false
};

export default function presidentsReducer(state = initialState, action){

    switch(action.type){
        // load president
        case 'LOAD_PRESIDENTS':
            return handle(state, action, {
                    start: (previousState) => ({ ...previousState, loaded: false}),
                    success: (previousState) => ({ ...previousState, presidents: action.payload, presidents_error: false, loaded: true }),
                    failure: (previousState) => ({ ...previousState, presidents_error: true, loaded: true })
                })

        default:
            return state;
    }
}
