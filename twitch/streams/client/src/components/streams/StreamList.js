import React from "react";
import { fetchStreams } from '../../actions/index'
import { connect } from "react-redux";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    render() { return <div>StreamList</div> }
}

export default connect(null, { fetchStreams })(StreamList);
