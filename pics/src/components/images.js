import '../imageList.css';
import React from 'react'

const ImageList = (props) => {
    console.log("🚀 ~ file: images.js:4 ~ ImageList ~ props", props.images)
    const imageTags = props.images.map(({description , id , urls}) => {
        return <img alt={description} key={id} src={urls.regular} />
    });
    return (<div className="imageList">{imageTags}</div>)
}

export default ImageList;