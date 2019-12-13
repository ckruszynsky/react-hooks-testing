import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { findByTestAttr } from '../test/testUtils';
import App from './App';

/**
 * Setup function for app component
 * @returns {ShallowWrapper}
 */
const setup = () => {
    return shallow(<App />);
}

test('renders without crashing', ()=> {
    const wrapper = setup();
    const component = findByTestAttr(wrapper,'component-app');
    expect(component.length).toBe(1);
})