import {
    loadPresidentsRequest, loadPresidentsSuccess, loadPresidentsFailure,
    loadPresidentTranscriptsRequest, loadPresidentTranscriptsSuccess, loadPresidentsTranscriptsFailure,
    postTranscriptRequest, postTranscriptSuccess, postTranscriptFailure,
    deleteTranscriptRequest, deleteTranscriptSuccess, deleteTranscriptFailure,
    getWatsonInsightRequest, getWatsonInsightSuccess, getWatsonInsightFailure,
    clearWatsonStateAction, clearWatsonState,
    stateLoadedAction
} from './index';

// load presidents
describe('loadPresidentsRequest', () => {
    it('Should return the action', () => {
        const action = loadPresidentsRequest();
        expect(action.type).toEqual('LOAD_PRESIDENTS_REQUEST');
    });
});

describe('loadPresidentsSuccess', () => {
    it('Should return the action', () => {
        const data = [{
            presId: 1,
            name: 'George Washington'
        }];
        const action = loadPresidentsSuccess(data);
        expect(action.type).toEqual('LOAD_PRESIDENTS_SUCCESS');
        expect(action.payload).toEqual(data);
    });
});

describe('loadPresidentsFailure', () => {
    it('Should return the action', () => {
        const error = [];
        const action = loadPresidentsFailure(error);
        expect(action.type).toEqual('LOAD_PRESIDENTS_FAILURE');
        expect(action.payload).toEqual(error);
    });
});

// load president transcripts
describe('loadPresidentTranscriptsRequest', () => {
    it('Should return the action', () => {
        const action = loadPresidentTranscriptsRequest();
        expect(action.type).toEqual('LOAD_PRESIDENT_TRANSCRIPTS_REQUEST');
    });
});

describe('loadPresidentTranscriptsSuccess', () => {
    it('Should return the action', () => {
        const data = [{
            presId: 1,
            text: 'Some text'
        }];
        const action = loadPresidentTranscriptsSuccess(data);
        expect(action.type).toEqual('LOAD_PRESIDENT_TRANSCRIPTS_SUCCESS');
        expect(action.payload).toEqual(data);
    });
});

describe('loadPresidentsTranscriptsFailure', () => {
    it('Should return the action', () => {
        const error = [];
        const action = loadPresidentsTranscriptsFailure(error);
        expect(action.type).toEqual('LOAD_PRESIDENT_TRANSCRIPTS_FAILURE');
        expect(action.payload).toEqual(error);
    });
});

// post new speech
describe('postTranscriptRequest', () => {
    it('Should return the action', () => {
        const action = postTranscriptRequest();
        expect(action.type).toEqual('POST_TRANSCRIPT_REQUEST');
    });
});

describe('postTranscriptSuccess', () => {
    it('Should return the action', () => {
        const data = [{
            presId: 1,
            text: 'Some text'
        }];
        const action = postTranscriptSuccess(data);
        expect(action.type).toEqual('POST_TRANSCRIPT_SUCCESS');
        expect(action.payload).toEqual(data);
    });
});

describe('postTranscriptFailure', () => {
    it('Should return the action', () => {
        const error = [];
        const action = postTranscriptFailure(error);
        expect(action.type).toEqual('POST_TRANSCRIPT_FAILURE');
        expect(action.payload).toEqual(error);
    });
});

// delete a speech
describe('deleteTranscriptRequest', () => {
    it('Should return the action', () => {
        const action = deleteTranscriptRequest();
        expect(action.type).toEqual('DELETE_TRANSCRIPT_REQUEST');
    });
});

describe('deleteTranscriptSuccess', () => {
    it('Should return the action', () => {
        const index = 1;
        const action = deleteTranscriptSuccess(index);
        expect(action.type).toEqual('DELETE_TRANSCRIPT_SUCCESS');
        expect(action.payload).toEqual(index);
    });
});

describe('deleteTranscriptFailure', () => {
    it('Should return the action', () => {
        const error = [];
        const action = deleteTranscriptFailure(error);
        expect(action.type).toEqual('DELETE_TRANSCRIPT_FAILURE');
        expect(action.payload).toEqual(error);
    });
});

// get watson profile
describe('getWatsonInsightRequest', () => {
    it('Should return the action', () => {
        const action = getWatsonInsightRequest();
        expect(action.type).toEqual('WATSON_INSIGHT_REQUEST');
    });
});

describe('getWatsonInsightSuccess', () => {
    it('Should return the action', () => {
        const watson = [{
            personality: [],
            needs: [],
            watson: []
        }];

        const action = getWatsonInsightSuccess(watson);
        expect(action.type).toEqual('WATSON_INSIGHT_SUCCESS');
        expect(action.payload).toEqual(watson);
    });
});

describe('getWatsonInsightFailure', () => {
    it('Should return the action', () => {
        const error = {error: 'error msg'};
        const action = getWatsonInsightFailure(error);
        expect(action.type).toEqual('WATSON_INSIGHT_FAILURE');
        expect(action.payload).toEqual(error);
    });
});

// clear watson profile
describe('clearWatsonStateAction', () => {
    it('Should return the action', () => {
        const action = clearWatsonStateAction();
        expect(action.type).toEqual('CLEAR_WATSON_STATE');
    });
});


// set loaded spinner
describe('stateLoadedAction', () => {
    it('Should return the action', () => {
        const action = stateLoadedAction();
        expect(action.type).toEqual('SET_STATE_LOADED');
    });
});