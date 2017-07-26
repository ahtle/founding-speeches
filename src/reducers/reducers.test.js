import { LIFECYCLE, KEY } from 'redux-pack';
import reducers from '../reducers/combineReducers';
import { clearWatsonState, setStateLoaded } from '../actions/';

function makePackAction(lifecycle, { type, payload, meta={} }) {
    return {
        type,
        payload,
        meta: {
            ...meta,
            [KEY.LIFECYCLE]: lifecycle,
        },
    }
}

const initialState = {
    presidents: { presidents: [], presidents_error: false, loaded: false },
    transcripts: { transcripts: [], transcripts_error: false, loaded: false },
    watson: { watson: [], watson_error: false, loaded: false },
}

describe('reducer', () => {
    it('test', () => {
        expect(true).toEqual(true);
    });

    it('Should set initial state when nothing is passed in', () => {
        const state = reducers(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(initialState);
    });

    it('Should return initial state on an unknown action', () => {
        let currentState = {};
        const state = reducers(currentState, {type: '__UNKNOWN'});
        expect(state).toEqual(initialState);
    });

    describe('loadPresidents', () => {
        it('Should change loaded state on request', () => {         
            let action = makePackAction(LIFECYCLE.SUCCESS, { type: 'LOAD_PRESIDENTS', payload: [{presId: 1, name: 'George'}] });
            let state = reducers(initialState, action);
            
            expect(state).toEqual({
                ...initialState,
                presidents: { presidents: action.payload, presidents_error: false, loaded: true }
            });

        });
    });

    describe('loadPresidentTranscripts', () => {
        it('Should change loaded state on request', () => {         
            let action = makePackAction(LIFECYCLE.SUCCESS, { type: 'LOAD_PRESIDENT_TRANSCRIPTS', payload: [{presId: 1, text: 'text'}] });
            let state = reducers(initialState, action);
            
            expect(state).toEqual({
                ...initialState,
                transcripts: { transcripts: action.payload, transcripts_error: false, loaded: true }
            });

        });
    });

    describe('postNewTranscript', () => {
        it('Should change loaded state on request', () => {         
            let action = makePackAction(LIFECYCLE.SUCCESS, { type: 'POST_NEW_TRANSCRIPT', payload: {presId: 1, text: 'text'} });
            let state = reducers(initialState, action);
            
            expect(state).toEqual({
                ...initialState,
                transcripts: { transcripts: [action.payload], transcripts_error: false, loaded: true }
            });

        });
    });

    describe('deleteTranscript', () => {
        it('Should change loaded state on request', () => {
            
            const testState = {
                ...initialState,
                transcripts: { transcripts: [{presId: 1, text: 'text1'}, {presId: 1, text: 'text2'}], transcripts_error: false, loaded: true }
            }

            let action = makePackAction(LIFECYCLE.SUCCESS, { type: 'DELETE_TRANSCRIPT', payload: 1 });
            let state = reducers(testState, action);
            
            expect(state).toEqual({
                ...testState,
                transcripts: { transcripts: [{presId: 1, text: 'text1'}], transcripts_error: false, loaded: true }
            });

        });
    });

    describe('clearWatsonState', () => {
        it('Should clear watson state', () => {
            const testState = {
                ...initialState,
                watson: { watson: [{test: 'test'}], watson_error: false, loaded: false },
            };

            let state = reducers(testState, clearWatsonState());
            expect(state).toEqual({
                ...initialState,
                watson: { watson: [], watson_error: false, loaded: true }
            });
        });
    });

    describe('setStateLoaded', () => {
        it('Should change loaded state', () => {

            const random_boolean = Math.random() >= 0.5;

            let state = reducers(initialState, setStateLoaded(random_boolean));
            expect(state).toEqual({
                ...initialState,
                watson: { watson: [], watson_error: false, loaded: random_boolean }
            });
        });
    });

});