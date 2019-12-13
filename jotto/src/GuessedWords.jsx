import PropTypes from 'prop-types';
import React from 'react';


function buildInstructionsContainer() {
    let contents = (<span data-test="guess-instructions">
        Try to guess the secret word!
    </span>);
    return contents;
}

function buildGuessedWordsTable(props) {
    const guessedWordRows = props.guessedWords.map((word, index) => (<tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
    </tr>));
    let contents = (<div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
            <thead className="thead-light">
                <tr>
                    <th>Guess</th>
                    <th>Matching Letters</th>
                </tr>
            </thead>
            <tbody>
                {guessedWordRows}
            </tbody>
        </table>
    </div>);
    return contents;
}

const GuessedWords = props => {
    let contents = props.guessedWords.length === 0 ?
        buildInstructionsContainer()
        : buildGuessedWordsTable(props);
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    );
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
    ,
}

export default GuessedWords

