import React from 'react';
import './css/seasonDisplay.css';

const getSeason = (lat, month) => {
  if (!lat) { return 'not_known' };
  if (month > 2 || month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const seasonConfig = {
  summer: {
    text: 'its chillin cold ',
    iconName: 'snowflake'
  },
  winter: {
    text: 'its hot outside ',
    iconName: 'sun'
  },
  not_known: {
    text: ' not known ',
    iconName: 'sun'
  }
};

const SeasonDisplay = (props) => {
  console.log("🚀 ~ file: seasonDisplay.js:4 ~ SeasonDisplay ~ props", props)
  const seasonDetails = getSeason(props.detailObj.lat, new Date().getMonth());
  console.log("🚀 ~ file: seasonDisplay.js:26 ~ SeasonDisplay ~ seasonDetails", seasonDetails)
  const error = props.detailObj.error ? `Error : ${props.detailObj.error}` : ``;
  const { text, iconName } = seasonConfig[seasonDetails];
  return (
    <div className={`seasonDisplay ${seasonDetails}`}> Hi There i am in Latitude {props.detailObj.lat} , month number is {new Date().getMonth() + 1} and season is {seasonDetails}
    <br /> <h1>{text}</h1>
    <br /> {error}
    <br /> <i className={`icon_right massive ${iconName} icon`} />
    </div>
    );
}

export default SeasonDisplay