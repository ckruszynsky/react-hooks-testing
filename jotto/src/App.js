import './App.css';

import React from 'react';
import hookActions from './actions/hookActions';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';
import languageContext from './contexts/languageContext';
import LanguagePicker from './components/LanguagePicker';

/**
 * @description reducer to update state, called automatically by dispatch
 * @param {object} state - existing state
 * @param {object} action - contains the type and `payload` properties for the state update
 *                          for example: {type: "setSecretWord", payload: "party"}
 * @returns {object} - new state
 */
export function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return {...state, secretWord: action.payload};
    case "setLanguage":
      return {...state, language: action.payload};
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
}

function App() {
  const defaultState = {
    secretWord: null,
    language: 'en'
  };

  const [state, dispatch] = React.useReducer(
    reducer,
    defaultState
  );

  const setSecretWord = (secretWord) => dispatch({type: 'setSecretWord', payload: secretWord});
  const setLanguage = (language) => dispatch({type: 'setLanguage', payload: language});

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, []);


  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    );
  }

  return (
    <div data-test="component-app" className="container">
      <div className="row bg-primary mb-3 mt-1" style={{borderBottom:'1px solid #eee'}}>
        <div className="col">
          <h1 className="text-white">Jotto</h1>
        </div>
      </div>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <Input secretWord={state.secretWord} />
        <GuessedWords />
      </languageContext.Provider>
    </div>
  );
}

export default App;
