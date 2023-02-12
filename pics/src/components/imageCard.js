import '../imageList.css';
import React from 'react'

class ImageCard extends React.Component {

    constructor(props){
        super(props)

        this.state={
            span:0
        }
        this.imageRef =  React.createRef()
    }

    componentDidMount() {
      this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = ()=>{
        const imageHeight = this.imageRef.current.clientHeight;
        this.setState({span: Math.ceil(imageHeight/ 10) });
    }

   render() {
    return (<div style={{gridRowEnd : `span ${this.state.span}`}} ><img  ref={this.imageRef} alt={this.props.imageDetail.description} key={this.props.imageDetail.id} src={this.props.imageDetail.src} /></div>)
   }
}

export default ImageCard;