import '../imageList.css';
import React from 'react'
import ImageCard from './imageCard';

const ImageList = (props) => {
    const imageTags = props.images.map(({description , id , urls}) => {
        return <ImageCard key={id} imageDetail={{src:urls.regular,id, alt:description }}/>
    });
    return (<div className="imageList">{imageTags}</div>)
}

export default ImageList;