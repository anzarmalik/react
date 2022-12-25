import React from 'react';

const getSeason = (lat, month) => {
  if (!lat) { return ' not known ' };
  if (month > 2 || month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}


const SeasonDisplay = (props) => {
  console.log("🚀 ~ file: seasonDisplay.js:4 ~ SeasonDisplay ~ props", props)
  const seasonDetails = getSeason(props.detailObj.lat, new Date().getMonth());
  const error = props.detailObj.error ? `Error : ${props.detailObj.error}` : ``;
  const iconDetail = seasonDetails === 'winter' ? `snowflake` : `sun`;
  return (<div> Hi There i am in Latitude {props.detailObj.lat} , month number is {new Date().getMonth() + 1} and season is {seasonDetails}
    <br /> <h1>{seasonDetails === 'winter' ? 'its chillin cold ' : 'its hot outside '}</h1>
    <br /> {error}
    <br /> <i className={`${iconDetail} icon`} /></div>);
}

export default SeasonDisplay