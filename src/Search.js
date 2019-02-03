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
      page: 1
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
    console.log(searchURL);
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
    this.setState(  { page: this.state })
  }

  render() {
    return (
      <div>
        <span>Categories</span>
        <select id="categories">
          {this.state.categories.map(this.renderOption)}
        </select>
        <button onClick={this.searchCats}>Search</button>
        <select id="limits" onChange={this.setLimit}>
          <option>5</option>
          <option>10</option>
          <option>25</option>
        </select>
        <Gallery cats={this.state.cats} />
        <button id="prev" onClick={this.setPage}>Anterior</button>
        <button id="next" onClick={this.setPage}>Siguiente</button>
      </div>
    )
  }
}

const categoriesURL = 'https://my-json-server.typicode.com/JerryJHC/DBJsonServer/categories';
const catURL = 'https://api.thecatapi.com/v1/images/search?api_key=98d6679f-e35f-4cbc-8a91-85f3e93af700&limit=<limit>&page=<page>&order=Desc&category_ids=<category>';

export default Search;