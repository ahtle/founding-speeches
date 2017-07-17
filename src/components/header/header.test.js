import React from 'react';
import {shallow} from 'enzyme';

import Header from './index';


describe('<Header />', () => {
    it('render without crashing', () => {
        shallow(<Header />);
    });

    it('render the img', () => {
        const wrapper = shallow(<Header />);
        const img = wrapper.find('img');
        expect(img.hasClass("header-img")).toEqual(true);
    });

});