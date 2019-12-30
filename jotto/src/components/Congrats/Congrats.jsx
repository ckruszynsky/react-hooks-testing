import React from 'react';
import languageContext from '../../contexts/languageContext';
import successContext from '../../contexts/successContext';
import guessedWordsContext from '../../contexts/guessedWordsContext';
import stringsModule from '../../helpers/strings';
/**
 * Functional react component for congrats message
 * @function
 * @param {object} props - React props. 
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false )
 */
const Congrats = () => {   
    const language = React.useContext(languageContext);    
    const [success,setSuccess] = successContext.useSuccess();
    const [guessedWords,setGuessedWords] = guessedWordsContext.useGuessedWords();    
    if (success) {        
        return (
          <div data-test="component-congrats" className="alert alert-success alert-dismissible fade show">
            <span data-test="congrats-message">
              {stringsModule.getStringByLanguage(language, 'congrats')}
            </span>
            <button type="button" 
              data-test="dismiss-button"
              className="close" 
              data-dismiss="alert" 
              aria-label="close"
             onClick={()=> {
               setSuccess(false)
               setGuessedWords([])
             }}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        );
      } else {
        return (
          <div data-test="component-congrats" />
        );
      }
}

export default Congrats;