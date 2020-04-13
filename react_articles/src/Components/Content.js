import React, { Component } from 'react';
import ArticlesView from './ArticlesView';
import AccountPage from './AccountPage';
import AddPage from './AddPage';
import EditPage from './EditPage';
import axios from 'axios';


class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
      mode: 'displayForm',
      current: false,			
			value: "",
			results: [],
			saved: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onClick = this.onClick.bind(this);
		this.changeMode = this.changeMode.bind(this);
		this.sendSaved = this.sendSaved.bind(this);
		this.goToAccount = this.goToAccount.bind(this);
		this.mountingComponent = this.mountingComponent.bind(this);
		this.editingComponent = this.editingComponent.bind(this);
		this.goToNewArticle = this.goToNewArticle.bind(this);
		this.goToSearch = this.goToSearch.bind(this);
		this.goToEdit = this.goToEdit.bind(this);

	}

	componentDidMount(){
		this.mountingComponent();
	}

	mountingComponent(){
		// axios.get(`http://localhost:8080/articles/save/${this.props.user.id}`)
		// .then(res => {
		// 	this.setState({
		// 		saved: res.data
		// 	})
		// })		
	}


	editingComponent(id){
				// console.log('in editcomponent')
		axios.get(`http://localhost:8080/articles/edit/${id}`)
		.then(res => {
			// console.log('the editing data is: ', res)
			this.setState({
				results: res.data
			})
		})		
	}


	handleChange(event) {
		event.preventDefault();
		this.setState({
			value: event.target.value
		})
	}

	onClick(event) {
		event.preventDefault();
		this.setState({
			mode: 'displayForm',
			value: ""
		});
	}

	onSubmit(event) {
		event.preventDefault();
		console.log('the state value is: ', this.state.value)
		this.setState({
			mode: 'displayResults'
		});

		axios.get(`http://localhost:8080/articles/${this.state.value}`).then(response => {
			// console.log(this.state.value)
			console.log("res.data", response);
			this.setState({
				results: response.data,
				// value: ''
			})
		})
	};

  changeMode(mode, current = false){
    this.setState(prev => {
      prev.mode = mode;
      prev.current = current;
      return prev;
    });
  }

  sendSaved(savedData){
  	console.log('the savedData is: ', savedData)
    this.setState({
    	saved: [...this.state.saved, savedData], mode: 'displaySaved',
    })
  }

  goToAccount(){
  	this.setState({
  		mode: 'displaySaved'
  	})
  }  

	goToNewArticle(){
		this.setState({
			mode: 'displayNew'
		})
	}  

	goToSearch(){
		this.setState({
			mode: 'displayForm'
		})
	} 
	
	goToEdit(id){
		// console.log('in gotoedit')
		this.setState({
			mode: 'displayEdit'
		});
		this.editingComponent(id);
	} 

	render(){
		return(
			<div>
				<nav>
					<ul>
						<li>
							Articles
						</li>
						<li>			
						{/*	<button className="navButton" onClick={this.goToAccount}>{this.props.user.first_name}'s SAVED ARTICLES</button> */}
						</li>
						<li>			
							<button className="navButton" onClick={this.goToSearch}>SEARCH</button>
						</li>								
						<li>			
							<button className="navButton" onClick={this.goToNewArticle}>CREATE</button>
						</li>						
						<li>
       				<button className="navButton" onClick={this.props.logout}>LOG OUT</button>
						</li>
					</ul>
				</nav>

				{this.state.mode === 'displayForm' && (
					<div>
						<form className="searchForm" onSubmit={this.onSubmit}>
							<input
								type="text"
								placeholder="ARTICLE KEYWORDS"
								value={this.state.value}
								onChange={this.handleChange}
								className="searchFormBar"
							/>
							<br />
							<input className="searchButton" type="submit" value="SEARCH" />
						</form>
					</div>
				)}

				{this.state.mode === 'displayResults' && (
					<div>
						<ArticlesView userId={this.props.user.id} sendSaved={this.sendSaved} dataSearch={this.state.results} />
					</div>
				)}

				{this.state.mode === 'displaySaved' && (
					<div>
						<AccountPage deleteFunc={this.mountingComponent} dataSearch={this.state.saved} editFunc={this.goToEdit}/>
					</div>
				)}	

				{this.state.mode === 'displayNew' && (
					<div>
						<AddPage addFunc={this.mountingComponent} sendSaved={this.sendSaved}/>
					</div>
				)}	

				{this.state.mode === 'displayEdit' && (
					<div>
						<EditPage editArr={this.state.results} sendSaved={this.sendSaved}/>
					</div>
				)}												
			</div>
			)
	}

}

export default Content;
