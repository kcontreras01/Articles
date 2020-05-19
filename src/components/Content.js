import React, { Component } from "react";
import ArticlesView from "./ArticlesView";
import Searchbar from "./Searchbar";
import CircularProgress from '@material-ui/core/CircularProgress';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      isLoading: false,
      errorMessage: ''
    };
  }

  setSearchResults = (articles) => {
    this.setState({
        searchResults: articles,
      });
  };

  setIsLoading = (bool) => {
    this.setState({
      isLoading: bool,
    });
  };

  setErrorMessage = (err) => {
    this.setState({
      errorMessage: err
    })
  }

  render() {
    return (
      <div>
        <Searchbar sendSearchResults={this.setSearchResults} sendIsLoading={this.setIsLoading} sendErrorMessage={this.setErrorMessage}/>
        
        {this.state.errorMessage && <h2 id="errorMessage">{this.state.errorMessage}</h2>}
        
        {this.state.isLoading && 
          <div id="loadingProgress">
            <CircularProgress />
          </div>
        }
        
        {this.state.searchResults && <ArticlesView allArticlesFound={this.state.searchResults} />}
      </div>
    );
  }
}

export default Content;