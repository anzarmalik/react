import React from 'react';
import SearchBar from './searchBar';

// const App = () => {
//     return (<div className= 'ui container'  style={{marginTop:'10px'}} ><SearchBar /></div>)
// };

class App extends React.Component {
    onSearchSubmit(term) {
        console.log('term :', term);
    }
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }} ><SearchBar searchSubmit={this.onSearchSubmit} /></div>
        );
    }
}

export default App;