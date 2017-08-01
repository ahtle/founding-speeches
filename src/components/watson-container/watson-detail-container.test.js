import React from 'react';
import {shallow} from 'enzyme';

import { WatsonDetailContainer } from './index';
import WatsonDetailCategory from './watson-detail-category/';

describe('<WatsonDetailContainer />', () => {

    const watson = {
        word_count: 1000,
        personality: [],
        needs: [],
        values: []
    };

    it('render without crashing', () => {
        shallow(<WatsonDetailContainer watson={watson} />);
    });

    it('render WatsonDetailContainer', () => {
        const wrapper = shallow(<WatsonDetailContainer watson={watson} />);
        expect(wrapper.find(WatsonDetailCategory).exists()).toEqual(true);
    });

    it('show infoBox on mouse enter', () => {
        const wrapper = shallow(<WatsonDetailContainer watson={watson} />);
        const span = wrapper.find('span');
        span.simulate('mouseenter');
        expect(wrapper.state().showInfobox).toEqual(true);
        span.simulate('mouseleave');
        expect(wrapper.state().showInfobox).toEqual(false);
    });

    it('call function on click', () => {
        const callback = jest.fn();
        const wrapper = shallow(<WatsonDetailContainer watson={watson} callback={callback}/>);
        wrapper.instance().closeContainer = callback;
        wrapper.find('.x').simulate('click');
        expect(callback).toHaveBeenCalled();
    });

});