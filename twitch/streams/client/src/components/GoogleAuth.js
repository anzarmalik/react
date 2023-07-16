import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '...',
                scope:'email',
                plugin_name:'App Name that you used in google developer console API'
            })
        })
    }

    render(){
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;