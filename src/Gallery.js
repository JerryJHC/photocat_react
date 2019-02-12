import React, { Component } from 'react'
import Image from './Image'

class Gallery extends Component {

    //Genera la imagen correspondiente
    renderImage(cat) {
        return (
            <div key={cat.id} className="imageContainer d-flex justify-content-around align-content-between ">
                <Image key={"Image_"+cat.id} cat={cat} />
            </div>
        );
    }

    //Genera una galeria con cada imagen de la coleccion
    render() {
        return (
            <div key="gallery" className="gallery d-flex justify-content-around flex-wrap">
                {this.props.cats.map(this.renderImage)}
            </div>
        )
    }
}

export default Gallery;