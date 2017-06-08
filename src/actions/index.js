function loadPresidentsRequest(){
    console.log('LOAD_PRESIDENTS_REQUEST');
    return {
        type: 'LOAD_PRESIDENTS_REQUEST',
    };
}

function loadPresidentsSuccess(list){
    console.log('LOAD_PRESIDENTS_SUCCESS');
    return {
        type: 'LOAD_PRESIDENTS_SUCCESS',
        payload: list
    }
}

export function loadPresidentsFailure(error){
    console.log('LOAD_PRESIDENTS_FAILURE');
    return {
        type: 'LOAD_PRESIDENTS_FAILURE',
        payload: error
    }
}

// action creator
export function loadPresidents(){
    return function(dispatch, getState){

        dispatch(loadPresidentsRequest());

        fetch('https://founding-speeches-server.herokuapp.com/presidents')
            .then((response) => response.json())
            .then((presidents) => {
                return dispatch(loadPresidentsSuccess(presidents));
            })
            .catch((error) => {
                console.error(error);
                return dispatch(loadPresidentsFailure(error));
            });

    }
}