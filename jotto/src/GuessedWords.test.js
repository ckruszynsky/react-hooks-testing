import React from 'react';
import {findByTestAttr, checkProps} from '../test/testUtils';
import GuessedWords from './GuessedWords';
import {shallow, mount, render} from 'enzyme';


const defaultProps = {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
};


/**
 * Factory function to create a ShallowWrapper for the GuessedWords component
 * @param {object} props - Component props specific to this setup. 
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps} />);
};

describe('setups', () => {
    test('does not throw warning with expected props', () => {
        checkProps(GuessedWords, defaultProps);
    });
});

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({guessedWords: []});
    });

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, "guess-instructions");
        expect(instructions.text().length).not.toBe(0);
    });
});

describe('if there are words guessed', () => {
    let wrapper;
    let guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 3},
        {guessedWord: 'party', letterMatchCount: 3}
    ];
    beforeEach(() => {
        wrapper = setup({guessedWords: guessedWords});
    });

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders guessed words section', () => {   
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
        console.log(guessedWordsNode.debug());
        expect(guessedWordsNode.length).toBe(1);
    });

    test('correct number of guessed words displayed', () => {
        const guessedWordNodes = findByTestAttr(wrapper,'guessed-word');
        expect(guessedWordNodes.length).toBe(guessedWords.length);
    });
});