import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
    console.log("🚀 ~ file: songDetail.js:5 ~ SongDetail ~ props:", props)
    return (<div> {props.mySelectedSong ? props.mySelectedSong.title : 'Song Detail'}</div>);
}

const mapStateToProps = (state) => {
    return {
        mySelectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);