import '../imageList.css';
import React from 'react'

class ImageCard extends React.Component {
   render() {
    return (<div><img alt={this.props.imageDetail.description} key={this.props.imageDetail.id} src={this.props.imageDetail.src} /></div>)
   }
}

export default ImageCard;