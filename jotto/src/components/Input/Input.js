import PropTypes from 'prop-types';
import React from 'react';
import languageContext from '../../contexts/languageContext';
import stringsModule from '../../helpers/strings';

export const Input = ({secretWord}) => {
    const [currentGuess, setCurrentGuess] = React.useState('');
    const language = React.useContext(languageContext);

    const onSubmit = (evt) => {
        evt.preventDefault();
        //TODO: update guessedWords context
        //TODO: check against secretWord & optionally update success context
        setCurrentGuess("");
    }
    return (
        <form data-test="component-input" style={{marginTop: '40px'}}>
            <div className="form-group">
                <span className="font-weight-bold" style={{fontSize: '1.5rem'}}>Can you guess the secret word?</span>
                <input
                    data-test="input-box"
                    className="form-control"
                    type="text"
                    placeholder={stringsModule.getStringByLanguage(language, 'guessInputPlaceholder')}
                    onChange={(event) => setCurrentGuess(event.target.value)}
                />
            </div>

            <button
                data-test="submit-button"
                className="btn btn-primary mb-2"
                onClick={(evt) => onSubmit(evt)}>
                {stringsModule.getStringByLanguage(language, 'submit')}
            </button>
        </form>
    )
}

export default Input;
