import React from 'react';
import {findByTestAttr, checkProps} from '../../../test/testUtils';
import { shallow, mount, render } from 'enzyme';
import Congrats from './Congrats';
import languageContext from '../../contexts/languageContext';
import successContext from '../../contexts/successContext';
import guessedWordsContext from '../../contexts/guessedWordsContext';


/**
* Factory function to create a ReactWrapper for the Congrats component.
* @function setup
* @param {object} testValues - contextValues specific to this setup.
* @returns {ReactWrapper}
*/
const setup = ({ success, language }) => {
  language = language || 'en';
  success = success || false;

  return mount(
    <languageContext.Provider value={language}>  
    <guessedWordsContext.GuessedWordsProvider>
    <successContext.SuccessProvider value={[success,jest.fn()]}>
        <Congrats />      
      </successContext.SuccessProvider>    
      </guessedWordsContext.GuessedWordsProvider>
    </languageContext.Provider>
  );
}

describe('language picker', () => {
  test('correctly renders congrats string in English by default', () => {
    const wrapper = setup({ success: true });
    const congratsMessage = findByTestAttr(wrapper,'congrats-message');
    expect(congratsMessage.text()).toBe('Congratulations! You guessed the word!');
  });
  test('correctly renders congrats string in emoji', () => {
    const wrapper = setup({ success: true, language: "emoji" });
    const congratsMessage = findByTestAttr(wrapper,'congrats-message');
    expect(congratsMessage.text()).toBe('🎯🎉');
  });
});

test('renders without error', () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

test('renders dismiss button when `success` is true', ()=> {
  const wrapper = setup({success:true});
  const dismissButton = findByTestAttr(wrapper, 'dismiss-button');
  expect(dismissButton.length).toBe(1);
});

