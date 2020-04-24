import React, { Component, Fragment } from "react";
import ArticlesView from "./ArticlesView";
import AccountPage from "./AccountPage";
import AddPage from "./AddPage";
import EditPage from "./EditPage";
import Nav from './Nav';
import axios from "axios";
import Searchbar from './Searchbar';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "displayForm",
      current: false,
      searchResults: [],
      saved: [],
      user: false,
    };

    // this.mountingComponent = this.mountingComponent.bind(this);
  }
  componentDidMount() {
    this.mountingComponent();
  }

  mountingComponent() {
    // axios.get(`http://localhost:8080/articles/save/${this.props.user.id}`)
    // .then(res => {
    // 	this.setState({
    // 		saved: res.data
    // 	})
    // })
  }

  editingComponent = (id) => {
    // console.log('in editcomponent')
    axios.get(`http://localhost:8080/articles/edit/${id}`).then((res) => {
      // console.log('the editing data is: ', res)
      this.setState({
        searchResults: res.data,
      });
    });
  }

  onClick = (event) => {
    event.preventDefault();
    this.setState({
      mode: "displayForm",
      value: "",
    });
  }

  changeMode = (mode, current = false) => {
    this.setState((prev) => {
      prev.mode = mode;
      prev.current = current;
      return prev;
    });
  }

  sendSaved = (savedData) => {
    // console.log("the savedData is: ", savedData);
    this.setState({
      saved: [...this.state.saved, savedData],
      mode: "displaySaved",
    });
  }

  goToAccount = () => {
    this.setState({
      mode: "displaySaved",
    });
  }

  goToNewArticle = () =>{
    this.setState({
      mode: "displayNew",
    });
  }

  goToSearch = () => {
    this.setState({
      mode: "displayForm",
    });
  }

  goToEdit = (id) => {
    this.setState({
      mode: "displayEdit",
    });
    this.editingComponent(id);
  }

  setSearchResults = (articles) => {
    this.setState({
      searchResults: articles
    })
  }

  render() {
    return (
      <div>
        <Nav user={this.state.user} />

        <Searchbar sendSearchResults={this.setSearchResults}/>


        {this.state.searchResults ? 
          <ArticlesView
          //   userId={this.props.user.id}
          //   sendSaved={this.sendSaved}
      allArticlesFound={this.state.searchResults}
          />
                  : ''}


        {/* {this.state.mode === "displaySaved" && (
          <div>
            <AccountPage
              deleteFunc={this.mountingComponent}
              dataSearch={this.state.saved}
              editFunc={this.goToEdit}
            />
          </div>
        )}

        {this.state.mode === "displayNew" && (
          <div>
            <AddPage
              addFunc={this.mountingComponent}
              sendSaved={this.sendSaved}
            />
          </div>
        )}

        {this.state.mode === "displayEdit" && (
          <div>
            <EditPage editArr={this.state.searchResults} sendSaved={this.sendSaved} />
          </div>
		)} */
	
	
	
	
	
	}
      </div>
    );
  }
}

export default Content;
