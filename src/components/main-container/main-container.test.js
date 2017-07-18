import React from 'react';
import {shallow} from 'enzyme';
import {MainContainer} from './index';


describe('<Header />', () => {

    const presidents = [{
        presId: 1,
        name: 'George Washington',
        startYear: 2020,
        endYear: 2021,
        banner: 'banner',
        thumbnail: 'thumbnail',
        snippet: 'snippet'
    }]

    it('render without crashing', () => {
        shallow(<MainContainer presidents={presidents}/>);
    });

    it('render Card and Loader component', () => {
        const wrapper = shallow(<MainContainer presidents={presidents}/>);
        expect(wrapper.find('Card').exists()).toEqual(true);
    });

});