import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { findByTestAttr } from '../test/testUtils';
import Input from './Input';

/**
 * Setup function for Input 
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Input />);
}

describe('setups',()=> {
    let wrapper;
    beforeEach(()=> {
        wrapper = setup();
    });
    test('renders without error', ()=> {
         wrapper = setup();
         const component = findByTestAttr(wrapper,'component-input');
         expect(component.length).toBe(1);
    });
})

