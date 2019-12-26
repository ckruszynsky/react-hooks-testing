import React from 'react'
import propTypes from 'prop-types';



const LanguagePicker = ({setLanguage}) => {
    const languages = [
        {code: 'en', symbol: '🇺🇸', label: 'English'},
        {code: 'emoji', symbol: '😊', label: 'Emojii'},
    ];


    const languageIcons = languages.map(lang =>
        <div className="col-sm-2" key={lang.code}>
        <button
            className="btn btn-sm btn-light"
            data-test="language-icon"
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
        >
            {lang.label} - {lang.symbol}
        </button>
        </div>
    );

    return (
        <div data-test="component-language-picker" className="row">
            <div className="col-sm-2"><label>Pick a language:</label></div>
            {languageIcons}
        </div>
    );
}

LanguagePicker.propTypes = {
    setLanguage: propTypes.func.isRequired
}

export default LanguagePicker;