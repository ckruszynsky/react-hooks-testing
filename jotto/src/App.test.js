import { shallow, ShallowWrapper,mount } from 'enzyme';
import React from 'react';

import { findByTestAttr } from '../test/testUtils';
import App from './App';

import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

/**
 * Setup function for app component
 * @returns {ReactWrapper}
 */
const setup = () => {

    mockGetSecretWord.mockClear();
    hookActions.getSecretWord = mockGetSecretWord;
    
    /*
        Use mount, because useEffect not called on `shallow`
        https://github.com/airbnb/enzyme/issues/2086
    */
    return mount(<App />);
}

test('renders without crashing', ()=> {
    const wrapper = setup();
    const component = findByTestAttr(wrapper,'component-app');
    expect(component.length).toBe(1);
});

describe('getSecretWord calls',()=> {
    test('getSecretWord is called on App mount', ()=> {
        setup();
        //check to see if secret word was updated
        expect(mockGetSecretWord).toHaveBeenCalled();
    });
})