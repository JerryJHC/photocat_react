import React, { Component } from 'react'

class Image extends Component {

    constructor() {
        super();
        this.state = {
            loading: true
        };
    }

    //Si la imagen se ha cargado marca el estado
    loaded = () => {
        this.setState({ loading: false });
    }

    //Genera la vista de la imagen y el span si esta cargando la imagen
    render() {
        let cat = this.props.cat;
        let view = [];
        if (this.state.loading) {
            view.push(<span key={"span_" + cat.id} className="spinner-border text-warning"></span>);
        }
        view.push(<img key={cat.id} src={cat.url} alt={cat.id} onLoad={this.loaded} />);
        return view;
    }
}

export default Image;