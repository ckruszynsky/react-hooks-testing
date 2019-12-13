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

describe('state controlled input field',() => {
    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    beforeEach(()=> {
        mockSetCurrentGuess.mockClear();
        React.useState = jest.fn(()=> ["",mockSetCurrentGuess]);
        wrapper = setup();
    });
   test('state updates with value of input box upon change',()=> {
         const inputBox = findByTestAttr(wrapper,'input-box');
         const mockEvent = { target:
            {
                value: 'train'
            }
        };

        inputBox.simulate('change',mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
   });

   test('when submit is clicked, setCurrentGuess is called with empty string',()=>{
       const submitButton = findByTestAttr(wrapper,"submit-button");
  
       submitButton.simulate('click',{ preventDefault() {}});
       expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
   })
})

