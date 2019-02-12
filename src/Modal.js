import React, { Component } from 'react'

class Modal extends Component {

    //Genera una galeria con cada imagen de la coleccion
    render() {
        let cat = this.props.cat;
        return (
            <div className="modal" key={"m_" + cat.id}>
                <span key={"ms_"+cat.id} className="close">&times;</span>
                <img className="modal-content" key={"mi_" + cat.id} src={cat.url} alt={cat.id} />
            </div>
        );
    }
}

export default Modal;