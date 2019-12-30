import {mount} from 'enzyme';
import React from 'react';

import {checkProps, findByTestAttr} from '../../../test/testUtils';
import Input from './Input';
import languageContext from '../../contexts/languageContext';
import successContext from '../../contexts/successContext';
import guessedWordsContext from '../../contexts/guessedWordsContext';

/**
* Create ReactWrapper for Input component for testing
* @param {object} testValues - Context and props values for this specific test.
* @returns {ReactWrapper} - Wrapper for Input component and providers
*/
const setup = ({language, secretWord, success}) => {
  language = language || 'en';
  secretWord = secretWord || 'foo';
  success = success || false;
  return mount(
    <languageContext.Provider value={language}>
      <successContext.SuccessProvider value={[success, jest.fn()]}>
        <guessedWordsContext.GuessedWordsProvider>
          <Input secretWord={secretWord} />
        </guessedWordsContext.GuessedWordsProvider>
      </successContext.SuccessProvider>
    </languageContext.Provider>
  );
}

describe('setups', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({});
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
  });
});

describe('state controlled input field', () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup({});
  });
  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = {
      target:
      {
        value: 'train'
      }
    };

    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('when submit is clicked, setCurrentGuess is called with empty string', () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");

    submitButton.simulate('click', {preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  })
});

describe('language picker', () => {
  test('correctly renders submit string in English', () => {
    const wrapper = setup({language: 'en'});
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.text()).toBe('Submit');
  });
  test('correctly renders submit string in emoji', () => {
    const wrapper = setup({language: "emoji"});
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.text()).toBe('🚀');
  });

  test('correctly renders placeholder string in English', () => {
    const wrapper = setup({language: 'en'});
    const inputBox = findByTestAttr(wrapper, 'input-box');
    expect(inputBox.props().placeholder).toBe('enter guess');
  });
  test('correctly renders submit string in emoji', () => {
    const wrapper = setup({language: "emoji"});
    const inputBox = findByTestAttr(wrapper, 'input-box');
    expect(inputBox.props().placeholder).toBe('⌨️🤔');
  });

});


test('input component does not show when success is true', () => {
  const wrapper = setup({secretWord: 'party', success: true});
  //isEmptyRender returns whether or not the wrapper would render only the allowed falsy values: 
  //false or null
  expect(wrapper.isEmptyRender()).toBe(true);
})