import React from 'react';
import {shallow} from 'enzyme';

import WatsonDetailCategory from './index';
import Chart from './d3-chart/'

describe('<WatsonDetailCategory />', () => {

    it('render without crashing', () => {
        shallow(<WatsonDetailCategory category='personality'/>);
    });

    it('render Chart', () => {
        const wrapper = shallow(<WatsonDetailCategory category='personality'/>);
        expect(wrapper.find(Chart).exists()).toEqual(true);
    });

    it('render infobox header text correctly', () => {
        const wrapper = shallow(<WatsonDetailCategory category='personality'/>);
        const infoHeader = wrapper.find('.infobox-header');
        expect(infoHeader.text()).toEqual('Model description');
    });

});