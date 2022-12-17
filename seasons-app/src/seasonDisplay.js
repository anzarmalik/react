import React from 'react';

const SeasonDisplay = (props) => {
    console.log("🚀 ~ file: seasonDisplay.js:4 ~ SeasonDisplay ~ props", props)
    return (<div> Hi There i am in Latitude {props.detailObj.lat}
        <br /> Error : {props.detailObj.error} </div>);
}

export default SeasonDisplay