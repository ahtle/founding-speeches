import reducers from '../reducers/';
import { loadPresidentsRequest, loadPresidentsSuccess, loadPresidentsFailure,
    loadPresidentTranscriptsRequest, postTranscriptRequest, loadPresidentTranscriptsSuccess,
    loadPresidentsTranscriptsFailure, postTranscriptSuccess, deleteTranscriptSuccess,
    stateLoadedAction, clearWatsonStateAction } from '../actions/';

describe('reducer', () => {
    // dummy data
    const initialState = {
        presidents: [],
        transcripts: [],
        watson: [],
        loaded: false
    };

    it('Should set initial state when nothing is passed in', () => {
        const state = reducers(undefined, {type: '__UNKNOW'});
        expect(state).toEqual(initialState);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducers(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    // load presidents
    describe('loadPresidentsRequest', () => {
        it('Should change loaded state on request', () => {
            const testState = {
                presidents: [],
                transcripts: [],
                watson: [],
                loaded: true
            };
            
            let state = reducers(testState, loadPresidentsRequest());
            
            expect(state).toEqual({
                ...testState,
                loaded: false
            });
        });
    });

    describe('loadPresidentsSuccess', () => {
        it('Should return list of presidents', () => {
            let presidents = [{presId: 1, name: 'George Washington'}];

            let state = reducers(initialState, loadPresidentsSuccess(presidents));
            expect(state).toEqual({
                ...initialState,
                presidents,
                loaded: true
            });
        });
    });

    describe('loadPresidentsFailure', () => {
        it('Should return error object on failure', () => {
            let error = {error: 'error msg'};

            let state = reducers(initialState, loadPresidentsFailure(error));
            expect(state).toEqual({
                ...initialState,
                presidents: error,
                loaded: true
            });
        });
    });

    // load transcripts
    describe('loadPresidentTranscriptsRequest', () => {
        it('Should change loaded state on request', () => {
            
            let state = reducers({...initialState, loaded: true}, loadPresidentTranscriptsRequest());
            
            expect(state).toEqual({
                ...initialState,
                loaded: false
            });
        });
    });

    describe('loadPresidentTranscriptsSuccess', () => {
        it('Should return list of transcripts', () => {
            let transcripts = [{text: 'text', title: 'title', date: new Date()}];

            let state = reducers(initialState, loadPresidentTranscriptsSuccess(transcripts));

            expect(state).toEqual({
                ...initialState,
                transcripts,
                loaded: true
            });
        });
    });

    describe('loadPresidentsTranscriptsFailure', () => {
        it('Should return error object on failure', () => {
            let error = {error: 'error msg'};

            let state = reducers(initialState, loadPresidentsTranscriptsFailure(error));
            expect(state).toEqual({
                ...initialState,
                transcripts: error,
                loaded: true
            });
        });
    });

    // post transcript
    describe('postTranscriptRequest', () => {
        it('Should change loaded state on request', () => {

            let state = reducers({...initialState, loaded: true}, postTranscriptRequest());
            
            expect(state).toEqual({
                ...initialState,
                loaded: false
            });
        });
    });

    describe('postTranscriptSuccess', () => {
        it('Should add new transcript', () => {
            let transcripts = [{presId: 1, date: new Date(), title: 'title', text: 'text'}];

            let state = reducers(initialState, postTranscriptSuccess(transcripts));
            expect(state).toEqual({
                ...initialState,
                transcripts: [transcripts],
                loaded: true
            });
        });
    });

    // delete transcript
    describe('deleteTranscriptSuccess', () => {
        it('Should change return deleted transcript', () => {

            const transcripts = [{transcript: 1}, {transcript: 2}, {transcript: 3}];

            const testState = {
                presidents: [],
                transcripts: transcripts,
                watson: [],
                loaded: false
            };

            let state = reducers(testState, deleteTranscriptSuccess(1));
            
            expect(state).toEqual({
                ...testState,
                transcripts: [{transcript: 1}, {transcript: 3}],
                loaded: true
            });
        });
    });

    // clear watson state
    describe('clearWatsonStateAction', () => {
        it('Should clear watson state', () => {
            const watsonState = {someValue: 1};
            const testState = {
                presidents: [],
                transcripts: [],
                watson: [watsonState],
                loaded: false
            };

            let state = reducers(testState, clearWatsonStateAction());
            expect(state).toEqual({
                ...initialState,
                loaded: true
            });
        });
    });

    // change loaded state
    describe('stateLoadedAction', () => {
        it('Should change loaded state', () => {

            const random_boolean = Math.random() >= 0.5;

            let state = reducers(initialState, stateLoadedAction(random_boolean));
            expect(state).toEqual({
                ...initialState,
                loaded: random_boolean
            });
        });
    });

});