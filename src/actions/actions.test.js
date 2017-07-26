import { LIFECYCLE, KEY } from 'redux-pack';

import { loadPresidents, loadPresidentTranscripts, postNewTranscript,
         deleteTranscript, getWatsonInsight, clearWatsonState, setStateLoaded } from './index';

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

describe('loadPresidents', () => {
    it('Should return correct type and promise response', () => {
        const action = makePackAction(LIFECYCLE.START, { type: 'LOAD_PRESIDENTS', payload: [{presId: 1, name: 'George'}] });
        expect(action.type).toEqual('LOAD_PRESIDENTS');
        expect(action.payload).toEqual([{presId: 1, name: 'George'}]);
    })
});

describe('loadPresidentTranscripts', () => {
    it('Should return correct type and promise response', () => {
        const action = makePackAction(LIFECYCLE.START, { type: 'LOAD_PRESIDENT_TRANSCRIPTS', payload: [{presId: 1, text: 'text'}] });
        expect(action.type).toEqual('LOAD_PRESIDENT_TRANSCRIPTS');
        expect(action.payload).toEqual([{presId: 1, text: 'text'}]);
    })
});

describe('postNewTranscript', () => {
    it('Should return correct type and promise response', () => {
        const action = makePackAction(LIFECYCLE.START, { type: 'POST_NEW_TRANSCRIPT', payload: {presId: 1, text: 'text'} });
        expect(action.type).toEqual('POST_NEW_TRANSCRIPT');
        expect(action.payload).toEqual({presId: 1, text: 'text'});
    })
});

describe('deleteTranscript', () => {
    it('Should return correct type and promise response', () => {
        const action = makePackAction(LIFECYCLE.START, { type: 'DELETE_TRANSCRIPT', payload: 1 });
        expect(action.type).toEqual('DELETE_TRANSCRIPT');
        expect(action.payload).toEqual(1);
    })
});

describe('getWatsonInsight', () => {
    it('Should return correct type and promise response', () => {
        const action = makePackAction(LIFECYCLE.START, { type: 'GET_WATSON_INSIGHT', payload: {personality: [], needs: [], values: []} });
        expect(action.type).toEqual('GET_WATSON_INSIGHT');
        expect(action.payload).toEqual({personality: [], needs: [], values: []} );
    })
});

// clear watson profile
describe('clearWatsonState', () => {
    it('Should return the action', () => {
        const action = clearWatsonState();
        expect(action.type).toEqual('CLEAR_WATSON_STATE');
    });
});

// set loaded spinner
describe('setStateLoaded', () => {
    it('Should return the action', () => {
        const random_boolean = Math.random() >= 0.5;
        const action = setStateLoaded(random_boolean);
        expect(action.type).toEqual('SET_STATE_LOADED');
        expect(action.payload).toEqual(random_boolean);
    });
});