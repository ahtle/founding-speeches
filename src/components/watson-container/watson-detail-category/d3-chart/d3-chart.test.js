import React from 'react';
import {shallow} from 'enzyme';

import Chart from './index';

describe('<Chart />', () => {

    it('render without crashing', () => {
        shallow(<Chart />);
    });

});