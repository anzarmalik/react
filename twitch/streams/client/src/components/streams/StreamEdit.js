import React from "react";
import { connect } from 'react-redux';


const StreamEdit =(props) => {
    console.log("🚀 ~ file: StreamEdit.js:4 ~ StreamEdit ~ props:", props);
    
    return <div>StreamEdit</div>
}

const mapStateToProps = (state, ownProps)=>{
return { stream: state.streams[ownProps.match.params.id] };
}

export default  connect(mapStateToProps)(StreamEdit);
