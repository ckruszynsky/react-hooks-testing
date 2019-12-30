import React from 'react';
import languageContext from '../../contexts/languageContext';
import successContext from '../../contexts/successContext';
import guessedWordsContext from '../../contexts/guessedWordsContext';
import stringsModule from '../../helpers/strings';
import {getLetterMatchCount} from '../../helpers';

export const Input = ({secretWord}) => {
    const [success,setSuccess] = successContext.useSuccess();
    const [guessedWords,setGuessedWords] = guessedWordsContext.useGuessedWords();    
    const language = React.useContext(languageContext);
    const [currentGuess, setCurrentGuess] = React.useState('');

    const onSubmit = (evt) => {
        evt.preventDefault();
         // update guessedWords
         const letterMatchCount = getLetterMatchCount(currentGuess, secretWord);
         const newGuessedWords = [...guessedWords, { guessedWord: currentGuess, letterMatchCount }];
         setGuessedWords(newGuessedWords);
        
         //check against secretWord and update success if needed
         if(currentGuess === secretWord){
             setSuccess(true);
         }

         setCurrentGuess("")
    }

    if(success){return null}
    return (
        <form data-test="component-input" style={{marginTop: '40px'}}>
            <div className="form-group">
                <span className="font-weight-bold" style={{fontSize: '1.5rem'}}>Can you guess the secret word?</span>
                <input
                    data-test="input-box"
                    className="form-control"
                    type="text"
                    value={currentGuess}
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
