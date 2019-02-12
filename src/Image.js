import React, { Component } from 'react'
import Modal from './Modal'

class Image extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            show: false
        };
    }

    //Si la imagen se ha cargado marca el estado
    loaded = () => {
        this.setState({ loading: false });
    }

    //Muestra la imagen en un modal
    show = () => {
        this.setState({ show: true });
    }

    //Genera la vista de la imagen y el span si esta cargando la imagen
    render() {
        let cat = this.props.cat;
        let view = [];
        //Muestra un spinner para simular carga
        if (this.state.loading) {
            view.push(<span key={"span_" + cat.id} className="spinner-border text-warning"></span>);
        }
        view.push(<img key={"img_"+cat.id} src={cat.url} alt={cat.id} onLoad={this.loaded} onClick={this.show} />);
        if (this.state.show) {
            view.push(<Modal key={"Modal_"+cat.id} cat={cat} />);
        }
        return view;
    }
}

export default Image;