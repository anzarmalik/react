import React from 'react';
import SearchBar from './searchBar';
import axios from 'axios'
// const App = () => {
//     return (<div className= 'ui container'  style={{marginTop:'10px'}} ><SearchBar /></div>)
// };

class App extends React.Component {
    state = {
        images: []
    }
    onSearchSubmit = async(term)=> {
        // console.log('term :', term);
       const response = await  axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term},
            headers: {
                Authorization : 'Client-ID Cwo8L2PBpDWDs2CPIc6TRX9q0HLxk7s3sKV1gmakvDo'
            }
        });
        console.log(response.data.results)
        this.setState({images : response.data.results});
    }
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }} ><SearchBar searchSubmit={this.onSearchSubmit} />
            Found : {this.state.images.length}
            </div>
        );
    }
}

export default App;