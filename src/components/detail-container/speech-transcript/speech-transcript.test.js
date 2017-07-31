import React from 'react';
import {shallow } from 'enzyme';

import { SpeechTranscript } from './index';
import WatsonDetailContainer from '../../watson-container/';

describe('<SpeechTranscript />', () => {

    const watson = {personality: [{name: 'personality', percentile: '100'}]}

    it('Renders without crashing', () => {
        shallow(<SpeechTranscript match={{params: '1'}} watson={watson} />);
    });

    it('Do not render WatsonDetailContainer initially', () => {
        const wrapper = shallow(<SpeechTranscript match={{params: '1'}} watson={watson}/>);
        expect(wrapper.find(WatsonDetailContainer).exists()).toEqual(true);
    });

    it('Render WatsonDetailContainer when showWatsonInsight state is false', () => {
        const wrapper = shallow(<SpeechTranscript match={{params: '1'}} watson={watson}/>);
        wrapper.setState({showWatsonInsight: false});
        expect(wrapper.find(WatsonDetailContainer).exists()).toEqual(false);
    });

});