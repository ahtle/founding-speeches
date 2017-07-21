import React from 'react';
import {shallow } from 'enzyme';

import { SpeechTranscript } from './index';
import WatsonDetailContainer from '../../watson-container/';

describe('<SpeechTranscript />', () => {

    it('Renders without crashing', () => {
        shallow(<SpeechTranscript match={{params: '1'}} />);
    });

    it('Do not render WatsonDetailContainer initially', () => {
        const wrapper = shallow(<SpeechTranscript match={{params: '1'}} />);
        expect(wrapper.find(WatsonDetailContainer).exists()).toEqual(false);
    });

    it('Render WatsonDetailContainer when showWatsonInsight state is true', () => {
        const wrapper = shallow(<SpeechTranscript match={{params: '1'}} />);
        wrapper.setState({showWatsonInsight: true});
        expect(wrapper.find(WatsonDetailContainer).exists()).toEqual(true);
    });

});