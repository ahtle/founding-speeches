import React from 'react';
import {shallow} from 'enzyme';

import App from '../components/app';
import LandingPage from '../components/landing-page/';


describe('<App />', () => {
    it('Render without crashing', () => {
        shallow(<App />);
    });
});

// describe('<LandingPage />', () => {
//     it('Render without crashing', () => {
//         shallow(<LandingPage />);
//     });
// });