import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });
            setResults(data.query.search);
            console.log("🚀 ~ file: search.js:22 ~ search ~ setResults(data.query.search);:", data.query.search);
        };

        if(term && !results.length){
            search();
        }else{
            const timeOutId = setTimeout(() => {
                if (term) { search(); }
            }, 1000)
    
            return () => {
                clearTimeout(timeOutId);
            };
        }

    }, [term]);

    const renderResults = results.map((searchData) => {
        return (<div className='item' key={searchData.pageid} >
            <div className='right floated content'>
                <a className="ui button" href={`https://en.wikipedia.org?curid=${searchData.pageid}`} >
                    Go
                </a>
            </div>
            <div className='content'>
                <div className='header'>
                    {searchData.title}
                </div>
                {/* {searchData.snippet} */}
                <span dangerouslySetInnerHTML={{ __html: searchData.snippet }} ></span>
            </div>
        </div>);
    });

    return (
        <div>
            <div className='ui form' >
                <div className='field'>
                    <label> Search in wikipedia </label>
                    <input className='input' value={term} onChange={e => setTerm(e.target.value)} />
                </div>
            </div>
            <div className='ui celled list'> {renderResults}</div>
        </div>
    )

}

export default Search