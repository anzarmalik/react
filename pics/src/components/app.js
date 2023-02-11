import React from 'react';
import SearchBar from './searchBar';
import unsplash from '../api/unsplash';
import ImageList from './images';
// const App = () => {
//     return (<div className= 'ui container'  style={{marginTop:'10px'}} ><SearchBar /></div>)
// };

class App extends React.Component {
    state = {
        images: []
    }
    onSearchSubmit = async(term)=> {
        // console.log('term :', term);
       const response = await  unsplash.get('search/photos',{
            params: {query: term},
        });
        // console.log(response.data.results)
        this.setState({images : response.data.results});
    }
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }} ><SearchBar searchSubmit={this.onSearchSubmit} />
            Found : {this.state.images.length}
            <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;