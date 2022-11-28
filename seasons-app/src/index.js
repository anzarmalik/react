import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => { console.log(position) },
//     (err) => { console.log(err) }
//   );
//   return <div> Hi There </div>
// };

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    return (<div> Hi There i am in Latitude {this.state.lat}
      <br /> Error : {this.state.errorMessage} </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
