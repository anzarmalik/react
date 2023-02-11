import React from 'react'

const ImageList = (props) => {
    console.log("🚀 ~ file: images.js:4 ~ ImageList ~ props", props.images)
    const imageTags = props.images.map((image) => {
        return <img alt='' id={image.id} src={image.urls.regular} />
    });
    return (<div>{imageTags}</div>)
}

export default ImageList;