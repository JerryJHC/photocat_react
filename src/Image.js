import React, { Component } from 'react'

class Image extends Component {

    constructor() {
        super();
        this.state = {
            loading: true
        };
    }

    loaded = () => {
        this.setState({ loading: false });
    }

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