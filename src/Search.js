import React, { Component } from 'react'
import ajax from './ajax'
import Gallery from './Gallery'

class Search extends Component {

  constructor() {
    super();
    this.state = {
      categories: [],
      cats: [],
      limit: 5,
      page: 0,
      currentLimit: 5,
      currentCategory: 0,
      loading: true,
      maxCats: 0
    }
    //Hace la peticion al servidor en busca de las categorias
    ajax('GET', categoriesURL).then(this.setCategories).catch(() => console.log("Error : AJAX CATEGORIES"));
  }

  //recibe el JSON de categorias y coloca loading a false para mostrar el buscador
  setCategories = (jsonString) => {
    try {
      this.setState({ categories: JSON.parse(jsonString), loading: false });
    } catch{
      console.log("Error: Parse JSON");
    }
  }

  //recibe el JSON con los gatos de la API y genera la coleccion
  setCats = async (response) => {
    try {
      if (this.state.maxCats !== response[1]) {
        await this.setState({ maxCats: parseInt(response[1]) });
      }
      this.setState({ cats: JSON.parse(response[0]) });
    } catch{
      console.log("Error: Parse JSON");
    }
  }

  //Realiza la busqueda de la categoria y con el limite seleccionado
  searchCats = async () => {
    let category = document.getElementById("categories").selectedOptions[0].value;
    //Si la catergoria es diferente a la anterior busqueda utiliza la pagina 0
    if (this.state.currentCategory !== category) {
      await this.setState({ currentCategory: category, page: 0 });
    }
    //Si el limite es distinto al de la anterior busqueda utiliza la pagina 0
    if (this.state.currentLimit !== this.state.limit) {
      await this.setState({ currentLimit: this.state.limit, page: 0 });
    }
    //Genera la uri y realiza la peticion de imagenes
    let searchURL = catURL.replace('<limit>', this.state.limit).replace('<page>', this.state.page).replace('<category>', category);
    ajax('GET', searchURL, true).then(this.setCats).catch(() => console.log("Error : AJAX CATS"));
  }

  //Genera el option de cada categoria
  renderOption(category) {
    return (
      <option key={category.id} value={category.id}>{category.name}</option>
    );
  }

  //Selecciona el limite nuevo de imagenes
  setLimit = (event) => {
    this.setState({ limit: event.target.selectedOptions[0].value });
  }

  //Asigna la pagina a utilizar y realiza una nueva busqueda
  setPage = (event) => {
    let page = this.state.page;
    if (event.target.id === 'next') {
      page++;
    } else if (event.target.id === 'prev') {
      page = page > 0 ? page - 1 : page;
    } else {
      page = parseInt(event.target.innerText) - 1;
    }
    this.setState({ page: page }, this.searchCats);
  }

  //Genera los botones  de las paginas, anterior y siguiente
  renderPageButtons() {
    let pages = [];
    if (this.state.cats.length > 0 || this.state.page > 0) {
      //Si es la primera pagina no muestra el boton de anterior
      if (this.state.page > 0) {
        pages.push(<button id="prev" key="prev" onClick={this.setPage} className="btn btn-info">Anterior</button>);
      }
      let factor = this.state.maxCats / this.state.limit > 5 ? 5 : this.state.maxCats / this.state.limit ;
      let startPage = this.state.page < factor ? 1 : this.state.page - 3;
      for (let i = startPage; i < startPage + factor; i++) pages.push(<button key={i} onClick={this.setPage} className={this.state.page + 1 === i ? "btn btn-success" : "btn btn-link"}>{i}</button>);
      //Si es la ultima pagina no muestra el boton de siguiente
      if (this.state.page + 1 < this.state.maxCats / this.state.limit) {
        pages.push(<button id="next" key="next" onClick={this.setPage} className="btn btn-info">Siguiente</button>);
      }
    }
    return pages;
  }

  render() {
    //Si esta cargando las categorias muestra un spinner
    if (this.state.loading) {
      return (
        <div className="center-block">
          <span key="loading" className="spinner-grow text-warning m-5"></span>
        </div>
      );
    } else {
      //Si esta todo correcto mostrara los desplegables, el boton y la galeria
      return (
        <div>
          <span>Categories</span>
          <select id="categories">
            {this.state.categories.map(this.renderOption)}
          </select>
          <button onClick={this.searchCats} className="btn btn-primary">Search</button>
          <span>Limit</span>
          <select id="limits" onChange={this.setLimit}>
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
          <Gallery cats={this.state.cats} />
          <div className="pages d-flex justify-content-center">
            {this.renderPageButtons()}
          </div>
        </div>
      );
    }
  }
}

//URLs y maximo de gatos
const categoriesURL = 'https://my-json-server.typicode.com/JerryJHC/DBJsonServer/categories';
const catURL = 'https://api.thecatapi.com/v1/images/search?api_key=98d6679f-e35f-4cbc-8a91-85f3e93af700&limit=<limit>&page=<page>&order=Desc&category_ids=<category>';

export default Search;