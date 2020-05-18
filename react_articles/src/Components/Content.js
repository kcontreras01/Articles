import React, { Component } from "react";
import ArticlesView from "./ArticlesView";
import Searchbar from "./Searchbar";
import CircularProgress from '@material-ui/core/CircularProgress';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      isLoading: false
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

  render() {
    return (
      <div>
        <Searchbar sendSearchResults={this.setSearchResults} sendIsLoading={this.setIsLoading}/>

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

  // Add the Edit and Save Article functionalities once auth is working

  // componentDidMount() {
  //   this.mountingComponent();
  // }

  // mountingComponent() {
  // axios.get(`http://localhost:8080/articles/save/${this.props.user.id}`)
  // .then(res => {
  // 	this.setState({
  // 		saved: res.data
  // 	})
  // })
  // }

  // editingComponent = (id) => {
  //   axios.get(`http://localhost:8080/articles/edit/${id}`).then((res) => {
  //     this.setState({
  //       searchResults: res.data,
  //     });
  //   });
  // }

  // sendSaved = (savedData) => {
  //   // console.log("the savedData is: ", savedData);
  //   this.setState({
  //     saved: [...this.state.saved, savedData],
  //     mode: "displaySaved",
  //   });
  // }

  // this.state = {
  //   mode: "displayForm",
  //   current: false,
  //   searchResults: [],
  //   saved: [],
  //   user: false,
  // };