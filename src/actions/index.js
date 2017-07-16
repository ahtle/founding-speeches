import { parseJSON, checkHttpStatus } from '../utils';
//***** load presidents from server and add to state ********/

export function loadPresidentsRequest(){
    return {
        type: 'LOAD_PRESIDENTS_REQUEST',
    };
}

export function loadPresidentsSuccess(list){
    return {
        type: 'LOAD_PRESIDENTS_SUCCESS',
        payload: list
    }
}

export function loadPresidentsFailure(error){
    return {
        type: 'LOAD_PRESIDENTS_FAILURE',
        payload: error
    }
}

// action creator
export function loadPresidents(){
    return function(dispatch, getState){

        dispatch(loadPresidentsRequest());

        fetch('https://founding-speeches-server.herokuapp.com/api/v1/presidents')
            .then((response) => response.json())
            .then((presidents) => {
                return dispatch(loadPresidentsSuccess(presidents));
            })
            .catch((error) => {
                return dispatch(loadPresidentsFailure(error));
            });
    }
}

/************** load president speech transcripts *******/

export function loadPresidentTranscriptsRequest(){
    return {
        type: 'LOAD_PRESIDENT_TRANSCRIPTS_REQUEST',
    };
}

export function loadPresidentTranscriptsSuccess(list){
    return {
        type: 'LOAD_PRESIDENT_TRANSCRIPTS_SUCCESS',
        payload: list
    }
}

export function loadPresidentsTranscriptsFailure(error){
    return {
        type: 'LOAD_PRESIDENT_TRANSCRIPTS_FAILURE',
        payload: error
    }
}

// action creator
export function loadPresidentTranscripts(url){
    return function(dispatch, getState){

        dispatch(loadPresidentTranscriptsRequest());

        fetch(url)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((transcripts) => {
                return dispatch(loadPresidentTranscriptsSuccess(transcripts));
            })
            .catch((error) => {
                return dispatch(loadPresidentsTranscriptsFailure(error));
            });
    }
}

/****************** post new speech *******************/
export function postTranscriptRequest(){
    return {
        type: 'POST_TRANSCRIPT_REQUEST'
    }
}

export function postTranscriptSuccess(transcript){
    return {
        type: 'POST_TRANSCRIPT_SUCCESS',
        payload: transcript
    }
}

export function postTranscriptFailure(error){
    return {
        type: 'POST_TRANSCRIPT_FAILURE',
        payload: error
    }
}

//action creator
export function postNewTranscript(transcript){
    return function(dispatch, getState){
        dispatch(postTranscriptRequest());

        fetch('https://founding-speeches-server.herokuapp.com/api/v1/transcripts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transcript)
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(data => {
            dispatch(postTranscriptSuccess(data));
        })
        .catch(error => dispatch(postTranscriptFailure(error)));
    }
}

/****************** delete a speech **********************/
export function deleteTranscriptRequest(){
    return {
        type: 'DELETE_TRANSCRIPT_REQUEST'
    }
}

export function deleteTranscriptSuccess(index){
    return {
        type: 'DELETE_TRANSCRIPT_SUCCESS',
        payload: index
    }
}

export function deleteTranscriptFailure(error){
    return {
        type: 'DELETE_TRANSCRIPT_FAILURE',
        payload: error
    }
}

//action creator
export function deleteTranscript(id, index){
    return function (dispatch, getState){
        dispatch(deleteTranscriptRequest());

        fetch(`https://founding-speeches-server.herokuapp.com/api/v1/transcripts/${id}`, {
            method: 'DELETE'
        })
        .then(checkHttpStatus)
        .then(() => {
            dispatch(deleteTranscriptSuccess(index))
        })
        .catch(error => dispatch(deleteTranscriptFailure(error)));
    }
}

//******** get watson speech profile analysis and add to state ************/
export function getWatsonInsightRequest(){
    return {
        type: 'WATSON_INSIGHT_REQUEST'
    }
}

export function getWatsonInsightSuccess(watson){
    return {
        type: 'WATSON_INSIGHT_SUCCESS',
        payload: watson
    }
}

export function getWatsonInsightFailure(error){
    return {
        type: 'WATSON_INSIGHT_FAILURE',
        payload: error
    }
}

//action creator
export function getWatsonInsight(text){
    return function(dispatch, getState){
        dispatch(getWatsonInsightRequest());
        var fetchOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                cache: 'default',
                body: JSON.stringify({text: text})
            };

        var url = 'https://founding-speeches-server.herokuapp.com/api/v1/watson/';

        fetch(url, fetchOptions)
        .then(response => response.json())
        .then((watson) => {
            if(watson.code === 400)
                return dispatch(getWatsonInsightSuccess(watson.error))
            return dispatch(getWatsonInsightSuccess(watson));
        })
        .catch(error => dispatch(getWatsonInsightFailure(error)));

    }
}

//*************** clear watson state ************************
export function clearWatsonStateAction(){
    return {
        type: 'CLEAR_WATSON_STATE'
    }
}

export function clearWatsonState(){
    return function(dispatch, getState){
        return dispatch(clearWatsonStateAction())
    }
}

//************** set state.loaded ********************
export function stateLoadedAction(loaded){
    return {
        type: 'SET_STATE_LOADED',
        payload: loaded
    }
}

export function setStateLoaded(loaded){
    return function(dispatch, getState){
        return dispatch(stateLoadedAction(loaded))
    }
}