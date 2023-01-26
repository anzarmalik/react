import React from "react";

class SearchBar extends React.Component {
    onInputChange(event){
     console.log(event.target.value);
    };
    render() {
        return (<div className='ui segment' >
            <form className= 'ui form'>
                <label >Image Search</label>
                <input type='text' className='field' onChange={this.onInputChange} />
            </form>
        </div>)
    }
}

export default SearchBar