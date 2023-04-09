import React, { useEffect } from 'react';
import axios from 'axios';
const Convert = (text, language) => {
    useEffect(() => {
        console.log('convert');
        axios.post('https://translation.googleapis.com/language/translate/v2',{}, {
            params: {
                q: text,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        });
    }, [text, language])

    return (<div>convert</div>)
}

export default Convert;