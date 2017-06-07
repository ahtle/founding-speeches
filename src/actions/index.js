function loadPresidentsRequest(){
    console.log('LOAD_PRESIDENTS_REQUEST');
    return {
        type: 'LOAD_PRESIDENTS_REQUEST',
    };
}

function loadPresidentsSuccess(list){
    console.log('LOAD_PRESIDENTS_SUCCESS');
    console.log(list);
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
        console.log('loadPresidents()');

        dispatch(loadPresidentsRequest());

        fetch('/presidents')
        .then((list)=>{
            dispatch(loadPresidentsSuccess(list));
        })
        .catch((error) => {
            dispatch(loadPresidentsFailure(error));
        });
    }
}