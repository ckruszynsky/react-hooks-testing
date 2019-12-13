import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { checkProps, findByTestAttr } from '../test/testUtils';
import Input from './Input';

const defaultProps = {secretWord: 'foo'}
/**
 * Setup function for Input 
 * @returns {ShallowWrapper}
 */
const setup = (props= {}) => {
  const setupProps = {...defaultProps,...props};
  return shallow(<Input {...setupProps} />);
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
    
    test('does not throw warning with expected props',()=> {
        checkProps(Input,{secretWord:'party'});
    });
});

