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
  }

  renderOption(category) {
    return (
      <option value={category.id}>{category.name}</option>
    );
  }

  render() {
    return (
      <div>
        <span>Categories</span>
        <select id="categories">
          {this.state.categories.map(this.renderOption)}
        </select>
        <button onClick={this.searchCats}>Search</button>
        <Gallery cats={this.state.cats} />
      </div>
    )
  }
}

const categoriesURL = 'https://my-json-server.typicode.com/JerryJHC/DBJsonServer/categories';
const catURL = 'https://api.thecatapi.com/v1/images/search?api_key=98d6679f-e35f-4cbc-8a91-85f3e93af700&limit=<limit>&page=<page>&order=Desc&category_ids=<category>';

export default Search;