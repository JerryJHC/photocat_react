import React, { Component } from 'react'
import ajax from './ajax'

class Search extends Component {

  constructor() {
    super();
    this.state = {
      categories: []
    }
    ajax('GET', categoriesURL).then(this.setCategories).catch(() => console.log("Error : AJAX"));
  }

  setCategories = (jsonString) => {
    try{
      this.setState({ categories: JSON.parse(jsonString) });
    }catch{
      console.log("Error: Parse JSON");
    }
  }

  renderOption(category) {
    return (
      <option value={category.id}>{category.name}</option>
    );
  }

  render() {
    return (
      <div>
        <select>
          {this.state.categories.map(this.renderOption)}
        </select>
        <button>Search</button>
      </div>
    )
  }
}

const categoriesURL = 'https://my-json-server.typicode.com/JerryJHC/DBJsonServer/categories';

export default Search;