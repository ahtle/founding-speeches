import React from 'react';
import {shallow} from 'enzyme';
import { LandingPage } from './index';


describe('<LandingPage />', () => {

    it('render without crashing', () => {
        shallow(<LandingPage />);
    });

    it('call function on click', () => {
        const callback = jest.fn();
        const wrapper = shallow(<LandingPage onClick={callback} />);
        wrapper.instance().toogleAdminVisibility = callback;
        wrapper.find('#show-admin').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});