import React from 'react';
import { shallow } from 'enzyme';

import SpeechesList from './index';

if(!global.sessionStorage) {global.sessionStorage = {admin: 'true'} }

describe('<SpeechesList />', () => {

    it('Render without crashing', () => {
        shallow(<SpeechesList date='1793-04-22T07:00:00.000Z'/>);
    });

    it('Render class "delete-icon" when sessionStorage.admin === true', () => {
        const wrapper = shallow(<SpeechesList date='1793-04-22T07:00:00.000Z'/>);
        expect(wrapper.find('.delete-icon').exists()).toEqual(true);
    });
});
