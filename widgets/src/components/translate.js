import React, { useState } from "react";
import Dropdown from './dropDown';
import Convert from './convert'
const options = [
    {
        label: 'Africi',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'Hi'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, selectText] = useState()

    return (
        <div className="ui form" >
            <div className="field">
                <label>Enter text</label>
                <input value={text} onChange={(e) => { selectText(e.target.value) }} />
            </div>
            <Dropdown selected={language} setSelection={setLanguage} options={options} label={"language"} />
            <div>
                <h3 className="ui header">Output</h3>
                <Convert text={text}  language={language} />
            </div>
        </div>
    )
}

export default Translate