import React from 'react';
import {shallow} from 'enzyme';

import { UserTextContainer } from './index';
import WatsonDetailContainer from '../watson-container/';



describe('<UserTextContainer />', () => {

    it('render without crashing', () => {
        shallow(<UserTextContainer />);
    });

    it("don't render WatsonDetailContainer when showWatsonInsight state is false", () => {
        const wrapper = shallow(<UserTextContainer />);
        expect(wrapper.find(WatsonDetailContainer).exists()).toEqual(false);
    });

    it('render WatsonDetailContainer when showWatsonInsight state is true', () => {
        const wrapper = shallow(<UserTextContainer />);
        wrapper.setState({showWatsonInsight: true});
        expect(wrapper.find(WatsonDetailContainer).exists()).toEqual(true);
    });

    it('call function on click', () => {
        const callback = jest.fn();
        const wrapper = shallow(<UserTextContainer onClick={callback} />);
        wrapper.instance().handleWatsonClick = callback;
        wrapper.find('.user-text-button').simulate('click');
        expect(callback).toHaveBeenCalled();
    });

});
