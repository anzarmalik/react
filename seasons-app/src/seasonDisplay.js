import React from 'react';

const getSeason = (lat, month)=>{
    if(month > 2 || month <9){
      return lat > 0 ? 'summer' : 'winter';
    }else{
      return lat > 0 ? 'winter' : 'summer';
    }
}


const SeasonDisplay = (props) => {
    console.log("🚀 ~ file: seasonDisplay.js:4 ~ SeasonDisplay ~ props", props)
    return (<div> Hi There i am in Latitude {props.detailObj.lat} and season is {getSeason(props.detailObj.lat,new Date().getMonth())}
        <br /> Error : {props.detailObj.error} </div>);
}

export default SeasonDisplay