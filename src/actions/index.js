import moment from 'moment';

//***** load presidents from server and add to state ********/

function loadPresidentsRequest(){
    return {
        type: 'LOAD_PRESIDENTS_REQUEST',
    };
}

function loadPresidentsSuccess(list){
    return {
        type: 'LOAD_PRESIDENTS_SUCCESS',
        payload: list
    }
}

function loadPresidentsFailure(error){
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
                console.error(error);
                return dispatch(loadPresidentsFailure(error));
            });
    }
}

/************** load president speech transcripts *******/

function loadPresidentTranscriptsRequest(){
    return {
        type: 'LOAD_PRESIDENT_TRANSCRIPTS_REQUEST',
    };
}

function loadPresidentTranscriptsSuccess(list){
    return {
        type: 'LOAD_PRESIDENT_TRANSCRIPTS_SUCCESS',
        payload: list
    }
}

function loadPresidentsTranscriptsFailure(error){
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
            .then((response) => response.json())
            .then((transcripts) => {
                transcripts.forEach(transcript => {
                    transcript.date = moment(transcript.date.substring(0,10)).format('LL');
                })
                return dispatch(loadPresidentTranscriptsSuccess(transcripts));
            })
            .catch((error) => {
                console.error(error);
                return dispatch(loadPresidentsTranscriptsFailure(error));
            });
    }
}

/****************** post new speech *******************/
function postTranscriptRequest(){
    return {
        type: 'POST_TRANSCRIPT_REQUEST'
    }
}

function postTranscriptSuccess(transcript){
    return {
        type: 'POST_TRANSCRIPT_SUCCESS',
        payload: transcript
    }
}

function postTranscriptFailure(error){
    console.log('POST_TRANSCRIPT_FAILURE');
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
        .then(response => response.json())
        .then(data => postTranscriptSuccess(data))
        .catch(error => postTranscriptFailure(error));
    }
}

//******** get watson speech profile analysis and add to state ************/
function getWatsonInsightRequest(){
    return {
        type: 'WATSON_INSIGHT_REQUEST'
    }
}

function getWatsonInsightSuccess(watson){
    return {
        type: 'WATSON_INSIGHT_SUCCESS',
        payload: watson
    }
}

function getWatsonInsightFailure(error){
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
        .then(watson => dispatch(getWatsonInsightSuccess(watson)))
        .catch(error => dispatch(getWatsonInsightFailure(error)));

    }
}