import { shallow } from 'enzyme';

import React from 'react';

import { checkProps, findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats';


const defaultProps = { success : false};

/**
 *Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} [props={}] - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<Congrats {...setupProps} />);
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
  const wrapper = setup();

  //Act
  const component = findByTestAttr(wrapper, 'component-congrats');

  //Assert
  expect(component.text()).toBe('');

});

test('renders non-empty congrats message when success prop is true', () => {
  //Arrange
  const wrapper = setup({ success: true });

  //Act
  const message = findByTestAttr(wrapper, 'congrats-message');

  //Assert
  expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
  //Arrange 
  const expectedProps = { success: false};

  //Act
  checkProps(Congrats, expectedProps); 
});

