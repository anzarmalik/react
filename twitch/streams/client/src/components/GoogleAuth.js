import React from 'react';
import { signIn, signOut } from '../actions';
import { connect } from 'react-redux';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '',
                scope: 'email',
                plugin_name: 'Web client 1 twitch'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }
 
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        window.gapi.auth2.getAuthInstance().signIn();
    }

    onSignOutClick = () => {
        window.gapi.auth2.getAuthInstance().signOut();
    }

    oAuthButtonText() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return <button className='ui button google red' onClick={this.onSignOutClick} >
                <i className='google icon' />
                Sign Out
            </button>
        } else {
            return <button className='ui button google red' onClick={this.onSignInClick} >
                <i className='google icon' />
                Sign In with Google
            </button>
        }
    }

    render() {
        return <div>{this.oAuthButtonText()}</div>
    }

}


const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);