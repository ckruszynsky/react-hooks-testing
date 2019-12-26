import {shallow, ShallowWrapper, mount} from 'enzyme';
import React from 'react';

import {findByTestAttr} from '../test/testUtils';
import App from './App';
import {reducer} from './App';

import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

/**
 * Setup function for app component
 * @param {string} secretWord - desired secretWord state value for test
 * @returns {ReactWrapper}
 */
const setup = (secretWord = "party") => {
    mockGetSecretWord.mockClear();
    hookActions.getSecretWord = mockGetSecretWord;

    const mockUseReducer = jest.fn()
        .mockReturnValue([
            {secretWord},
            jest.fn()
        ]);

    React.useReducer = mockUseReducer;

    /*
        Use mount, because useEffect not called on `shallow`
        https://github.com/airbnb/enzyme/issues/2086
    */
    return mount(<App />);
}

test('renders without crashing', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
    test('getSecretWord is called on App mount', () => {
        setup();
        //check to see if secret word was updated
        expect(mockGetSecretWord).toHaveBeenCalled();
    });

    test('secretWord does not update on App update', () => {
        const wrapper = setup();

        mockGetSecretWord.mockClear();

        //wrapper.update() doesn't trigger update
        //(issue forked from https://github.com/airbnb/enzyme/issues/2091)
        wrapper.setProps();

        expect(mockGetSecretWord).not.toHaveBeenCalled();
    });
});

describe("secretWord is not null", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup("party");
    });
  
    test("renders app when secretWord is not null", () => {
      const appComponent = findByTestAttr(wrapper, "component-app");
      expect(appComponent.exists()).toBe(true);
    });
    test("does not render spinner when secretWord is not null", () => {
      const spinnerComponent = findByTestAttr(wrapper, "spinner");
      expect(spinnerComponent.exists()).toBe(false);
    });
  
  });

  describe("secretWord is null", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(null);
    });
  
    test("does not render app when secretWord is null", () => {
      const appComponent = findByTestAttr(wrapper, "component-app");
      expect(appComponent.exists()).toBe(false);
    });
    test("renders spinner when secretWord is null", () => {
      const spinnerComponent = findByTestAttr(wrapper, "spinner");
      expect(spinnerComponent.exists()).toBe(true);
    });
  
  });

  describe("reducer tests", ()=> {
    const initialState = {
      secretWord: 'foo',
      language: 'en'
    };

      test('returns correct state object values for setSecretWord', ()=> {        
        const action = { type: 'setSecretWord', payload: 'bar'};
        const expectedState = {...initialState, secretWord: 'bar' };
        const actualState = reducer(initialState, action);
        expect(actualState).toEqual(expectedState);
      });

      test('throws error when invalid action type is passed', () => {
        expect(()=> (reducer({}, {type: 'fake', payload: 'fake'}))).toThrow(/Invalid action type/);        
      });

      test('returns correct state object for setLangauge action', ()=> {
        const action = { type: 'setLanguage', payload: 'fr'};
        const expectedState = {...initialState, language: 'fr'};
        const actualState = reducer(initialState,action);
        expect(actualState).toEqual(expectedState);
      });
  });