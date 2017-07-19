import React from 'react';
import { shallow } from 'enzyme';
import DetailBanner from './index';


describe('<DetailBanner />', () => {

    it('render without crashing', () => {
        shallow(<DetailBanner />);
    });

    it('render h1 text correctyl', () => {
        const wrapper = shallow(<DetailBanner />);
        const h1 = wrapper.find('h1');
        expect(h1.text()).toEqual('loading');
    });
});