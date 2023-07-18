import React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn : null};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '',
                scope: 'email',
                plugin_name: 'App Name that you used in google developer console API'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                });
            })
        })
    }

    oAuthButtonText() {
        if (this.state.isSignedIn === null) {
            return "status not known! "
        } else if (this.state.isSignedIn) {
            return "signed In! "
        } else {
            return "signed out"
        }
    }

    render() {
        return <div>Google Auth {this.oAuthButtonText()}</div>
    }
}

export default GoogleAuth;