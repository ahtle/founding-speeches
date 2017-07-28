import React from 'react';
import {shallow, mount} from 'enzyme';
import Card from './index';


describe('<Card />', () => {
    const props = {
        history: [],
        presId: 1
    }

    it('render without crashing', () => {
        shallow(<Card />);
    });

    it('render card-date, card-img, card-snippet, card-info, card-name, and card-id when mouse is not hovering', () => {
        const wrapper = shallow(<Card />);
        expect(wrapper.find('.card-date').exists()).toEqual(true);
        expect(wrapper.find('.card-img').exists()).toEqual(true);
        expect(wrapper.find('.card-snippet').exists()).toEqual(true);
        expect(wrapper.find('.card-id').exists()).toEqual(true);
        expect(wrapper.find('.card-info').exists()).toEqual(true);
        expect(wrapper.find('.card-name').exists()).toEqual(true);
    });

    it('change class names when mouse is hovering', () => {
        const wrapper = shallow(<Card />);
        wrapper.instance().handleMouseEnter();
        expect(wrapper.find('.card-img-hover').exists()).toEqual(true);
        expect(wrapper.find('.card-snippet-hover').exists()).toEqual(true);
        expect(wrapper.find('.card-id-hover').exists()).toEqual(true);
        expect(wrapper.find('.card-info-hover').exists()).toEqual(true);
        expect(wrapper.find('.card-name-hover').exists()).toEqual(true);
        expect(wrapper.find('.hidden').exists()).toEqual(true);
        expect(wrapper.find('.card-date').exists()).toEqual(false);
        expect(wrapper.find('.card-img').exists()).toEqual(false);
        expect(wrapper.find('.card-snippet').exists()).toEqual(false);
        expect(wrapper.find('.card-id').exists()).toEqual(false);
        expect(wrapper.find('.card-info').exists()).toEqual(false);
        expect(wrapper.find('.card-name').exists()).toEqual(false);
    });

});