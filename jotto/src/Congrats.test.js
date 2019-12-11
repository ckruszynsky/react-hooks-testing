import React from 'react';
import Congrats from './Congrats';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {findByTestAttr} from '../test/testUtils';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});


/**
 *Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} [props={}] - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
}

test('renders without error', () => {
  //Arrange
  const wrapper = setup();

  //Act
  const component = findByTestAttr(wrapper, 'component-congrats');

  //Assert
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  //Arrange
  const wrapper = setup({success: false});

  //Act
  const component = findByTestAttr(wrapper, 'component-congrats');

  //Assert
  expect(component.text()).toBe('');

});

test('renders non-empty congrats message when success prop is true', () => {
  //Arrange
  const wrapper = setup({success: true});

  //Act
  const message = findByTestAttr(wrapper, 'congrats-message');  

  //Assert
  expect(message.text().length).not.toBe(0);
});