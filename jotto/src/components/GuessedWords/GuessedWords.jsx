import PropTypes from 'prop-types';
import React from 'react';
import languageContext from '../../contexts/languageContext';
import stringsModule from '../../helpers/strings';

function buildInstructionsContainer(language) {
    let contents = (<span data-test="guess-instructions">
        {stringsModule.getStringByLanguage(language,'guessPrompt')}
    </span>);
    return contents;
}

function buildGuessedWordsTable(language,guessedWords) {
    const guessedWordRows = guessedWords.map((word, index) => (<tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
    </tr>));
    let contents = (<div data-test="guessed-words">
        <h3>{stringsModule.getStringByLanguage(language, 'guessedWords')}</h3>
        <table className="table table-sm">
            <thead className="thead-light">
                <tr>
                    <th>{stringsModule.getStringByLanguage(language, 'guessColumnHeader')}</th>
                    <th>{stringsModule.getStringByLanguage(language, 'matchingLettersColumnHeader')}</th>
                </tr>
            </thead>
            <tbody>
                {guessedWordRows}
            </tbody>
        </table>
    </div>);
    return contents;
}

const GuessedWords = ({guessedWords}) => {
    const language = React.useContext(languageContext);

    let contents = !guessedWords || guessedWords.length === 0 ?
        buildInstructionsContainer(language)
        : buildGuessedWordsTable(language,guessedWords);
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    );
}


export default GuessedWords

