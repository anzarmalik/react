import React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn : null};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '...',
                scope: 'email',
                plugin_name: 'Web client 1 twitch'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                });
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange= ()=>{
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        });
    }

    onSignIn = () =>{
        window.gapi.auth2.getAuthInstance().signIn();
    }

    onSignOut = () =>{
        window.gapi.auth2.getAuthInstance().signOut();
    }

    oAuthButtonText() {
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return <button className='ui button google red'  onClick={this.onSignOut} >
                <i  className='google icon' />
                Sign Out
            </button>
        } else {
            return <button className='ui button google red'   onClick={this.onSignIn} >
                <i  className='google icon' />
                Sign In with Google
            </button>
        }
    }

    render() {
        return <div>{this.oAuthButtonText()}</div>
    }
}

export default GoogleAuth;