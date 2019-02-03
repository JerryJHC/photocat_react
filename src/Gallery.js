import React, { Component } from 'react'

class Gallery extends Component {

    renderImage(cat) {
        return (
            <div key={cat.id}>
                <img src={cat.url} />
            </div>
        );
    }

    render() {
        return (
            <div className="gallery">
                {this.props.cats.map(this.renderImage)}
            </div>
        )
    }
}

export default Gallery;