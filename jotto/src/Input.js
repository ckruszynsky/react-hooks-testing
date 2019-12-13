import PropTypes from 'prop-types';
import React from 'react';


export const Input = ({secretWord}) => {
    const [currentGuess, setCurrentGuess] = React.useState('');
    const onSubmit = (evt) => {
        evt.preventDefault();
        //TODO: update guessedWords context
        //TODO: check against secretWord & optionally update success context
        setCurrentGuess("");
    }
    return (
        <div data-test="component-input">
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="Enter your guess"
                    onChange={(event) => setCurrentGuess(event.target.value)}
                />
                <button
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    onClick={(evt)=> onSubmit(evt)}>
                        Submit
                </button>
            </form>
        </div>
    )
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}

export default Input;
