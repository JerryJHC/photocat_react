import React, { Component } from 'react'

class Gallery extends Component {

    renderImage(cat) {
        return (
            <div key={cat.id} className="imageContainer d-flex justify-content-around align-content-between">
                <img src={cat.url} alt={cat.id} />
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