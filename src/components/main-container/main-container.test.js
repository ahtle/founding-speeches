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
});