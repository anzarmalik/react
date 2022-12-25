import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => { console.log(position) },
//     (err) => { console.log(err) }
//   );
//   return <div> Hi There </div>
// };

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     lat: null,
  //     errorMessage: ''
  //   };
  // }

  state = {
    lat: null,
    errorMessage: ''
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('position  ',position);
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    return <SeasonDisplay detailObj={{ lat: this.state.lat, error: this.state.errorMessage }} />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
