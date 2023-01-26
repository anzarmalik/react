import React from "react";

class SearchBar extends React.Component {
    onInputChange(event){
     console.log(event.target.value);
    };

    onInputSubmit = (event) =>{
        event.preventDefault();
        console.log('value : ',this.state.term)
    };

    state ={term:''}
    render() {
        return (<div className='ui segment' >
            <form onSubmit={this.onInputSubmit} className= 'ui form'>
                <label >Image Search</label>
                <input type='text' className='field' value={this.state.term} 
                // onChange={this.onInputChange} 
                onChange={(e)=>this.setState({term:e.target.value.toUpperCase() })}
                />
            </form>
        </div>)
    }
}

export default SearchBar