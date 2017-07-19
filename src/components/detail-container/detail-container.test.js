import React from 'react';
import {shallow, mount} from 'enzyme';
import { DetailContainer } from './index';
import SpeechesList from './speeches-list/';
import { AddSpeechForm } from './add-speech-form/';
import DetailBanner from './detail-banner/';

describe('<DetailContainer />', () => {
    window.localStorage = {admin: 'admin'};

    const transcripts = [{
        presId: 1,
        date: new Date(),
        title: 'title',
        text: 'text',
        _id: 123
    }];

    it('Renders without crashing', () => {
        shallow(<DetailContainer transcripts={transcripts} history={[]} match={{params: '1'}}/>);
    });

    it('Renders SpeechesList component', () => {
        const wrapper = shallow(<DetailContainer transcripts={transcripts} history={[]} match={{params: '1'}}/>);
        expect(wrapper.find(SpeechesList).exists()).toEqual(true);
    });

    it('Does not render AddSpeechForm when isSpeechFormVisible state is false', () => {
        const wrapper = shallow(<DetailContainer transcripts={transcripts} history={[]} match={{params: '1'}}/>);
        expect(wrapper.find(AddSpeechForm).exists()).toEqual(false);
    });

    it('Renders DetailBanner component', () => {
        const wrapper = shallow(<DetailContainer transcripts={transcripts} history={[]} match={{params: '1'}}/>);
        expect(wrapper.find(DetailBanner).exists()).toEqual(true);
    });

});
