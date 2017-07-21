import React from 'react';
import {shallow, mount} from 'enzyme';
import { postNewTranscript } from '../../../actions/';

import { AddSpeechForm } from './index';

describe('<AddSpeechForm />', () => {

    it('Renders without crashing', () => {
        shallow(<AddSpeechForm />);
    });

    it('Function onClose to be called on click', () => {
        const wrapper = mount(<AddSpeechForm />);
        const spy = jest.spyOn(wrapper.instance(), 'onClose');
        wrapper.update();
        wrapper.find('button').simulate('click');
        expect(spy).toHaveBeenCalled();
    });

});