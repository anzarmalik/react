import React ,{ useState ,useEffect} from 'react';
import axios from 'axios';

const Search = ()=>{
    const [term, setTerm] = useState('');

    useEffect(() =>{
      const search = async()=>{
           await axios.get('https://en.wikipedia.org/w/api.php',{
               params: {
                   action: 'query',
                   list:'search',
                   origin:'*',
                   format:'json',
                   srsearch:term,

               }
           });
        };
        search()
        // console.log("🚀 ~ file: search.js:23 ~ useEffect ~ search:", search())
    } )

    return (
        <div>
            <div className='ui form' >
                <div className= 'field'>
                    <label> Search in wikipedia </label>
                <input  className='input' value={term}  onChange={e => setTerm(e.target.value)} />
                </div>
            </div>
        </div>
    )

}

export default Search