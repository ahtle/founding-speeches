import { parseJSON, checkHttpStatus } from '../utils';

//***** load presidents from server and add to state ********/

export function loadPresidents(){
    return {
        type: 'LOAD_PRESIDENTS',
        promise: fetch('https://founding-speeches-server.herokuapp.com/api/v1/presidents')
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => response)
    }
}

/************** load president speech transcripts *******/

export function loadPresidentTranscripts(url){
    return {
        type: 'LOAD_PRESIDENT_TRANSCRIPTS',
        promise: fetch(url)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => response)
    }
}

/****************** post new speech *******************/

export function postNewTranscript(transcript){
    return {
        type: 'POST_NEW_TRANSCRIPT',
        promise: fetch('https://founding-speeches-server.herokuapp.com/api/v1/transcripts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transcript)
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(data => data)
    }
}

/****************** delete a speech **********************/

export function deleteTranscript(id, index){
    return {
        type: 'DELETE_TRANSCRIPT',
        promise: fetch(`https://founding-speeches-server.herokuapp.com/api/v1/transcripts/${id}`, {
            method: 'DELETE'
        })
        .then(checkHttpStatus)
        .then(() => index)
    }
}

//******** get watson speech profile analysis and add to state ************/

export function getWatsonInsight(text){
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({text: text})
    };

    const url = 'https://founding-speeches-server.herokuapp.com/api/v1/watson/';

    return {
        type: 'GET_WATSON_INSIGHT',
        promise: fetch(url, fetchOptions)
            .then(parseJSON)
            .then((watson) => {
                if(watson.code === 400)
                    return watson.error
                return watson
            })
    }
}

//*************** clear watson state ************************

export function clearWatsonState(){
    return {
        type: 'CLEAR_WATSON_STATE'
    }
}

//************** set state.loaded ********************

export function setStateLoaded(loaded){
    return {
        type: 'SET_STATE_LOADED',
        payload: loaded
    }
}