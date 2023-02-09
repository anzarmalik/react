import React from 'react';
import SearchBar from './searchBar';
import axios from 'axios'
// const App = () => {
//     return (<div className= 'ui container'  style={{marginTop:'10px'}} ><SearchBar /></div>)
// };

class App extends React.Component {
    onSearchSubmit(term) {
        console.log('term :', term);
        axios.get('https://api.unsplash.com/',{
            params: {query: term},
            headers: {
                Authorization : 'Client-ID Cwo8L2PBpDWDs2CPIc6TRX9q0HLxk7s3sKV1gmakvDo'
            }
        });
        
    }
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }} ><SearchBar searchSubmit={this.onSearchSubmit} /></div>
        );
    }
}

export default App;