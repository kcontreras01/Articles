import React, { Component, Fragment } from "react";
import axios from "axios";

class Searchbar extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      searchTerm: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:8080/articles/${this.state.searchTerm}`)
      .then((response) => {
        this.props.sendSearchResults(response.data);
      });
  };

  render() {
    return (
      <Fragment>
        <form className="searchForm" onSubmit={this.onSubmit}>
          <label>NYT Article Search</label>

          <div id="searchFormContainer">
            <input
              type="text"
              placeholder="Search Articles by Keyword"
              value={this.state.searchTerm}
              onChange={this.handleChange}
              className="searchFormBar"
            />
            <input className="searchButton" type="submit" value="SEARCH" />
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Searchbar;
