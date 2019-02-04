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
      page: 0
    }
    ajax('GET', categoriesURL).then(this.setCategories).catch(() => console.log("Error : AJAX CATEGORIES"));
  }

  setCategories = (jsonString) => {
    try {
      this.setState({ categories: JSON.parse(jsonString) });
    } catch{
      console.log("Error: Parse JSON");
    }
  }

  setCats = (jsonString) => {
    try {
      this.setState({ cats: JSON.parse(jsonString) });
    } catch{
      console.log("Error: Parse JSON");
    }
  }

  searchCats = () => {
    let searchURL = catURL.replace('<limit>', this.state.limit).replace('<page>', this.state.page).replace('<category>', document.getElementById("categories").selectedOptions[0].value);
    ajax('GET', searchURL).then(this.setCats).catch(() => console.log("Error : AJAX CATS"));
  }

  renderOption(category) {
    return (
      <option key={category.id} value={category.id}>{category.name}</option>
    );
  }

  setLimit = (event) => {
    this.setState({ limit: event.target.selectedOptions[0].value });
  }

  setPage = (event) => {
    let page = this.state.page;
    if (event.target.id === 'next') {
      page++;
    } else if (event.target.id === 'prev') {
      page = page > 0 ? page - 1 : page;
    } else {
      page = parseInt(event.target.innerText);
    }
    this.setState({ page: page }, this.searchCats);
  }

  renderPageButtons() {
    let pages = [];
    if (this.state.cats.length > 0 || this.state.page > 0) {
      pages.push(<button id="prev" key="prev" onClick={this.setPage} className="btn btn-info">Anterior</button>);
      let startPage = this.state.page < 5 ? 1 : this.state.page - 2;
      for (let i = startPage; i < startPage + 5; i++) pages.push(<button key={i} onClick={this.setPage} className={this.state.page +1 === i ? "btn btn-success" : "btn btn-link"}>{i}</button>);
      pages.push(<button id="next" key="next" onClick={this.setPage} className="btn btn-info">Siguiente</button>);
    }
    return pages;
  }

  render() {
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
          <option>25</option>
        </select>
        <Gallery cats={this.state.cats} />
        <div className="pages d-flex justify-content-center">
          {this.renderPageButtons()}
        </div>
      </div>
    )
  }
}

const categoriesURL = 'https://my-json-server.typicode.com/JerryJHC/DBJsonServer/categories';
const catURL = 'https://api.thecatapi.com/v1/images/search?api_key=98d6679f-e35f-4cbc-8a91-85f3e93af700&limit=<limit>&page=<page>&order=Desc&category_ids=<category>';

export default Search;