import React from 'react';
import {shallow} from 'enzyme';

import App from '../components/app';

describe('<App />', () => {
    it('Render without crashing', () => {
        shallow(<App />);
    });
});