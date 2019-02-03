import React, { Component } from 'react'

class Gallery extends Component {

    renderImage(cat) {
        return (
            <div>
                <img
                    src={cat.url}
                />
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="gallery">
                    {this.props.cats.map(this.renderImage)}
                </div>
            </div>
        )
    }
}

export default Gallery;