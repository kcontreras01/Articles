import React, { Component, Fragment } from "react";
import axios from "axios";
import '../styles/searchbar.css';

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";


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
    this.props.sendIsLoading(true);

    axios
      .get(`http://localhost:8080/articles/${this.state.searchTerm}`)
      .then((response) => {
        this.props.sendSearchResults(response.data);
        this.props.sendIsLoading(false);
      });
  };

  render() {
    return (
      <Fragment>
        <form className="searchForm" onSubmit={this.onSubmit}>
          <label>NYT Article Search</label>
          <div id="searchFormContainer"
          >
            <TextField
              label="Search Articles by Keyword"
              value={this.state.searchTerm}
              onChange={this.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <input className="searchButton" type="submit" value="SEARCH" />
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Searchbar;
