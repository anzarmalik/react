import React from "react";
import { fetchStreams } from '../../actions/index'
import { connect } from "react-redux";
import {Link} from "react-router-dom"

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderEditUpdate(stream) {
        if (stream.userId === this.props.currentUserId) {
            return <div>Add/Edit</div>
        }
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (<div style={{textAlign: "right"}}>
                <Link to="/streams/new" className="ui button primary">
                Create Stream
                </Link>
            </div>)
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id} >
                    <i className="large middle icon aligned camera " ></i>
                    <div className="content" >
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                    {this.renderEditUpdate(stream)}
                </div>
            )
        })
    }

    render() {
        return (<div>
            {this.renderCreate()}
            <h2>
                All Streams
            </h2>
            <div className="ui celled list">
                {this.renderList()}
            </div>
        </div>)
    }

}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
