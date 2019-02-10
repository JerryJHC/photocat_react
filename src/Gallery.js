import React, { Component } from 'react'
import Image from './Image'

class Gallery extends Component {

    renderImage(cat) {
        return (
            <div key={cat.id} className="imageContainer d-flex justify-content-around align-content-between ">
                <Image cat={cat} />
            </div>
        );
    }

    render() {
        return (
            <div className="gallery d-flex justify-content-around flex-wrap">
                {this.props.cats.map(this.renderImage)}
            </div>
        )
    }
}

export default Gallery;